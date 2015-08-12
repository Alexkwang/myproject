angular.module('scotchApp').factory('teamsService', 
	["$http","$q", function ($http,$q) {

	return{
			getteam:function(callback){	 	
				$http.get(url+"teams").success(function(data){
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