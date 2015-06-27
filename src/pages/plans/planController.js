// create the controller and inject Angular's $scope
(function () {
	'use strict';
angular.module('scotchApp').controller('planController',['$scope', function($scope) {
    // create a message to display in our view
     $scope.message = 'plan pages.';
}]);

}).call(this);