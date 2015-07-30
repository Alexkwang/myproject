angular.module('scotchApp').factory('homeService', 
	["$http","$q", function ($http,$q) {

	return{
			getMainprogram:function(callback){
				$http.get(url+"programs/mains").success(function(data){
					callback(data);
				});
			}
			
	};
	}]);