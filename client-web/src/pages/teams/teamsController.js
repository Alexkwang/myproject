// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp')
.controller('teamsController', ['$scope','$sce','$timeout','teamsService',function($scope,$sce,$timeout,teamsService) {

var model=$scope.model={
		teamimageurl:null,
		showteaminfo:true,
		showactivety:false,
		tbs:null
	};

var	poptbsmodel = $scope.poptbsmodel={

	tbstitle:null,
	tbscontent:null,
	tbsdate:null

	}

 $scope.refresh = function () {
	
	teamsService.getteam(function(data){
			model.teamimageurl=data[0].imageurl;	
		});

	teamsService.gettbs(function(data){
		model.tbs=data;
	});

 };
  
 
   $scope.refresh();
   $scope.$on("refresh", $scope.refresh);


$scope.menu_clike= function(MenuID,menuName){
   		$(".page_1_class").css({"color": "rgb(132, 132, 132)"});
   		$("#"+MenuID).css({"color": " rgb(76, 76, 76)"});

   		if(menuName == 'teaminfo')
   		{
			model.showteaminfo=true;
			model.showactivety=false;

   		}
   		if(menuName=='activety')
   		{	
   			model.showteaminfo=false;
			model.showactivety=true;
		}
   };



$('#tbsModal').on('show.bs.modal', function (e) {

  var esseyId = e.relatedTarget.id;

	$.each(model.tbs,function(index,item){

			if(item.tbsid==esseyId)
			{
				poptbsmodel.tbstitle = item.tbstitle;
				poptbsmodel.tbscontent=item.tbscontent;
				poptbsmodel.tbsdate=item.tbsdate;
				 // $.each(item.uploadimglist,function(index,image){
			  //        slides.push({image:image.Url});
			  //      });

			}
	});

	 $timeout(function(){}, 1000);
 });



}]).filter('htmlize', ['$sce', function($sce){
			return function(val) {
				return $sce.trustAsHtml(val);
			};
	}]);
}).call(this);




 
