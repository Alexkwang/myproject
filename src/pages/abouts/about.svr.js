angular.module('scotchApp').factory('aboutService', 
	["$http", function ($http) {

	return{
			getmessage:function(callback){
				callback("关于我们的一些消息在此展示！");
			}	
	};
	}]);