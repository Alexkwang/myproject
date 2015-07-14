// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp')
.controller('aboutController', ['$scope','aboutService',function($scope,aboutService) {
    // create a message to display in our view
   $scope.message = 'about pages.';

 $scope.refresh = function () {


     aboutService.getmessage(function(resultData){

     	if(resultData.data.length>0)
     	{
          $scope.message = 'about pages.' +resultData.data[0].email;
     	}
     	else
     	{
     		$scope.message = 'about pages. no data!' 
     	}

    	
    });
 };
  
 
   $scope.refresh();
   $scope.$on("refresh", $scope.refresh);

// $('#fileupload')
//     .bind('fileuploaddone', function (e, data) {

// //debugger;

//     });


}]);
}).call(this);





