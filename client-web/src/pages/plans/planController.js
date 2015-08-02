// create the controller and inject Angular's $scope
(function () {
	'use strict';
angular.module('scotchApp').controller('planController',['$scope','$sce','planService', function($scope,$sce,planService) {

	var model=$scope.model={
		programs:null
	};

  var slides = $scope.slides =[];
  var popmodel = $scope.popmodel={
    program:null
  };


	$scope.refresh = function () {

		planService.getprogram(function(data){

			model.programs=data;
			

		});
	}

 $scope.refresh();
 $scope.$on("refresh", $scope.refresh);
    /*==========begin your business=================================*/
   $scope.menu_clike= function(MenuID,menuName){

   		$(".page_1_class").css({"color": "rgb(132, 132, 132)"});
   		$("#"+MenuID).css({"color": " rgb(76, 76, 76)"});

		model.programs=null;
		if(menuName=='项目分类')
		{
			planService.getprogram(function(data){model.programs=data;});

		}
		else
		{
			planService.getprogramByProjectType(menuName,function(data){model.programs=data;});
		}
   		
   };
    

$('#planModal').on('show.bs.modal', function (e) {

  var esseyId = e.relatedTarget.id;

  slides.length=0;

	$.each(model.programs,function(index,item){

			if(item.ProjectID==esseyId)
			{
				  popmodel.program = item;
				  popmodel.program.DesignDes=item.DesignDes;
			       $.each(item.UploadImgList,function(index,image){
			         slides.push({image:image.Url});
			       });
			}


	});
  		



 });

    /*==========end your business===================================*/
}]).filter('htmlize', ['$sce', function($sce){
			return function(val) {
				return $sce.trustAsHtml(val);
			};
	}]);

}).call(this);