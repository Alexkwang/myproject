(function(){

  var restify = require('restify');
  var fs = require("fs");
  var cors = require('cors');
  var busboy = require('connect-busboy');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var multer  = require('multer');
  var config = require("./config");
  var header = require('./header'); 

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
      app.use(cors(corsOption));

      app.use(busboy());
 

    app.use(multer({ dest: config.attachment_images,
        onFileUploadComplete:function (file, req, res) {
         //header.set(req,res);
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,multipart/form-data');
          res.setHeader('Access-Control-Allow-Credentials', true);
         res.json({
                    type: true,
                    data: file.path
                });
       
        }
      }));
  app.use(restify.bodyParser({
          keepExtensions:true,
           limit:10000000,// 10M limit
           defer:true//enable event 
       }));
      app.use(restify.acceptParser(app.acceptable));
      app.use(restify.dateParser());
      app.use(restify.queryParser());
      app.use(restify.jsonp());
      app.use(restify.gzipResponse());
     

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

    return app;
};

}).call(this);


