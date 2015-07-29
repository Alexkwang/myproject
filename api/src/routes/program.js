(function() {
  var config, program;
  program = require("../controllers/program");
   config = require("./../config");
 module.exports = function(app) {
 	app.post("" + config.apiPrefix + "/programs", program.Save);
  	app.get("" + config.apiPrefix + "/programs",  program.viewprogram);
  	app.get("" + config.apiPrefix + "/programs/:id",  program.getprogramByID);
    app.delete("" + config.apiPrefix + "/programs/:id",  program.deleteprogramByID);
 	return app;
  };

}).call(this);