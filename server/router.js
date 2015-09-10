var middleware = require('./config/middleware');
var mongoose = require('mongoose');
var index = require('./routes/index');
var Comment = require('./models/Comment');
var apiComment = require('./api/comment');

module.exports = function(app) {

  // Add common middleware here
  middleware(app);

  // Setup the Database Connection
  mongoose.createConnection('mongodb://localhost/commentSystem', function(err) {
    if(err) {
      console.log('connection error', err);
    } else {
      console.log('connection successful');
    }
  });

  // All routes
  app.use('/', index);
  app.use('/api/comments/', apiComment);
  

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500).json({
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: {}
    });
  });

};