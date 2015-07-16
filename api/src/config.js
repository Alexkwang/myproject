(function() {
  var config, exports;

  config = {};
  config.listenPort = 8201;
  config.mongodbAddress = "mongodb://localhost:27017/test2?readPreference=primaryPreferred";
  config.apiPrefix = "";
  
  config.attachment_images='D:\\Demo\\myproject\\client-web\\dist\\images\\product';

// config.attachment_images='C:\\myproject\\client-web\\dist\\images\\product';
  exports = module.exports = config;

}).call(this);
