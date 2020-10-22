const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const User = require('./models/user');
const sessions = require('client-sessions');
const SECRET = `8b7XC!E7@GphgDVESrYC5vufWCoZA4vC`;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const residencesRouter = require('./routes/residences');
const dashboardRouter = require('./routes/dashboard');

const sequelize = require('./config/db');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(
  sessions({
    cookieName: 'session',
    secret: SECRET,
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5,
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// as per https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions

const sessionRequestHandler = async (req, res, next) => {
  if (req.session && req.session.user && req.session.user.email) {
    const user = await User.findOne({
      where: { email: req.session.user.email },
    });
    if (user) {
      const _user = {
        username: user.username,
        email: user.email,
        is_admin: user.is_admin,
      };
      req.user = _user;
      req.session.user = _user;
      res.locals.user = req.session.user;
    }
  }
  next();
};

app.use(sessionRequestHandler);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/residences', residencesRouter);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
