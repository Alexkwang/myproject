(function() {
  var config, fs, mime, request, util, uuid;

  fs = require("fs");

  request = require("request");

  config = require("../core/config");

  util = require("../core/util");

  uuid = require("node-uuid");

  mime = require("mime");

var header = require('./../core/header'); 
 var  logger = require("./../core/logger");
  exports.upload = function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
          res.setHeader('Access-Control-Allow-Credentials', true);
  };

}).call(this);
