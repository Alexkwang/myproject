angular.module('scotchApp').factory('aboutService', 
	["$http", function ($http) {

	return{
			getmessage:function(callback){
				//http://127.0.0.1:8201/user/5591ee7eaef61aec259d8450
				$http.get("http://127.0.0.1:8201/users").success(function(data){
					callback(data);
				});
			}	
	};
	}]);