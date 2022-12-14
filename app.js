const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// middlewares
const error404 = require('./middlewares/error404');
const errorHandler = require('./middlewares/errorHandler');
const userLoginMiddleware = require('./middlewares/userLoginMiddleware');

//api routes
const user = require('./api/routes/userRoutes');
const transaction = require('./api/routes/transactionRoutes');
const category = require('./api/routes/categoryRoutes');

//view routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const transactionsRouter = require('./routes/transactions');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'valor',
  resave: false,
  saveUninitialized : false
}));
app.use(cookieParser());
app.use(userLoginMiddleware);

//api endpoints
app.use('/api/users', user);
app.use('/api/transactions', transaction);
app.use('/api/categories', category);

//view routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/transactions', transactionsRouter);

// catch 404 and forward to error handler
app.use(error404);

// error handler
app.use(errorHandler);

module.exports = app;
