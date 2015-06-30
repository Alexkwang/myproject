// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('newsController', ['$scope',function($scope) {
    // create a message to display in our view
    $scope.message = 'news pages.';
}]);

}).call(this);