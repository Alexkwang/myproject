
// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('newslistController', ['$scope','$route','$element','$compile','ngDialog','newsService','DTOptionsBuilder','DTColumnBuilder',function($scope,$route,$element,$compile,ngDialog,newsService,DTOptionsBuilder,DTColumnBuilder) {
/*----------------------------------------------------------------*/
var model = $scope.model = {
  datas:[]
};


 /*=================================bengin Auto load============================================*/
   $scope.refresh = function () {

    $scope.editnewsdata=null;

         $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function(){
                    model.datas = newsService.getallNews();
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
        DTColumnBuilder.newColumn("newstitle").withTitle('新闻标题'),
        DTColumnBuilder.newColumn('newsdate').withTitle('新闻时间'),
        DTColumnBuilder.newColumn(null).withTitle('操作').notSortable()
            .renderWith(function(data, type, full, meta) {
                return '<a class="green" style="cursor:pointer" ng-click="editNews('+data.newsid+')"><i class="ace-icon fa fa-pencil bigger-130"></i></a>'+
                        '<a class="red" style="margin-left:10px;cursor:pointer"  ng-click="deleteNews('+data.newsid+')"><i class="ace-icon fa fa-trash-o bigger-130"></i></a>' ;
            })
    ];


//  /*=================================end auto load============================================*/ 


// /*================================actions Edit & delete=========================================*/

$scope.deleteNews=function(newsid){

  ngDialog.openConfirm({ 
      template: '/pages/backend/news/confirm.html'
    }).then(function(value){
       newsService.deleteNews(newsid,function(datarerult){
            if(datarerult.status='200')
            {
                alertify.success(datarerult.message);
                $route.reload();
            }
       });
    },function(reason){});
};


 

$scope.editNews=function(newsid){
    newsService.getNewsByID(newsid,function(resultdata){
          if(resultdata!=null)
          {
              $scope.editnewsdata=resultdata.data;

                ngDialog.open({
                        template: '/pages/backend/news/newsinfo.html',
                        className: 'ngdialog-theme-plain',
                        closeByDocument :false, //关闭背景区域关闭事件
                        scope:$scope
                         });
          }
    });
};
/*=================================actions Edit & delete========================================*/

$scope.clickToOpen = function () {
     $scope.editnewsdata=null;
     ngDialog.open({
      template: '/pages/backend/news/newsinfo.html',
      className: 'ngdialog-theme-plain',
      closeByDocument :false, //关闭背景区域关闭事件
      scope:$scope
       });
};


/*----------------------------------------------------------------*/
}]);
}).call(this);   