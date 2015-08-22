angular.module('scotchApp').factory('homeService', 
	["$http","$q", function ($http,$q) {

	return{
			getMainprogram:function(callback){
				$http.get(url+"programs/mains"+"?buts="+ (new Date()).valueOf()).success(function(data){
					callback(data);
				});
			}
			
	};
	}]);