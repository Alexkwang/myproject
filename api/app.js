var restify = require('restify');
var fs = require('fs');


var controllers = {};
 
 var controllers_path = './controllers'

 console.log(controllers_path)


fs.readdirSync(controllers_path).forEach(function (file) {
  if (file.indexOf('.js') != -1) {
    controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
  }
});

var server = restify.createServer();

//var server = restify.createServer({
 //   name : "myapp"
//});

server.use(restify.queryParser());
server.use(restify.fullResponse()).use(restify.bodyParser());
server.use(restify.CORS());




  // user Start
//server.post({path:"/user",version:"1.0.0"}, controllers.user.createUser)
//server.put("/user/:id", controllers.user.updateUser)
//server.del("/user/:id", controllers.user.deleteUser)
server.get({path: "/user", version: "1.0.0"}, controllers.user.viewUser);
//server.get({path: "/user/:id", version: "1.0.0"}, controllers.user.viewUserbyId);
// user End



var port = process.env.PORT || 8080;
server.listen(port, function (err) {
  if (err)
    console.error(err)
  else

    console.log('%s listening at %s ', server.name , server.url);

    //console.log('Api is ready at : ' + port);
});

if (process.env.environment == 'production')
  process.on('uncaughtException', function (err) {
    console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
  })

