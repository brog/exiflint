var express = require('express');
var routes = require('./routes');
var http = require('http');

var app = express();

var port = 3030;





app.configure(function(){
  app.set('port', process.env.PORT || port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use( express.static(__dirname + '/public'));

});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/exif', routes.exif);
app.get('/', routes.main);
//app.get('/', routes.index);
//app.get('/exif', routes.exif);




http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
