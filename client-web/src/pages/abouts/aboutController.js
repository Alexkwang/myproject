// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp')
.controller('aboutController', ['$scope','aboutService',function($scope,aboutService) {
 

 $scope.refresh = function () {
   
 };
  
 
   $scope.refresh();
   $scope.$on("refresh", $scope.refresh);



}]);
}).call(this);





