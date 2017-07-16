'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    db = require('./models'),
    controllers = require('./controllers'),
    bodyParser = require('body-parser');

var app = express(),
    router = express.Router();

// set port to env or 3000
var port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!
var dbUser = process.env.MLAB_DBUSER
var dbPassword = process.env.MLAB_DBPASSWORD
var databaseUrl = 'mongodb://' + dbUser + ':' + dbPassword + '@ds133331.mlab.com:33331/mywayfarer'
// mongoose.connect(databaseUrl)


//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});  //  app.use(function

app.get('/api', controllers.api.index);
app.get('/api/nuke', controllers.comments.nuke);
app.get('/api/comments', controllers.comments.index);
app.post('/api/comments', controllers.comments.create);
app.get('/api/comments/:id', controllers.comments.show);
app.delete('/api/comments/:id', controllers.comments.destroy);
app.put('/api/comments/:id', controllers.comments.update);
app.get('/api/profile/comments/:id', controllers.comments.showUser);
app.get('/api/cities', controllers.cities.index);
app.get('/api/cities/:name', controllers.cities.show);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
