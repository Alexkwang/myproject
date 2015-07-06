(function() {
  var config, user;
  user = require("../controllers/user");
   config = require("./../config");
 module.exports = function(app) {
 	app.get("" + config.apiPrefix + "/users", user.viewUser);
  	app.get("" + config.apiPrefix + "/users/:id",user.viewUserbyId);
 	return app;
  };

}).call(this);