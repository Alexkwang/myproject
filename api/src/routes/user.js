(function() {
  var config, user;
  user = require("../controllers/user");
 module.exports = function(app) {
 	app.get("/users", user.viewUser);
  	app.get({path: "/users/:id", version: "1.0.0"}, user.viewUserbyId);
 	return app;
  };

}).call(this);