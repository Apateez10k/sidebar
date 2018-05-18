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

module.exports = db;
module.exports = Places;
