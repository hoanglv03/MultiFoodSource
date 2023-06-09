var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var SortMiddleware = require('./middlewares/SortMiddlewares')
var paniMiddleware = require('./middlewares/paginationMiddleware')
const flash = require('connect-flash');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
var userRestaurantRouter = require('./routes/restaurant/restaurantUser');
var restaurantRouter = require('./routes/restaurant/restaurant');

const session = require('express-session');
var app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  secret: process.env.KEY_SESSION,
  resave: true,
  saveUninitialized: true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(SortMiddleware)
app.use(flash());
app.use(paniMiddleware(10))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/home', homeRouter);
app.use('/users', usersRouter);
app.use('/restaurant-user', userRestaurantRouter);
app.use('/restaurant', restaurantRouter);

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
