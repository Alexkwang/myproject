// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('homeController', ['$scope','$sce','ngDialog','homeService',function($scope,$sce,ngDialog,homeService) {
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
  var popmodel = $scope.popmodel={
    program:null
  };

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

  slides.length=0;
  switch(esseyId)
  {
    case ("program1"):

       popmodel.program = model.program1;
      // popmodel.program.DesignDes=null;
       popmodel.program.DesignDes=model.program1.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program1.DesignDes);
       $.each(model.program1.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program2"):
      popmodel.program = model.program2;
      //popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program2.DesignDes;
      //popmodel.program.DesignDes= $sce.trustAsHtml(model.program2.DesignDes);
       $.each(model.program2.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program3"):
      popmodel.program = model.program3;
      //popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program3.DesignDes;
      // popmodel.program.DesignDes= $sce.trustAsHtml(model.program3.DesignDes);
       $.each(model.program3.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program4"):
      popmodel.program = model.program4;
      //popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program4.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program4.DesignDes);
       $.each(model.program4.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program5"):
      popmodel.program = model.program5;
     // popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program5.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program5.DesignDes);
       $.each(model.program5.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program6"):
      popmodel.program = model.program6;
      //popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program6.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program6.DesignDes);
       $.each(model.program6.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program7"):
      popmodel.program = model.program7;
      //popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program7.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program7.DesignDes);
       $.each(model.program7.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program8"):
      popmodel.program = model.program8;
     // popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program8.DesignDes;
      //popmodel.program.DesignDes= $sce.trustAsHtml(model.program8.DesignDes);
       $.each(model.program8.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program9"):
        popmodel.program = model.program9;
       // popmodel.program.DesignDes=null;
        popmodel.program.DesignDes=model.program9.DesignDes;
        //popmodel.program.DesignDes= $sce.trustAsHtml(model.program9.DesignDes);
       $.each(model.program9.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program10"):
      popmodel.program = model.program10;
     // popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program10.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program10.DesignDes);
       $.each(model.program10.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;

    case ("program11"):
      popmodel.program = model.program11;
     // popmodel.program.DesignDes=null;
      popmodel.program.DesignDes=model.program11.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program11.DesignDes);
       $.each(model.program11.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });

    break;
    case ("program12"):
      popmodel.program = model.program12;
      // popmodel.program.DesignDes=null;
       popmodel.program.DesignDes=model.program12.DesignDes;
       //popmodel.program.DesignDes= $sce.trustAsHtml(model.program12.DesignDes);
       $.each(model.program12.UploadImgList,function(index,item){
         slides.push({image:item.Url});
       });
    break;
  }

 });
    /*==========end your business===================================*/
}]).filter('htmlize', ['$sce', function($sce){
      return function(val) {
        return $sce.trustAsHtml(val);
      };
  }]);
}).call(this);