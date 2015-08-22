angular.module('scotchApp').factory('buildService', 
	["$http","$q", function ($http,$q) {

	return{
			getprogram:function(callback){
				$http.get(url+"programs/Classification/"+"建筑项目"+"?buts="+ (new Date()).valueOf()).success(function(data){
					callback(data);
				});
			},
			getprogramByProjectType:function(prjectType,callback){
				$http.get(url+"programs/build/projecttype/"+prjectType+"?buts="+ (new Date()).valueOf()).success(function(data){
					callback(data);
				});
			}
			
	};
	}]);