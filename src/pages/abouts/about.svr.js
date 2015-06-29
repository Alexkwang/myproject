angular.module('scotchApp').factory('aboutService', 
	["$http", function ($http) {

    

	return{
			getmessage:function(callback){
				
				 //var Commodity = global.dbHelper.getModel('commodity');
            //Commodity.find({}, function (error, data) {
               // callback(data);
            //});
callback("alex test");
			}	
	};
	}]);