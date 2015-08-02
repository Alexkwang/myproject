
// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('programlistController', ['$scope','$route','$element','$compile','ngDialog','programService','DTOptionsBuilder','DTColumnBuilder',function($scope,$route,$element,$compile,ngDialog,programService,DTOptionsBuilder,DTColumnBuilder) {
   
var model = $scope.model = {

  datas:[]};


/*=================================bengin Auto load============================================*/
   $scope.refresh = function () {

    $scope.editprogramdata=null;

         $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function(){
                    model.datas = programService.getallProgram();
                      return model.datas;
         }) 
         .withPaginationType('full_numbers')
         .withOption('responsive', true) 
         .withOption('createdRow', function(row, data, dataIndex) {
            $compile(angular.element(row).contents())($scope);
         });

   };

 $scope.refresh();
 $scope.$on("refresh", $scope.refresh);

 $scope.AutoLoad=function(){
  $route.reload();
 };


 /*=================================end auto load============================================*/  
    $scope.clickToOpen = function () {
         $scope.editprogramdata=null;
         ngDialog.open({
          template: '/pages/backend/manageprogram/program.html',
          className: 'ngdialog-theme-plain',
          closeByDocument :false, //关闭背景区域关闭事件
          scope:$scope
           });
    };

/*=================================end submitdata============================================*/

$scope.deleteProgram=function(ProjectID){

          ngDialog.openConfirm({
                              template: '/pages/backend/manageprogram/confirm.html',                  
                          }).then(function (value) {
                                programService.getProgramByID(ProjectID,function(resultdata){
                                   if(resultdata!=null){
                                              programService.deleteProgram(resultdata.data,function(datarerult){

                                              if(datarerult.status='200')
                                              {
                                                alertify.success(datarerult.message);

                                                 $scope.refresh();
                                              }
                                            });
                                        }
                                });

                          }, function (reason) {
                          });

};


 

$scope.editProgram=function(ProjectID){

programService.getProgramByID(ProjectID,function(resultdata){
    if(resultdata!=null)
    {
        $scope.editprogramdata=resultdata.data;

          ngDialog.open({
                  template: '/pages/backend/manageprogram/program.html',
                  className: 'ngdialog-theme-plain',
                  closeByDocument :false, //关闭背景区域关闭事件
                  scope:$scope
                   });

    }

});

};

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
                return '<a class="green" style="cursor:pointer" ng-click="editProgram('+data.ProjectID+')"><i class="ace-icon fa fa-pencil bigger-130"></i></a>'+
                        '<a class="red" style="margin-left:10px;cursor:pointer"  ng-click="deleteProgram('+data.ProjectID+')"><i class="ace-icon fa fa-trash-o bigger-130"></i></a>' ;
            })
    ];

}]);
}).call(this);