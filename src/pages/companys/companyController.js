// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('companyController', ['$scope',function($scope) {
    // create a message to display in our view
     $scope.message = 'company pages.';
}]);
}).call(this);