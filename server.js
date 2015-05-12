'use strict';

var express = require('express');
// var bodyparser = require('body-parser');
// var mongoose = require('mongoose');
var http = require('http');
// var passport = require('passport');
var app = express();

// mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/GolfScorecard');

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));
app.get('/', function(request, response) {
	response.sendFile('./views/index.html', {'root': __dirname});
});

// app.set('jwttokensecret', process.env.JWT_SECRET || 'developmentsecret');
// app.set('secret', process.env.SECRET || 'developmentsecret');

// app.use(passport.initialize());

// require('./lib/passport')(passport);
// var jwtauth = require('./lib/jwtauth')(app);

// app.use(bodyparser.json());

var server = http.createServer(app);

app.set('port', process.env.PORT || 6500);

server.listen(app.get('port'), function() {
  console.log('server is listening on port: ', app.get('port'));
});