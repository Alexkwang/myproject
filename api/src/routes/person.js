(function() {
  var config, person;
  person = require("../controllers/person");
   config = require("./../config");
 module.exports = function(app) {
 	app.post("" + config.apiPrefix + "/persons", person.Save);
  	app.get("" + config.apiPrefix + "/persons",  person.getallperson);
  	app.get("" + config.apiPrefix + "/persons/:id",  person.getpersonByID);
    app.delete("" + config.apiPrefix + "/persons/:id",  person.deleteperson);
 	return app;
  };

}).call(this);