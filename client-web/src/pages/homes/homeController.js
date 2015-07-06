// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('homeController', ['$scope',function($scope) {
    // create a message to display in our view

   
    $scope.title = 'Everyone come and see how good I look!';
}]);
}).call(this);