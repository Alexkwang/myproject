(function(){

  var restify = require('restify');
  var fs = require("fs");
  var cors = require('cors');
  var busboy = require('connect-busboy');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var config = require("../config/config");
module.exports = function(appPath){

    var app, corsOption, domainError, models_path, routes_path, token;
    models_path = appPath + "/models";
    fs.readdirSync(models_path).forEach(function(file) {
      var newPath, stat;
      newPath = models_path + "/" + file;
      stat = fs.statSync(newPath);
      if (stat.isFile()) {
        if (/(.*)\.(js$)/.test(file)) {
          return require(newPath);
        }
      }
    });
 

     app= restify.createServer();
  
     corsOption = {
       methods:['PUT','POST','GET','DELETE','OPTIONS'],
       origin:"*"
     };
     
      app.use(restify.CORS());
      app.use(restify.fullResponse());
    


      app.use(bodyParser.json({limit: '10mb'}));
      app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));
      app.use(methodOverride());
    //  app.use(cors(corsOption));

      app.use(busboy());
  
      app.use(restify.acceptParser(app.acceptable));
      app.use(restify.dateParser());
      app.use(restify.queryParser());
      app.use(restify.jsonp());
      app.use(restify.gzipResponse());
      app.use(restify.bodyParser());



     app.use(function(err, req, res, next) {
        res.statusCode = 500;
        res.json({
          Message: err.message,
          Stack: config.debug === true ? err.stack : void 0
        });
        return res.end();
      });

    routes_path = appPath + "/routes";
    fs.readdirSync(routes_path).forEach(function(file) {
      var newPath, stat;
      newPath = routes_path + "/" + file;

      stat = fs.statSync(newPath);
      if (stat.isFile()) {
        if (/(.*)\.(js$)/.test(file)) {
          return require(newPath)(app);
        }
      }
    });
  //  exports = module.exports =  app;
    return app;
};

}).call(this);



// (function() {
//   var busboy, config, cors, express, fs,restify;

//   fs = require("fs");

//   express = require('express');

//   cors = require('cors');

//   config = require("../config/config");

//   busboy = require('connect-busboy');

//   restify = require('express-restify-mongoose');

// var bodyParser = require('body-parser');

// var methodOverride = require('method-override');


//   module.exports = function(appPath) {
//     var app, corsOption, domainError, models_path, routes_path, token;
//     models_path = appPath + "/models";
//     fs.readdirSync(models_path).forEach(function(file) {
//       var newPath, stat;
//       newPath = models_path + "/" + file;
//       stat = fs.statSync(newPath);
//       if (stat.isFile()) {
//         if (/(.*)\.(js$)/.test(file)) {
//           return require(newPath);
//         }
//       }
//     });

//     mongoose = require('mongoose');
//     var usermodel = mongoose.model('User');

  
//      corsOption = {
//        methods:['PUT','POST','GET','DELETE','OPTIONS'],
//        origin:"*"
//      };
//       app = express();
//       app.use(bodyParser.json({limit: '10mb'}));
//       app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));
//       app.use(methodOverride());
//       app.use(cors(corsOption));

//       app.use(busboy());
    
//       var router = express.Router();
//       restify.serve(router, usermodel);
     
//       app.use(router);
//       return app.use(function(err, req, res, next) {
//         res.statusCode = 500;
//         res.json({
//           Message: err.message,
//           Stack: config.debug === true ? err.stack : void 0
//         });
//         return res.end();
//       });

//     routes_path = appPath + "/routes";
//     fs.readdirSync(routes_path).forEach(function(file) {
//       var newPath, stat;
//       newPath = routes_path + "/" + file;
//       stat = fs.statSync(newPath);
//       if (stat.isFile()) {
//         if (/(.*)\.(js$)/.test(file)) {
//           return require(newPath)(app);
//         }
//       }
//     });
//     return app;
//   };

// }).call(this);
