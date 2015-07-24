
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


 $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('ajax', {
            url: url+'programs',
            data: function(data) {
                planify(data);
            }
        })
        .withDataProp('data')
        .withOption('serverSide', true)
         //*！重点 绑定derictive必须加上这段，不然，恩，就悲剧了*
        .withOption('createdRow', function(row, data, dataIndex) {           
             //Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        })
        .withPaginationType('full_numbers')
        .withDisplayLength(10)
//        .withLanguage({
//            sUrl: '/path/to/language'
//        });
    $scope.dtColumns = [
        DTColumnBuilder.newColumn("userId").withTitle('用户编号')
            .renderWith(function(data, type, full, meta) {
                return  '<a href="#user/'+data+'"> '+ data +'</a>';
            }),
        DTColumnBuilder.newColumn("userName").withTitle('用户名').notVisible(),
        DTColumnBuilder.newColumn(null).withTitle('用户名')
            .renderWith(function(data, type, full, meta) {
                return  '<a href="#user/'+data.userId+'"> '+ data.userName +'</a>';
            }),
        DTColumnBuilder.newColumn('realName').withTitle('真实姓名'),
        DTColumnBuilder.newColumn('mobile').withTitle('手机号'),
        DTColumnBuilder.newColumn('userPassword').withTitle('密码').notVisible(),
        DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
            .renderWith(function(data, type, full, meta) {
                return '<button class="btn btn-warning" ng-click="editInfo(' + data.userId + ')">' +
                    '   <i class="fa fa-edit"></i>' +
                    '基本信息</button> ' +
                    '<button class="btn btn-danger" ng-click="editAccount(' + data.userId + ')">' +
                    ' <i class="fa fa-trash-o"></i>' +
                    '账户信息</button> ' +
                     '<button class="btn" ng-click="delete(' + data.userId + ','+data.userName+')">' +
                    '删除</button> ' ;
            })
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