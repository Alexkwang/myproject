(function() {
  var config, user;
  user = require("../controllers/user");
  config = require("../core/config");

 module.exports = function(app) {
 	app.get("/users", user.viewUser);
  	app.get({path: "/users/:id", version: "1.0.0"}, user.viewUserbyId);
 	return app;
  };

}).call(this);