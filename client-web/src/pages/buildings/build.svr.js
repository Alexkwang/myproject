angular.module('scotchApp').factory('buildService', 
	["$http","$q", function ($http,$q) {

	return{
			getprogram:function(callback){
				$http.get(url+"programs/Classification/"+"建筑项目").success(function(data){
					callback(data);
				});
			},
			getprogramByProjectType:function(prjectType,callback){
				$http.get(url+"programs/build/projecttype/"+prjectType).success(function(data){
					callback(data);
				});
			}
			
	};
	}]);