// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('buildController', ['$scope',function($scope) {
    // create a message to display in our view
  $scope.message = 'build pages.';
}]);
}).call(this);
