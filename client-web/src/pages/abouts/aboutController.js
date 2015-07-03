// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('aboutController', ['$scope','aboutService',function($scope,aboutService) {
    // create a message to display in our view
   $scope.message = 'about pages.';

 $scope.refresh = function () {


     aboutService.getmessage(function(resultData){


 	debugger;
    	$scope.message = 'about pages.' +resultData.data[0].email;
    });
 };
  
 
   $scope.refresh();
   $scope.$on("refresh", $scope.refresh);

}]);
}).call(this);





