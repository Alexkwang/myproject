(function() {
  var config, fs, mime, request, util, uuid;

  fs = require("fs");

  request = require("request");

  config = require("../core/config");

  util = require("../core/util");

  uuid = require("node-uuid");

  mime = require("mime");

var header = require('./../core/header'); 

  exports.upload = function(req, res, next) {
     header.set(req, res);
     
    var filename, imageData, matches, requestOption, url;
    matches = req.body.file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    imageData = {};
    if (matches.length !== 3) {
      next(new Error("Invalid input string"));
      return;
    }
    imageData.type = matches[1];
    imageData.data = new Buffer(matches[2], "base64");
    filename = "product_" + uuid.v1() + "." + mime.extension(imageData.type);
    url = util.getDFISUrl(filename, true);
    requestOption = {
      url: url,
      headers: {
        "content-type": imageData.type,
        accept: "application/json"
      },
      body: imageData.data
    };

    //fs.renameSync(req.files.image.path,'public/files/img'+ new_name);


    // return request.post(requestOption, function(error, response, body) {
    //   if (error != null) {
    //     return next(error);
    //   } else {
    //     return res.json({
    //       file: util.getDFISUrl(filename)
    //     });
    //   }
    // });
  };

}).call(this);
