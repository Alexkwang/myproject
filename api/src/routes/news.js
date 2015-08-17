(function() {
  var config, news;
  news = require("../controllers/news");
   config = require("./../config");
 module.exports = function(app) {
 	app.post("" + config.apiPrefix + "/news", news.Save);
  	app.get("" + config.apiPrefix + "/news",  news.getAllNews);
  	app.get("" + config.apiPrefix + "/news/:id",  news.getNewsByID);
    app.delete("" + config.apiPrefix + "/news/:id",  news.deleteNewsByID);
 	return app;
  };

}).call(this);