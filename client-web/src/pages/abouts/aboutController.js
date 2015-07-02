// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('aboutController', ['$scope','aboutService',function($scope,aboutService) {
    // create a message to display in our view
   $scope.message = 'about pages.';

 $scope.refresh = function () {


     aboutService.getmessage(function(data){


 	debugger;
    	$scope.message = 'about pages.' +data.email;
    });
 };
  
 
   $scope.refresh();
   $scope.$on("refresh", $scope.refresh);

}]);
}).call(this);





