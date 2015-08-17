angular.module('scotchApp').factory('newsService', 
	["$http","$q", function ($http,$q) {

	return{
			saveNews:function(models,callback){
					$http.post(url+"news",models).success(function(data){
					callback(data);
				});
			},

			getallNews:function(){	 
 				var deferred = $q.defer();
				$http.get(url+"news").success(function(data){
					deferred.resolve(data);
				});
				return deferred.promise;
			},

			
			getNewsByID:function(newsid,callback)
			{
				$http.get(url+"news/"+newsid).success(function(data){
					callback(data);
				});
			},

			
			deleteNews:function(newsid,callback)
			{
				$http.delete(url+"news/"+newsid).success(function(data){
					callback(data);
				});
			}
	};
	}]);