// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp')
.controller('teamsController', ['$scope',function($scope) {


 $scope.refresh = function () {
 };
  
 
   $scope.refresh();
   $scope.$on("refresh", $scope.refresh);





}]);
}).call(this);




 
