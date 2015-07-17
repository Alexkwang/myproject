(function() {

   var fs = require("fs");

   var express = require('express');

   var config = require("./../config");

   var busboy = require('connect-busboy');

   var bodyParser = require('body-parser');
   var cors = require('cors');
   var upload = require('jquery-file-upload-middleware');

   var methodOverride = require('method-override');

   var gm = require('gm').subClass({ imageMagick: true });
 
  module.exports = function(appPath) {
    var app, models_path, routes_path;
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
 
 var corsOption = {
       methods:['PUT','POST','GET','DELETE','OPTIONS'],
       origin:"*"
     };


    app =  express();
   

    app.use(bodyParser.json({limit: '10mb'}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));
    app.use(methodOverride());
    app.use(busboy());
    app.use(cors(corsOption));

    upload.configure({
        uploadDir: config.attachment_images,
        uploadUrl: '/uploads',
        accessControl: {
        allowOrigin: '*',
        allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE'
    },

        imageVersions: {
            thumbnail: {
                width: 80,
                height: 80
            }
        }
    });


 app.use('/upload',upload.fileHandler());
 
 upload.on('end', function (fileInfo) {
  var filepath =upload.options.uploadDir();
  var fileName = fileInfo.name;
      gm(filepath+'/'+fileName)
        .resize(80, 80)
        .noProfile()
        .write(filepath+'/thumbnail/'+fileName, function (err) {
          if (!err) console.log('done');
        });

      fileInfo.thumbnailUrl="./images/product/thumbnail/"+fileName;
      fileInfo.url="./images/product/"+fileName;
  });

  upload.on('delete', function (fileName) {
   var filepath =upload.options.uploadDir();
      fs.rmdir(filepath+'/'+fileName,function(){});
      fs.rmdir(filepath+'/thumbnail/'+fileName,function(){});
      console.log("files remove complete");
    
});


      var router = express.Router();

     app.use(router);
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

    

    return app;

  };

}).call(this);
