angular.module('scotchApp').factory('newsfrontService', 
	["$http","$q", function ($http,$q) {

	return{
			getnews:function(callback){
				$http.get(url+"news/"+"?buts="+ (new Date()).valueOf()).success(function(data){
					callback(data);
				});
			}	
	};
	}]);