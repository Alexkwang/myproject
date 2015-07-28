
// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('programlistController', ['$scope','$element','ngDialog','programService','DTOptionsBuilder','DTColumnBuilder',function($scope,$element,ngDialog,programService,DTOptionsBuilder,DTColumnBuilder) {
   
var model = $scope.model = {datas:[]};

$scope.AutoLoad=function(){
  $scope.editprogramdata=null;
		// programService.getallProgram(function(datarerult){
  //  			model.datas= datarerult.data;
  //  	});
};


/*=================================bengin Auto load============================================*/
   $scope.refresh = function () {
    $scope.editprogramdata=null;
		// programService.getallProgram(function(datarerult){
  //  			model.datas= datarerult.data;
  //  	});
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
debugger
console.log(program);

$scope.editprogramdata =program;

   ngDialog.open({
          template: '/pages/backend/manageprogram/program.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false, //关闭背景区域关闭事件
          scope:$scope
           });
};


 $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function(){
            var data = programService.getallProgram();
              return data;
 }) 
 .withPaginationType('full_numbers')
 .withOption('responsive', true);

    $scope.dtColumns = [
        DTColumnBuilder.newColumn("ProjectName").withTitle('项目名称'),
        DTColumnBuilder.newColumn('ProjectClassification').withTitle('项目类型'),
        DTColumnBuilder.newColumn('ProjectType').withTitle('项目分类'),
        DTColumnBuilder.newColumn('IsShowMainPage').withTitle('主页显示')
        .renderWith(function(data, type, full, meta){
          return data?'是':'否'
        }),
        DTColumnBuilder.newColumn('MainIndex').withTitle('主页显示顺序'),
        DTColumnBuilder.newColumn('DesignTime').withTitle('设计时间'),
        DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
            .renderWith(function(data, type, full, meta) {
          
                return '<button type="button" class="green" style="" ng-click="editProgram('+111+')"><i class="ace-icon fa fa-pencil bigger-130"></i>修改</button>'+
                        '<a class="red" style="margin-left:5px;"  ng-click="deleteProgram('+data+')"><i class="ace-icon fa fa-trash-o bigger-130"></i></a>' ;
            })
    ];

}]);
}).call(this);