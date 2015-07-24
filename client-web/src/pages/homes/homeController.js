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
 
$scope.myInterval = 5000;
 var slides = $scope.slides =[];


 $scope.clickToOpen1 = function () {
         debugger
         ngDialog.open({
          template: '/pages/common/contents/content.html',
          className: 'ngdialog-theme-plain'
           });
    };



 $('#myModal').on('show.bs.modal', function (e) {
 
  var esseyId = e.relatedTarget.id;
 debugger;
    slides.push({image:'./images/product/1.jpg'});
    slides.push({image:'./images/product/2.jpg'});
    slides.push({image:'./images/product/3.jpg'});
    slides.push({image:'./images/product/4.jpg'});
    slides.push({image:'./images/product/5.jpg'});
    slides.push({image:'./images/product/6.jpg'});
    slides.push({image:'./images/product/7.jpg'});

 });
    /*==========end your business===================================*/
}]);
}).call(this);