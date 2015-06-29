angular.module('scotchApp').factory('aboutService', 
	["$http", function ($http) {

    

	return{
			getmessage:function(callback){
				
				// http://127.0.0.1:8080
debugger;
				$http.get("http://127.0.0.1:8080/user").success(function(data){

debugger;
					callback(data);
				});
				 //var Commodity = global.dbHelper.getModel('commodity');
            //Commodity.find({}, function (error, data) {
               // callback(data);
            //});
callback("alex test");
			}	
	};
	}]);