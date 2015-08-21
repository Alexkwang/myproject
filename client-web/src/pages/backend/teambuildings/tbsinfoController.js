(function () {
'use strict';

angular.module('scotchApp').controller('tbsinfoController', ['$scope','$route','$timeout','$element','$http','ngDialog','tbsService',function($scope,$route,$timeout,$element,$http,ngDialog,tbsService) {
/*=================================begin Controller============================================*/
$scope.options = {url: url+"upload"};

 var model = $scope.model = {
     Options:"create",
     tbstitle:null,
     tbscontent:null,
     tbsdate:null,
     primaryurl:null,
     uploadimglist:[]
    
   };

 if($scope.$parent.edittbsdata!=null)
 {
     model.Options="edit";
     model.tbstitle=$scope.$parent.edittbsdata[0].tbstitle;
     model.tbscontent=$scope.$parent.edittbsdata[0].tbscontent;
     model.tbsdate=$scope.$parent.edittbsdata[0].tbsdate;
     model.primaryurl=$scope.$parent.edittbsdata[0].primaryurl;
     model.uploadimglist=$scope.$parent.edittbsdata[0].uploadimglist;
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
    model.tbscontent=null;
  model=null;
};

$scope.submitdata=function(model){
 var datamodel = {
     tbstitle:model.tbstitle,
     tbscontent:model.tbscontent,
     tbsdate:model.tbsdate,
     primaryurl:model.primaryurl,
     uploadimglist:model.uploadimglist,
  
 }
 var myDate = new Date();
datamodel.tbsdate = myDate.toLocaleString();
datamodel.tbsid = model.tbsid==null?parseInt(Math.random()*100000+1):model.tbsid;

if(model.Options=="edit" && $scope.$parent.edittbsdata !=null)
{
  $scope.$parent.edittbsdata.Options="edit";
  tbsService.deleteTBs($scope.$parent.edittbsdata[0].tbsid,function(){
    tbsService.saveTBs(datamodel,function(data){

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

  });
}
else
{
    tbsService.saveTBs(datamodel,function(data){

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
}

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
                    file.$cancel = function () {
                        $scope.clear(file);
                    };
                }

            }]);

}).call(this);