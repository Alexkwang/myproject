(function() {
  var busboy, config, express, fs,upload,gm;

  fs = require("fs");

  express = require('express');

  config = require("./../config");

  busboy = require('connect-busboy');

  upload = require('jquery-file-upload-middleware');

  gm = require('gm');

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
 
    app = express();

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


    app.configure(function() {
      app.use(express.urlencoded({
        limit: '10mb'
      }));
      app.use(express.json({
        limit: '10mb'
      }));
      app.use('/upload',upload.fileHandler());
      
      upload.on('end', function (fileInfo) {
    // insert file info
    //console.log("files upload complete");

        var filepath =upload.options.uploadDir();
        var fileName = fileInfo.name;

       var fileReadStream = fs.createReadStream(filepath+'/'+fileName);
       var fileWriteStream = fs.createWriteStream(filepath+'/thumbnail/'+fileName);

       fileReadStream.pipe(fileWriteStream);

       fileWriteStream.on('close',function(){
                 console.log('copy over');  
       });


        // var writeStream = fs.createWriteStream(filepath+'/thumbnail/'+fileName);
        //     gm(filepath+'/'+fileName)
        //     .resize('80', '80')
        //     .stream()
        //     .pipe(writeStream);



      fileInfo.thumbnailUrl="./images/product/thumbnail/"+fileName;

});


      upload.on('delete', function (fileName) {
    // remove file info
    console.log("files remove complete");
    console.log(fileName);
});

      app.use(express.methodOverride());
   
      app.use(busboy());
     
      app.use(app.router);
      return app.use(function(err, req, res, next) {
        res.statusCode = 500;
        res.json({
          Message: err.message,
          Stack:  err.stack 
        });
        return res.end();
      });
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
