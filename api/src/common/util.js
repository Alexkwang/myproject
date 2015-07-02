(function() {
  var config, crypto;

  crypto = require("crypto");

  config = require("../config/config");

  exports.getHash = function(data) {
    return crypto.createHash("md5").update(data).digest("hex");
  };

  exports.toBase64String = function(data) {
    if (data != null) {
      return new Buffer(data).toString("base64");
    } else {
      return "";
    }
  };

  exports.fromBase64String = function(data) {
    if (data != null) {
      return new Buffer(data, "base64").toString("ascii");
    } else {
      return "";
    }
  };

}).call(this);
