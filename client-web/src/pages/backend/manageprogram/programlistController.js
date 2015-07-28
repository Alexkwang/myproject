
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
        DTColumnBuilder.newColumn('IsShowMainPage').withTitle('主页显示'),
        DTColumnBuilder.newColumn('MainIndex').withTitle('主页显示顺序'),
        DTColumnBuilder.newColumn('DesignTime').withTitle('设计时间'),
         // DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
         //    .renderWith(function(data, type, full, meta) {
         //        return '<button class="btn btn-warning" ng-click="editInfo(' + data.userId + ')">' +
         //            '   <i class="fa fa-edit"></i>' +
         //            '基本信息</button> ' +
         //            '<button class="btn btn-danger" ng-click="editAccount(' + data.userId + ')">' +
         //            ' <i class="fa fa-trash-o"></i>' +
         //            '账户信息</button> ' +
         //             '<button class="btn" ng-click="delete(' + data.userId + ','+data.userName+')">' +
         //            '删除</button> ' ;
         //    })
    ];
    //配合后端
    function planify(data) {
        for (var i = 0; i < data.columns.length; i++) {
            var column = data.columns[i];
            column.searchRegex = column.search.regex;
            column.searchValue = column.search.value;
            delete(column.search);
        }
    };



}]);
}).call(this);