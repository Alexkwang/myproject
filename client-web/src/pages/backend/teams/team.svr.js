angular.module('scotchApp').factory('teamService', 
	["$http","$q", function ($http,$q) {
	return{
		saveperson:function(models,callback){
			$http.post(url+"persons",models).success(function(data){
					callback(data);
				});
		},
		getallperson:function(){	 
 				var deferred = $q.defer();
				$http.get(url+"persons").success(function(data){
					deferred.resolve(data);
				});
				return deferred.promise;
		},
		deleteProgram:function(personid,callback)
			{
				$http.delete(url+"persons/"+personid).success(function(data){
					callback(data);
				});
		}
	};

}]);