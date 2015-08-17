(function () {
'use strict';

angular.module('scotchApp').controller('newsinfoController', ['$scope','$route','$timeout','$element','$http','ngDialog','newsService',function($scope,$route,$timeout,$element,$http,ngDialog,newsService) {
/*=================================begin Controller============================================*/
$scope.options = {url: url+"upload"};

 var model = $scope.model = {
     Options:"create",
     newstitle:null,
     newscontent:null,
     newsdate:null,
     primaryurl:null,
     uploadimglist:[]
    
   };

 if($scope.$parent.editnewsdata!=null)
 {
     model.Options="edit";
     model.newstitle=$scope.$parent.editnewsdata[0].newstitle;
     model.newscontent=$scope.$parent.editnewsdata[0].newscontent;
     model.newsdate=$scope.$parent.editnewsdata[0].newsdate;
     model.primaryurl=$scope.$parent.editnewsdata[0].primaryurl;
     model.uploadimglist=$scope.$parent.editnewsdata[0].uploadimglist;
 }


//监听文件上传完成事件，把上传成功后的文件添加到model中
 $scope.$on('fileuploaddone', function(event, file){
    
    angular.forEach(file.result.files, function (item, index) {

        if(model.primaryurl==null)
        {
            model.primaryurl=item.url;
        }
        var itemmodel ={
            Name:item.name,
            Url:item.url
        }; 
        model.uploadimglist.push(itemmodel);
       
    });
 });


$scope.reset=function(){
    model.newscontent=null;
  model=null;
};

$scope.submitdata=function(model){
 var datamodel = {
     newstitle:model.newstitle,
     newscontent:model.newscontent,
     newsdate:model.newsdate,
     primaryurl:model.primaryurl,
     uploadimglist:model.uploadimglist,
  
 }
 var myDate = new Date();
datamodel.newsdate = myDate.toLocaleString();
datamodel.newsid = model.newsid==null?parseInt(Math.random()*100000+1):model.newsid;

if(model.Options=="edit" && $scope.$parent.editnewsdata !=null)
{
  $scope.$parent.editnewsdata.Options="edit";
  newsService.deleteNews($scope.$parent.editnewsdata[0]._id,function(){});
}
newsService.saveNews(datamodel,function(data){

  if(data.status='200')
  { 
    alertify.success(data.message);
    ngDialog.close($('.ngdialog').attr("id"));
  }
  else
  {
    alertify.error(data.message);
  }                     
   $route.reload();
});
};



/*=================================end Controller============================================*/
}]) .controller('FileDestroyController', [
            '$scope', '$http',
            function ($scope, $http) {
                var file = $scope.file,
                    state;
                if (file.url) {

                    file.$state = function () {
                        return state;
                    };
                    file.$destroy = function () {
                        state = 'pending';
                        
                        return $http({
                            url: file.deleteUrl,
                            method: file.deleteType
                        }).then(
                            function () {
                                state = 'resolved';
                                $scope.clear(file);
                            },
                            function () {
                                state = 'rejected';
                            }
                        );
                    };
                } else if (!file.$cancel && !file._index) {

                  debugger;

                    file.$cancel = function () {
                        $scope.clear(file);
                    };
                }

            }]);

}).call(this);