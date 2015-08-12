// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp')
.controller('teamsController', ['$scope','$sce','teamsService',function($scope,$sce,teamsService) {

var model=$scope.model={
		teamimageurl:null,
		showteaminfo:true,
		showactivety:false
	};

 $scope.refresh = function () {
	
	teamsService.getteam(function(data){
			debugger
			model.teamimageurl=data[0].imageurl;	
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


}]).filter('htmlize', ['$sce', function($sce){
			return function(val) {
				return $sce.trustAsHtml(val);
			};
	}]);
}).call(this);




 
