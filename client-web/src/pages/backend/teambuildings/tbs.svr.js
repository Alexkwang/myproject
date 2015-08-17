angular.module('scotchApp').factory('tbsService', 
	["$http","$q", function ($http,$q) {

	return{
			saveTBs:function(models,callback){
					$http.post(url+"tbs",models).success(function(data){
					callback(data);
				});
			},

			getallTBs:function(){	 
 				var deferred = $q.defer();
				$http.get(url+"tbs").success(function(data){
					deferred.resolve(data);
				});
				return deferred.promise;
			},

			
			getTBsByID:function(tbsid,callback)
			{
				$http.get(url+"tbs/"+tbsid).success(function(data){
					callback(data);
				});
			},

			
			deleteTBsByID:function(tbsid,callback)
			{
				$http.delete(url+"tbs/"+tbsid).success(function(data){
					callback(data);
				});
			}
	};
	}]);