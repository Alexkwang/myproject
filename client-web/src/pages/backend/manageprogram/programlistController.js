
// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('programlistController', ['$scope','$element','ngDialog','programService',function($scope,$element,ngDialog,programService) {
   
var model = $scope.model = {datas:[]};

$scope.AutoLoad=function(){
  $scope.editprogramdata=null;
		programService.getallProgram(function(datarerult){
   			model.datas= datarerult.data;
   	});
};


/*=================================bengin Auto load============================================*/
   $scope.refresh = function () {
    $scope.editprogramdata=null;
		programService.getallProgram(function(datarerult){
   			model.datas= datarerult.data;
   	});
   };

 $scope.refresh();
 $scope.$on("refresh", $scope.refresh);
 /*=================================end auto load============================================*/  
    $scope.clickToOpen = function () {
         
         ngDialog.open({
          template: '/pages/backend/manageprogram/program.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false, //关闭背景区域关闭事件
          scope:$scope
           });
    };

/*=================================end submitdata============================================*/



$scope.deleteProgram=function(program){

	programService.deleteProgram(program,function(datarerult){
   		
      if(datarerult.status='200')
		  {
		    alertify.success(datarerult.message);

         $scope.refresh();
		  }
   	});
};
 

$scope.editProgram=function(program){

$scope.editprogramdata =program;

   ngDialog.open({
          template: '/pages/backend/manageprogram/program.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false, //关闭背景区域关闭事件
          scope:$scope
           });
};



}]);
}).call(this);