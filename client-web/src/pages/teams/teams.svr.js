angular.module('scotchApp').factory('teamsService', 
	["$http","$q", function ($http,$q) {

	return{
			getteam:function(callback){	 	
				$http.get(url+"teams").success(function(data){
					callback(data);
				});	
		},
		gettbs:function(callback){	 	
				$http.get(url+"tbs").success(function(data){
					callback(data);
				});	
		}
	
	
	};


	}]);