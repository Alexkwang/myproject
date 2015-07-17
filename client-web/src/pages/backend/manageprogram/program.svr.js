angular.module('scotchApp').factory('programService', 
	["$http", function ($http) {

	return{
			saveProgram:function(models,callback){

				$http.post("http://127.0.0.1:8201/programs",models).success(function(data){
					
					callback(data);
				});
			},
			getallProgram:function(callback){
				//http://127.0.0.1:8201/user/5591ee7eaef61aec259d8450
				$http.get("http://127.0.0.1:8201/programs").success(function(data){
					callback(data);
				});
			}		
	};
	}]);