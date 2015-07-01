// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('indexController', ['$scope',function($scope) {
    // create a message to display in our view
  $scope.message = 'index pages.';

  var templateView = $scope.templateView = {
                    ShowPage: ""
                };

  var templateUrls = $scope.templateUrls = {
                    mainPage: "pages/backend/index/template.tpl1.html",
                    subPage: ""
                };


    $scope.refresh = function () {
        			templateView.ShowPage = "template1";
                };
 			
 			 $scope.refresh();
   $scope.$on("refresh", $scope.refresh);



}]);
}).call(this);
