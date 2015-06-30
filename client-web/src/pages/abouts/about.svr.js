angular.module('scotchApp').factory('aboutService', 
	["$http", function ($http) {

    

	return{
			getmessage:function(callback){

				$http.get("http://127.0.0.1:5900/user/5591ee7eaef61aec259d8450").success(function(data){
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