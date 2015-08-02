
// create the controller and inject Angular's $scope
(function () {
'use strict';

angular.module('scotchApp').controller('programController', ['$scope','$route','$timeout','$element','$http','ngDialog','programService',function($scope,$route,$timeout,$element,$http,ngDialog,programService) {
   


 /*=================================begin setPrimaryImage============================================*/
 $scope.setPrimaryImage = function (curimg) {
        var trContainer = $element.find("#tr_imagelist");
        //去掉已设置的Primary样式
        if (!!model.PrimaryImageNo &&
            model.PrimaryImageNo > 0) {
            var oldTdPrimary = trContainer.find("td[number=" + model.PrimaryImageNo + "]");
            if (oldTdPrimary.length > 0) {
                oldTdPrimary.find("div[name='imgdiv']").attr("class", "item_image_review_normal");
                oldTdPrimary.find("a[name='primarylink']").css({ "display": "" });
            }
        }
        //设置当前图片为Primary 
        jQuery.each(model.UploadImgList, function (index, node) {
            if (!!model.PrimaryImageNo &&
                node.Numbers == model.PrimaryImageNo)//去掉上一次设置的Primary
                node.IsPrimary = false;
            if (node.Numbers == curimg.Numbers)//设置当前为Primary
                node.IsPrimary = true;
        });
        if (!!model.PrimaryImageObj)
            model.PrimaryImageObj.attr("src", curimg.Url);
        model.PrimaryImageNo = curimg.Numbers;
        model.PrimaryUrl=curimg.Url;
        var newTdPrimary = trContainer.find("td[number=" + curimg.Numbers + "]");
        if (newTdPrimary.length > 0) {
            newTdPrimary.find("div[name='imgdiv']").attr("class", "item_image_review_primary");
            newTdPrimary.find("a[name='primarylink']").css({ "display": "none" });
        }
    };
 /*=================================end setPrimaryImage============================================*/ 

/*=================================end viewImage============================================*/ 
    $scope.viewImage = function (curimg) {
        var viewhtml = "<img style=\"max-height:480px; max-width:640px;\" src=\"" + curimg.Url + "\" onerror=\"javascript:this.src='./images/system/noimage.gif'\"/>";
        
         ngDialog.open({
          template: viewhtml,
          className: 'ngdialog-theme-plain',
          plain: true,
       
           });
    };
/*=================================end viewImage============================================*/ 

 /*=================================begin insertImgObj============================================*/
    $scope.insertImgObj = function (imgData) {
        model.DragStart = null;
        var trContainer = $element.find("#tr_imagelist"),
           imgObj = $("<img class=\"img-thumbnail\" style=\"width: 130px;height: 105px;margin: 5px;\" src=\"" + imgData.ThumbnailUrl + "\" onerror=\"javascript:this.src='./images/system/noimage.gif'\"/>"),
           imgObjDiv = $("<div name=\"imgdiv\" class=\"" + (imgData.IsPrimary ? "item_image_review_primary" : "item_image_review_normal") + "\">").append(imgObj),
           hidePrimary = imgData.IsPrimary ? true : false,
           link_primary = $("<a href=\"javascript:void(0);\" name=\"primarylink\" style=\"" + (hidePrimary ? "display:none;" : "") + "margin-right: 5px;\">")
                            .html("置为主图")
                            .bind('click', { curImg: imgData }, function (e) {//set Primary
                                $scope.setPrimaryImage(e.data.curImg);
                            }),
           
           link_delete = $("<a href=\"javascript:void(0);\" name=\"deletelink\" style=\"margin-right: 5px;\">")
                           .html("删除")
                           .bind('click', { curImg: imgData }, function (e) {//delete
                            
                               $scope.deleteImage(e.data.curImg);
                           }),
           link_view = $("<a href=\"javascript:void(0);\" name=\"viewlink\">")
                        .html("查看")
                        .bind('click', { curImg: imgData }, function (e) {//view
                            $scope.viewImage(e.data.curImg);
                        }),
           linkDiv = $("<div style=\"margin-top: 10px;text-decoration: underline;font-size: 10px;vertical-align: middle;\">").append(link_primary).append(link_delete).append(link_view),
           dragStyle =  "cursor: pointer;",
           imgItemObj = $("<div style=\"margin: 10px; " + dragStyle + "\">")
                          .bind('dragstart', function (e) {
                              model.DragStart = $(e.target).parents("td:first");
                          })
                          .append(imgObjDiv).append(linkDiv),
            tdTemp = $("<td number=\"" + imgData.Numbers + "\">")
                           .bind('dragover', function (e) {
                               if (window.navigator.userAgent.indexOf("Firefox") != -1) {
                                   e.preventDefault();
                               } else {
                                   window.event.preventDefault();
                               }
                           })
                           .bind('drop', { curImg: imgData }, function (e) {
                               if (window.navigator.userAgent.indexOf("Firefox") != -1) {
                                   e.preventDefault();
                               } else {
                                   window.event.preventDefault();
                               }
                               var curimg = e.data.curImg;
                                   var startDiv = model.DragStart.html(),            //被拖拽的元素
                                       endTd = $(e.target).parents("td:first"),  //目标元素容器
                                       endDiv = endTd.html(),                        //目标元素
                                       startNo = parseInt(model.DragStart.attr("number")),
                                       endNo = parseInt(endTd.attr("number"));
                                   if (startNo != endNo) {
                                       var indexStart = -1,
                                           indexEnd = -1;
                                       jQuery.each(model.UploadImgList, function (i1, n1) {
                                           if (n1.Numbers == startNo)
                                               indexStart = i1;
                                           if (n1.Numbers == endNo)
                                               indexEnd = i1;
                                       });

                                       if (indexStart >= 0 && indexEnd >= 0) {
                                           //切换显示 
                                           var tempStartObj = angular.copy(model.UploadImgList[indexStart]),
                                               tempEndObj = angular.copy(model.UploadImgList[indexEnd]);
                                           endTd.find("img").attr("src", tempStartObj.Url);
                                           model.DragStart.find("img").attr("src", tempEndObj.Url);
                                           if (tempStartObj.IsPrimary) {
                                               model.DragStart.find("div[name='imgdiv']").attr("class", "item_image_review_normal");
                                               model.DragStart.find("a[name='primarylink']").show();
                                               endTd.find("div[name='imgdiv']").attr("class", "item_image_review_primary");
                                               endTd.find("a[name='primarylink']").hide();
                                               model.PrimaryImageNo = model.UploadImgList[indexEnd].Numbers;
                                           }
                                           if (tempEndObj.IsPrimary) {
                                               model.DragStart.find("div[name='imgdiv']").attr("class", "item_image_review_primary");
                                               model.DragStart.find("a[name='primarylink']").hide();
                                               endTd.find("div[name='imgdiv']").attr("class", "item_image_review_normal");
                                               endTd.find("a[name='primarylink']").show();
                                               model.PrimaryImageNo = model.UploadImgList[indexStart].Numbers;
                                           }
                                           //切换数据
                                          
                                           model.UploadImgList[indexStart].IsPrimary = tempEndObj.IsPrimary;
                                           model.UploadImgList[indexStart].Name = tempEndObj.Name;
                                           model.UploadImgList[indexStart].Url = tempEndObj.Url;

                                         
                                           model.UploadImgList[indexEnd].IsPrimary = tempStartObj.IsPrimary;
                                           model.UploadImgList[indexEnd].Name = tempStartObj.Name;
                                           model.UploadImgList[indexEnd].Url = tempStartObj.Url;
                                       }
                                       //重新绑定draggable元素的dragstart事件(重新绘制元素后，bind的方法丢失，需要重新bind)
                                       angular.forEach(trContainer.find("td"), function (tdOjb, index) {
                                           var dragDiv = $(tdOjb.children);
                                           if (dragDiv.length > 0) {
                                               dragDiv.unbind();
                                               dragDiv.bind('dragstart', function (e) {
                                                   model.DragStart = $(e.target).parents("td:first");
                                               });
                                           };
                                       });
                                   }
                               
                           })
                           .append(imgItemObj);
        trContainer.append(tdTemp);
    };
/*=================================end insertImgObj============================================*/

   var model = $scope.model = {
      Options:"create",
     IsShowMainPage:false,
     MainIndex:null,
     ProjectClassification:"规划项目",
     ProjectName:null,
     ProjectType:"商业综合",
     ProjectEntrust:null,
     ProjectPosition:null,
     AreaCovered:null,
     BuildingArea:null,
     VolumeRatio:null,
     DesignTime:null,
     DesignDes:null,
   	 PrimaryImageNo:null,
   	 UploadImgList:[],

   	 DragStart: null             //切换图片位置时，要切换的图片对象
   };
    $scope.options = {url: url+"upload"};

   if($scope.$parent.editprogramdata!=null)
   {
      model.Options="edit";
      
      model.IsShowMainPage=$scope.$parent.editprogramdata[0].IsShowMainPage;
      model.MainIndex=$scope.$parent.editprogramdata[0].MainIndex;
      model.ProjectClassification=$scope.$parent.editprogramdata[0].ProjectClassification;
      model.ProjectName=$scope.$parent.editprogramdata[0].ProjectName;
      model.ProjectType=$scope.$parent.editprogramdata[0].ProjectType;
      model.ProjectEntrust=$scope.$parent.editprogramdata[0].ProjectEntrust;
      model.ProjectPosition=$scope.$parent.editprogramdata[0].ProjectPosition;
      model.AreaCovered=$scope.$parent.editprogramdata[0].AreaCovered;
      model.BuildingArea=$scope.$parent.editprogramdata[0].BuildingArea;
      model.VolumeRatio=$scope.$parent.editprogramdata[0].VolumeRatio;
      model.DesignTime=$scope.$parent.editprogramdata[0].DesignTime;
      model.DesignDes=$scope.$parent.editprogramdata[0].DesignDes;
      model.PrimaryImageNo=$scope.$parent.editprogramdata[0].PrimaryImageNo;
      model.UploadImgList=$scope.$parent.editprogramdata[0].UploadImgList;
      model.ProjectID=$scope.$parent.editprogramdata[0].ProjectID;
      model.PrimaryUrl=$scope.$parent.editprogramdata[0].PrimaryUrl;
 
      

      angular.forEach(model.UploadImgList, function (item, index) {
            $scope.insertImgObj(item);
         });


   }


//监听文件上传完成事件，把上传成功后的文件添加到model中
 $scope.$on('fileuploaddone', function(event, file){
 	
	angular.forEach(file.result.files, function (item, index) {

		var itemmodel ={
			Numbers:model.UploadImgList.length+1,
			Name:item.name,
			Url:item.url,
			ThumbnailUrl:item.thumbnailUrl,
			IsPrimary:false
		}; 
		model.UploadImgList.push(itemmodel);
		$scope.insertImgObj(itemmodel);
	});
 });


/*=================================end submitdata============================================*/ 
$scope.reset=function(){
  model=null;
};
$scope.submitdata=function(model){

 var datamodel = {
     IsShowMainPage:model.IsShowMainPage,
     MainIndex:model.MainIndex,
     ProjectClassification:model.ProjectClassification,
     ProjectName:model.ProjectName,
     ProjectType:model.ProjectType,
     ProjectEntrust:model.ProjectEntrust,
     ProjectPosition:model.ProjectPosition,
     AreaCovered:model.AreaCovered,
     BuildingArea:model.BuildingArea,
     VolumeRatio:model.VolumeRatio,
     DesignTime:model.DesignTime,
     DesignDes:model.DesignDes,
     PrimaryImageNo:model.PrimaryImageNo,
     UploadImgList:model.UploadImgList,
      PrimaryUrl:model.PrimaryUrl
 }

datamodel.ProjectID = model.ProjectID==null?parseInt(Math.random()*100000+1):model.ProjectID;

 if(datamodel.UploadImgList==null &&datamodel.UploadImgList.length <=0)
  {
    alertify.error("请至少上传一张图片！");
    return;
  }


 if(datamodel.PrimaryImageNo==null &&datamodel.PrimaryImageNo <=0)
      {
        alertify.error("请设置一张图片作为主图！");
        return;
      }

if(model.Options=="edit" && $scope.$parent.editprogramdata !=null)
{
  $scope.$parent.editprogramdata.Options="edit";
  programService.deleteProgram($scope.$parent.editprogramdata,function(){});
}
programService.saveProgram(datamodel,function(data){

  if(data.status='200')
  { 
    alertify.success(data.message);
    ngDialog.close($('.ngdialog').attr("id"));

   $timeout(function(){
    $scope.$parent.AutoLoad;
   $scope.$parent.refresh;
 },2000)

   
  }
  else
  {
    alertify.error(data.message);
  }                     
  
});
};

/*=================================end submitdata============================================*/

$scope.deleteImage=function(curimg){

$http.delete(url+"upload/"+curimg.Name).success(function(data){

if(data.status='200')
{
  var deletimg="./images/product/thumbnail/"+curimg.Name;

  $("img[src='"+deletimg+"']").parent().parent().parent().remove();


     var trContainer = $element.find("#tr_imagelist"),
            index = -1;
        angular.forEach(model.UploadImgList, function (item, i) {
            if (item.Numbers == curimg.Numbers) {
                index = i;
                return false;
            }
        });
        if (index > -1) {
            if (curimg.IsPrimary) {
                if (!!$scope.$parent.model.PrimaryImageObj)
                    $scope.$parent.model.PrimaryImageObj.attr("src", "/images/product/defautlNoImage.png");
                $scope.$parent.model.PrimaryImageNo = null;
            }

           var sellerOwnerIndex = -1;
            angular.forEach(model.SellerOwnerUploadedImgList, function (item, i) {
                if (item.Name == model.UploadImgList[index].Name) {
                    sellerOwnerIndex = i;
                    return false;
                }
            });
            if (sellerOwnerIndex > -1) {
                model.SellerOwnerUploadedImgList.splice(sellerOwnerIndex, 1);
            }

            model.UploadImgList.splice(index, 1);
            var deleteTd = trContainer.find("td[number=" + curimg.Numbers + "]");
            deleteTd.remove();
            //重新设置Number
            angular.forEach(model.UploadImgList, function (item, i) {
                item.Numbers = i + 1;
                if (item.IsPrimary) {
                    $scope.$parent.model.PrimaryImageNo = i + 1;
                }
            });
            angular.forEach(trContainer.find("td"), function (tdNode, i) {
                $(tdNode).attr("number", i + 1);
            });
        }

 alertify.success('图片删除成功！');
}
else
{
  alertify.error('图片删除失败！');
}

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