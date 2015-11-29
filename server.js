var express   = require('express');
var mongoose   = require('mongoose');
var app       = express();
 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
 

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*');
  next();
  })
 
require('./routes/routes.js')(app);
 
app.listen(port);
console.log('The App runs on port ' + port);