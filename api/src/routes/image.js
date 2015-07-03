(function() {
  var  image = require("../controllers/image");
 module.exports = function(app) {
 	app.post("/users", image.upload);
 	return app;
  };

}).call(this);