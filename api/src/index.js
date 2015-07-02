(function() {
  var app, config, db, log4js, logger, mongoose, path, port, server;

  logger = require("./common/logger");

  config = require("./config/config");

  log4js = require("log4js");

  path = require("path");

  mongoose = require('mongoose');

  port = config.listenPort || 8201;

  log4js.configure(path.join(__dirname, "log4js_configuration.json"), {
    reloadSecs: 60,
    cwd: __dirname
  });



  mongoose.connect(config.mongodbAddress,{server:{auto_reconnect:true}});

var db = mongoose.connection;

db.on('error', function (err) {
    logger.error('MongoDB connection error:', err);
});
db.once('open', function callback() {
   return logger.log('MongoDB connection is established');
});
db.on('disconnected', function() {
    logger.error('MongoDB disconnected!');
    mongoose.connect(config.mongodbAddress, {server:{auto_reconnect:true}});
});
db.on('reconnected', function () {
    return logger.log('MongoDB reconnected!');
});
/*
  mongoose.connection.on("error", function(err) {
    return logger.error(err);
  });
*/
  app = require("./config/bootstrap")(__dirname);

  app.listen(port, function() {
  //  console.log("%s listening at %s", app.name, app.url);
    return logger.log("Begin listening on port " + port);
  });

  process.on("uncaughtException", function(err) {
    return logger.error("[uncaught-error] exception: " + err + "\r\nstack: " + err.stack);
  });

}).call(this);
