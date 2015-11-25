angular.module('scotchApp').factory('newsService', 
	["$http","$q", function ($http,$q) {

	return{
			saveNews:function(models,callback){
				debugger
					$http.post(url+"news",models).success(function(data){
					callback(data);
				});
			},

			getallNews:function(){	 
 				var deferred = $q.defer();
				$http.get(url+"news"+"?buts="+ (new Date()).valueOf()).success(function(data){
					deferred.resolve(data);
				});
				return deferred.promise;
			},

			
			getNewsByID:function(newsid,callback)
			{
				$http.get(url+"news/"+newsid+"?buts="+ (new Date()).valueOf()).success(function(data){
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