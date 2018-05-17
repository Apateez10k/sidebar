const newRelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 1337;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/restaurants', express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/services/app.js'));
});

app.get('/app-server.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/services/app-server.js'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/style.css'));
});

app.get('/api/restaurants/:id', (req, res) => {
  const q = db.findOne({ id: parseInt(req.params.id) });

  q.exec((err, place) => {
    if (err) { console.log(err); }
    res.send(place);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
