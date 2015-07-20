angular.module('scotchApp').factory('programService', 
	["$http", function ($http) {

	return{
			saveProgram:function(models,callback){
				
					$http.post(url+"programs",models).success(function(data){
					
					callback(data);
				});
				
				
			},
			getallProgram:function(callback){
				//http://127.0.0.1:8201/user/5591ee7eaef61aec259d8450
				$http.get(url+"programs").success(function(data){
					callback(data);
				});
			},
			
			getProgramByID:function(projectid,callback)
			{
				$http.get(url+"programs/"+queryid).success(function(data){
					callback(data);
				});
			},

			deleteProgram:function(program,callback)
			{
				
				if(program.Options ==null|| program.Options!="edit")
				{
					//循环删除物理图片
					$.each(program.UploadImgList,function(index,item){
						$http.delete(url+"upload/"+item.Name).success(function(){});
					});
				}
				

				$http.delete(url+"programs/"+program._id).success(function(data){
					callback(data);
				});
			}

	};
	}]);