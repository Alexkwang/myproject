(function() {
  var config, team;
  team = require("../controllers/team");
   config = require("./../config");
 module.exports = function(app) {
 	app.post("" + config.apiPrefix + "/teams", team.Save);
  	app.get("" + config.apiPrefix + "/teams",  team.getteam);
    app.delete("" + config.apiPrefix + "/teams/:id",  team.deleteteam);
 	return app;
  };

}).call(this);