(function() {
  var config, news;
  tbs = require("../controllers/tbs");
   config = require("./../config");
 module.exports = function(app) {
 	app.post("" + config.apiPrefix + "/tbs", tbs.Save);
  	app.get("" + config.apiPrefix + "/tbs",  tbs.getAllTBs);
  	app.get("" + config.apiPrefix + "/tbs/:id",  tbs.getTBsByID);
    app.delete("" + config.apiPrefix + "/tbs/:id",  tbs.deleteTBsByID);
 	return app;
  };

}).call(this);