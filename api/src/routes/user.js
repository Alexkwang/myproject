(function() {

  var config, user;

  user = require("../controllers/user");
  config = require("../config/config");
var logger = require("../common/logger");
  
 module.exports = function(app) {
  // logger.log("22222");
  
return app.get("/users", user.viewUser);


      //  returnapp.get({path: "/users", version: "1.0.0"}, users.viewUser);
  
 //return app.get({path: "/users/:id", version: "1.0.0"}, users.viewUserbyId);
  };

}).call(this);