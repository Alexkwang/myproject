(function() {
  var  image = require("../controllers/image");
 module.exports = function(app) {
 	app.post("/upload/image", image.upload);
 	return app;
  };

}).call(this);