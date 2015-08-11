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

		getPersonByID:function(personid,callback)
			{
				$http.get(url+"persons/"+personid).success(function(data){
					callback(data);
				});
			},

		deletePerson:function(person,callback)
			{
			
				$http.delete(url+"upload/"+person[0].imagename).success(function(){});

				$http.delete(url+"persons/"+person[0]._id).success(function(data){
					callback(data);
				});
		}
	};

}]);