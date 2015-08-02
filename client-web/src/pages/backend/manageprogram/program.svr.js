angular.module('scotchApp').factory('programService', 
	["$http","$q", function ($http,$q) {

	return{
			saveProgram:function(models,callback){
					$http.post(url+"programs",models).success(function(data){
					
					callback(data);
				});
				
				
			},
			// getallProgram:function(callback){
				
			// 	$http.get(url+"programs").success(function(data){
			// 		callback(data);
			// 	});
			// },

			getallProgram:function(){	 
 				var deferred = $q.defer();
				$http.get(url+"programs").success(function(data){
					deferred.resolve(data);
				});
				return deferred.promise;
			},

			
			getProgramByID:function(projectid,callback)
			{
				$http.get(url+"programs/"+projectid).success(function(data){
					callback(data);
				});
			},

			getMainprogram:function(callback){
				$http.get(url+"programs/mains").success(function(data){
					callback(data);
				});
			},
			deleteProgram:function(program,callback)
			{
				
				debugger

				if(program.Options ==null|| program.Options!="edit")
				{
					//循环删除物理图片
					$.each(program[0].UploadImgList,function(index,item){
						$http.delete(url+"upload/"+item.Name).success(function(){});
					});
				}
				

				$http.delete(url+"programs/"+program[0]._id).success(function(data){
					callback(data);
				});
			}
	};
	}]);