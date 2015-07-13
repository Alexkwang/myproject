// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('homeController', ['$scope','ngDialog',function($scope,ngDialog) {
      var templateUrls = $scope.templateUrls = {
        headerPage: "/pages/header.html",
        footerPage: "/pages/footer.html",
        backendfooterPage:"/pages/backend/footer.html",
        backendmenuPage:"/pages/backend/menu.html",
        backendmainPage:"/pages/backend/manageprogram/programlist.html"
    };
    /*==========begin your business=================================*/

 $scope.clickToOpen1 = function () {
         
         ngDialog.open({ template: '/pages/backend/login/login.html' });
    };

    /*==========end your business===================================*/
}]);
}).call(this);