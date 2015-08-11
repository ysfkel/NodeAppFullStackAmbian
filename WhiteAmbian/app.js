var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./models/user')
var routes = require('./routes/index');
var users = require('./routes/users');
var admin=require('./routes/admin');

//Require API's
var apiMealCategory=require('./routes/apiMealCategory');
var apiMeal=require('./routes/apiMeal');
var apiCuisine=require('./routes/apiCuisine');
var apiIngredient=require('./routes/apiIngredient');
//
var mongoose=require('mongoose');
if(process.env.DEV_ENV){
  console.log('DEV ENV')
  var db=mongoose.connect('mongodb://localhost/mydbtest')
}else{
   var db=mongoose.connect('mongodb://whiteAmbientApp:Qgp_6iyVvCUaKDHQ_MMHC6TZNpONQ_xuI2VmS62A1h0-@ds038888.mongolab.com:38888/whiteAmbientApp')
}

/* 
require('./models/models');
mongoose.connect('mongodb://localhost/test-chirp');   
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
  req.db=db;
  next();
})

app.use('/', routes);
app.use('/users', users);
app.use('/admin',admin);
app.use('/api',apiMealCategory);
app.use('/api',apiMeal);
app.use('/api',apiCuisine)
app.use('/api',apiIngredient)


//app.use(multer({dest:'./uploads/'}).array('photo'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;



var items=[],
items2=[];

function addToList(collection,item){
  collection.push(item);
}





addToList(items,1);
addToList(items2,2);