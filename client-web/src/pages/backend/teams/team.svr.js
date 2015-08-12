angular.module('scotchApp').factory('teamService', 
	["$http","$q", function ($http,$q) {
	return{
		saveteam:function(models,callback){
			$http.post(url+"teams",models).success(function(data){
					callback(data);
				});
		},
		getteam:function(callback){	 	
				$http.get(url+"teams").success(function(data){
					callback(data);
				});	
		},
		deleteteam:function(team,callback)
			{
				debugger
				$http.delete(url+"upload/"+team[0].imagename).success(function(){});

				$http.delete(url+"teams/"+team[0]._id).success(function(data){
					callback(data);
				});
		}


		/*
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
		*/
	};

}]);