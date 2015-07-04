(function() {
  var config, env, exports;

  config = {};

  env = "[replace_env]";

  config.listenPort = 8201;

  config.attachment_images = "./images/product/";

  config.debug = true;

  config.languages = ["en-us", "zh-cn", "zh-tw"];

  if (env === "GDEV") {
    config.mongodbAddress ="mongodb://localhost:27017/test2?readPreference=primaryPreferred";
    config.frameworkAppId = "1f48a705-b734-476c-b32b-29359177c122";
  } else if (env === "PRD") {
    config.mongodbAddress = "mongodb://localhost:27017/test2?readPreference=primaryPreferred";
    config.frameworkAppId = "0915dbb7-27f5-4740-9e50-2bc9c0fb3378";
  } 

  exports = module.exports = config;

}).call(this);
