(function() {
  var defaultLogger, errorLogger, infoLogger, log4js;

  log4js = require("log4js");

  infoLogger = log4js.getLogger("info");

  errorLogger = log4js.getLogger("errors");

  defaultLogger = log4js.getLogger();

  exports.logInfo = function(args) {
    return infoLogger.info(args);
  };

  exports.error = function(args) {
    errorLogger.error(args);
    if (args.stack != null) {
      return errorLogger.error(args);
    }
  };

  exports.consoleLog = function(args) {
    return defaultLogger.debug(args);
  };

}).call(this);
