
// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('programlistController', ['$scope','$element','ngDialog',function($scope,$element,ngDialog) {
   
    $scope.clickToOpen = function () {
         
         ngDialog.open({
          template: '/pages/backend/manageprogram/program.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false //关闭背景区域关闭事件
           });
    };


    $scope.andcontext =function(){

 		var trContainer = $element.find("#tr_imagelist");

 		trContainer.append('<td number=\"" + 1 + "\">test by alex</td>');

    };

}]);
}).call(this);