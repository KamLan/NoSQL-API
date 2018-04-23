var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./models/model'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.2:27017/music'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var routes = require('./routes/apiNosqlRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('api NoSQL RESTful API server started on: ' + port);
