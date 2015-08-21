(function() {
  var app, config, db, log4js, logger, mongoose, path, port, server;

  //logger = require("./core/logger");

  config = require("./config");

  //log4js = require("log4js");

  path = require("path");

  mongoose = require('mongoose');

   app = require("./core/bootstrap")(__dirname);

  port = config.listenPort || 8201;

  // log4js.configure(path.join(__dirname, "log4js_configuration.json"), {
  //   reloadSecs: 60,
  //   cwd: __dirname
  // });

mongoose.connect(config.mongodbAddress,{server:{auto_reconnect:true}});

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('MongoDB connection error:' + err);
    //logger.error('MongoDB connection error:', err);
});
db.once('open', function callback() {
   return console.log('MongoDB connection is established');// logger.log('MongoDB connection is established');
});
db.on('disconnected', function() {
    console.log('MongoDB disconnected');//logger.error('MongoDB disconnected!');
    mongoose.connect(config.mongodbAddress, {server:{auto_reconnect:true}});
});
db.on('reconnected', function () {
    return  console.log('MongoDB reconnected');//logger.log('MongoDB reconnected!');
});

app.listen(port, function() {
    return console.log('Begin listening on port: '+ port);// logger.log("Begin listening on port " + port);
  });

  process.on("uncaughtException", function(err) {
    return console.log("[uncaught-error] exception: " + err + "\r\nstack: " + err.stack);//logger.error("[uncaught-error] exception: " + err + "\r\nstack: " + err.stack);
  });

}).call(this);
