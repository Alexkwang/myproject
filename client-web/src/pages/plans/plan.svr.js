angular.module('scotchApp').factory('planService', 
	["$http","$q", function ($http,$q) {

	return{
			getprogram:function(callback){
				$http.get(url+"programs/Classification/"+"规划项目"+"?buts="+ (new Date()).valueOf()).success(function(data){
					callback(data);
				});
			},
			getprogramByProjectType:function(prjectType,callback){
				$http.get(url+"programs/plan/projecttype/"+prjectType+"?buts="+ (new Date()).valueOf()).success(function(data){
					callback(data);
				});
			}
			
	};
	}]);