(function () {
'use strict';
angular.module('scotchApp').controller('teamController', ['$scope','$route','$element','$compile','ngDialog','teamService','DTOptionsBuilder','DTColumnBuilder',function($scope,$route,$element,$compile,ngDialog,teamService,DTOptionsBuilder,DTColumnBuilder) {
/*=========================================================================================*/
    $scope.options = {url: url+"upload"};
    var model = $scope.model = {
    personid:null,
    name: null,
    jobtitle: null,
    record:null,
    imageurl:null
    };

    var models = $scope.models={
    	modellist:[]
    };

$scope.refresh = function () {

 models.modellist = teamService.getallperson();

 debugger
};

 $scope.refresh();
 $scope.$on("refresh", $scope.refresh);

    $scope.clickaddperson = function () {
         $scope.editprogramdata=null;
         ngDialog.open({
          template: '/pages/backend/teams/person.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false, //关闭背景区域关闭事件
          scope:$scope
           });
    };


   $scope.$on('fileuploaddone', function(event, file){
 	model.imageurl=file.result.files[0].url;
 });

$scope.submitdata=function(){
	debugger
	model.personid = model.personid==null?parseInt(Math.random()*100000+1):model.personid;
	teamService.saveperson(model,function(result){

		if(result.status='200')
			  { 
			    alertify.success(result.message);
			    ngDialog.close($('.ngdialog').attr("id"));
			  }
			  else
			  {
			    alertify.error(data.message);
			  } 

	});
};

$scope.reset=function(){

	debugger;

  model=null;
};

/*=========================================================================================*/
}]);
}).call(this);