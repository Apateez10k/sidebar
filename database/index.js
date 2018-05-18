var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');

const mongoose = require('mongoose');
const mongoUrlDocker = 'mongodb://database/sidebar';
const mongoUrl = 'mongodb://localhost/sidebar';

mongoose.connect(mongoUrl);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open')
});
  
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);

  mongoose.connect(mongoUrl)

});

const placesSchema = mongoose.Schema({
  id: Number,
  name: String,
  menu_url: String,
  address: String,
  location: String,
  url: String,
  phone: String,
  hours: [],
  coords: {
    lat: Number,
    lng: Number
  }
  });

const Places = mongoose.model('places', placesSchema);

const clearDb = (cb) => {
  Places.remove({}, cb)
}

const db = mongoose.connect(mongoUrl);

module.exports.findCached = function (db, redis, id, callback) {
    redis.get(id, function (err, reply) {
        if (err) {
          callback(null);
        } else if (reply) {
          //Book exists in cache
          callback(JSON.parse(reply));
        } else {
            //Book doesn't exist in cache - we need to query the main database
            db.collection('places').findOne({ id: id }, function (err, data) {
                if (err || !doc) {
                  callback(null);
                } else {
                    redis.set(id, JSON.stringify(data), function () {
                        callback(data);
                    });
                }
            });
        }
    });
};

module.exports = db;
module.exports = Places;
