// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('homeController', ['$scope',function($scope) {
      var templateUrls = $scope.templateUrls = {
        headerPage: "/pages/header.html",
        footerPage: "/pages/footer.html"
    };
    /*==========begin your business=================================*/

    /*==========end your business===================================*/
}]);
}).call(this);