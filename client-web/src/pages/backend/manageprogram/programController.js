
// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('programController', ['$scope','ngDialog',function($scope,ngDialog) {
   
    $scope.clickToOpen = function () {
         
         ngDialog.open({
          template: '/pages/backend/manageprogram/program.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false //关闭背景区域关闭事件
           });
    };

}]);
}).call(this);