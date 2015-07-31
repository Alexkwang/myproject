// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('homeController', ['$scope','ngDialog','homeService',function($scope,ngDialog,homeService) {
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

  var model = $scope.model= {
      program1:null,
      program2:null,
      program3:null,
      program4:null,
      program5:null,
      program6:null,
      program7:null,
      program8:null,
      program9:null,
      program10:null,
      program11:null,
      program12:null
  };
 
 $scope.refresh = function () {
    homeService.getMainprogram(function(data){
      
      $.each(data,function(index,item){
          if(item.MainIndex==1)
          {
            model.program1 = item;
          }
          if(item.MainIndex==2)
          {
            model.program2 = item;
          }
           if(item.MainIndex==3)
          {
            model.program3 = item;
          }
           if(item.MainIndex==4)
          {
            model.program4 = item;
          }
           if(item.MainIndex==5)
          {
            model.program5 = item;
          }
           if(item.MainIndex==6)
          {
            model.program6 = item;
          } 
          if(item.MainIndex==7)
          {
            model.program7 = item;
          } 
          if(item.MainIndex==8)
          {
            model.program8 = item;
          } 
          if(item.MainIndex==9)
          {
            model.program9 = item;
          } 
          if(item.MainIndex==10)
          {
            model.program10 = item;
          }
           if(item.MainIndex==11)
          {
            model.program11 = item;
          } 
          if(item.MainIndex==12)
          {
            model.program12 = item;
          }
      });
    });

 };

 $scope.refresh();
 $scope.$on("refresh", $scope.refresh);

 
 $('#myModal').on('show.bs.modal', function (e) {
   
  var esseyId = e.relatedTarget.id;
  switch(esseyId)
  {
    case ("program1"):
       $.each(model.program1.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });
    break;
  }
 //debugger;
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