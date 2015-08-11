angular.module('scotchApp').factory('teamsService', 
	["$http","$q", function ($http,$q) {

	return{
			getAllPerson:function(callback){
				$http.get(url+"persons").success(function(data){
					callback(data);
				});
			}
			// getAllActivity:function(callback){
			// 	// $http.get(url+"programs/plan/projecttype/"+prjectType).success(function(data){
			// 	// 	callback(data);
			// 	// });
			// }
	
	
	};


	}]);