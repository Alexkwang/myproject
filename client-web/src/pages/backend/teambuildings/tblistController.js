
// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('tblistController', ['$scope','$route','$element','$compile','ngDialog','tbsService','DTOptionsBuilder','DTColumnBuilder',function($scope,$route,$element,$compile,ngDialog,tbsService,DTOptionsBuilder,DTColumnBuilder) {
/*----------------------------------------------------------------*/
var model = $scope.model = {
  datas:[]
};


 /*=================================bengin Auto load============================================*/
   $scope.refresh = function () {

    $scope.edittbsdata=null;

         $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function(){
                    model.datas = tbsService.getallTBs();
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


 $scope.dtColumns = [
        DTColumnBuilder.newColumn("tbstitle").withTitle('活动标题'),
        DTColumnBuilder.newColumn('tbsdate').withTitle('活动时间'),
        DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
            .renderWith(function(data, type, full, meta) {
                return '<a class="green" style="cursor:pointer" ng-click="editTBs('+data.tbsid+')"><i class="ace-icon fa fa-pencil bigger-130"></i></a>'+
                        '<a class="red" style="margin-left:10px;cursor:pointer"  ng-click="deleteTBs('+data.tbsid+')"><i class="ace-icon fa fa-trash-o bigger-130"></i></a>' ;
            })
    ];


//  /*=================================end auto load============================================*/ 


// /*================================actions Edit & delete=========================================*/

$scope.deleteTBs=function(tbsid){

  ngDialog.openConfirm({ 
      template: '/pages/backend/teambuildings/confirm.html'
    }).then(function(value){
       tbsService.deleteTBsByID(tbsid,function(datarerult){
            if(datarerult.status='200')
            {
                alertify.success(datarerult.message);
                $route.reload();
            }
       });
    },function(reason){});
};


 

$scope.editTBs=function(tbsid){
    tbsService.getTBsByID(tbsid,function(resultdata){
          if(resultdata!=null)
          {
              $scope.edittbsdata=resultdata.data;

                ngDialog.open({
                        template: '/pages/backend/teambuildings/tbsinfo.html',
                        className: 'ngdialog-theme-plain',
                        closeByDocument :false, //关闭背景区域关闭事件
                        scope:$scope
                         });
          }
    });
};
/*=================================actions Edit & delete========================================*/

$scope.clickToOpen = function () {
     $scope.edittbsdata=null;
     ngDialog.open({
      template: '/pages/backend/teambuildings/tbsinfo.html',
      className: 'ngdialog-theme-plain',
      closeByDocument :false, //关闭背景区域关闭事件
      scope:$scope
       });
};


/*----------------------------------------------------------------*/
}]);
}).call(this);   