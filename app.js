var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listvideosRouter= require('./routes/listvideos');
var addvideoRouter = require('./routes/addvideo');
var deletevideoRouter = require('./routes/deletevideo')
var findvideoidRouter = require('./routes/findvideoid')
var findbyuploaderRouter = require('./routes/findbyuploader');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listvideos', listvideosRouter);
app.use('/addvideo', addvideoRouter);
app.use('/deletevideo', deletevideoRouter);
app.use('/findvideoid', findvideoidRouter);
app.use('/findbyuploader', findvideoidRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



