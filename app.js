// dependencies
var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public/stylesheets')));


//configuration

app.configure('development', function() {
  app.use(express.logger());
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function() {
  app.use(express.logger());
  app.use(express.errorHandler());
});


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Routes

app.get('/', function(req, res) { 
  res.render('index');
});


var server = app.listen(3000, function() {
  console.log('listening on port %d', server.address().port);
});