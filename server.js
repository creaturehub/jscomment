var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var FIXTURE = [
  { "author": "Here", "text": "hey there!" },
  { "author": "collapse", "text": "oh my" },
  { "author": "Pete Hunt", "text": "This is one comment" },
  { "author": "Jordan Walke", "text": "This is *another* comment" }
];

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/comments', function(req, res) {
  res.json(FIXTURE); 
});

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000\n');
});
