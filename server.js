// dependencies and modules
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bongs = require('./bongs');
require('dotenv').config();

const app = express();

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', function(req, res) {
  res.render('pages/index', {
      title: "Express Gallery", 
      current: "home",
      tagline: "Welcome to PinkBong"
    });
});

// subscribe page
app.get('/subscribe', function(req, res) {
  res.render('pages/subscribe', {
      title: "Subscribe", 
      current: "subscribe",
      tagline: "Sign up to receive our newsletters!"
    });
});

// gallery page
app.get('/gallery', function(req, res) {
  res.render('pages/gallery', {
      title: "Pink Bongs", 
      current: "gallery",
      tagline: "Here are the options"
    });
});



// JSON end-point
app.get('/api/v0/gallery', function(req, res) {
  res.json(bongs);
});

// after subscribe
app.post('/users', function(req, res) {
  res.send(`<p>Thank you, ${req.body.name}! We'll send our newsletters to ${req.body.email}.</p>`);
});

// if there is error/fails 
app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port variable
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
