// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp')
.controller('teamsController', ['$scope','$sce','teamsService',function($scope,$sce,teamsService) {

var model=$scope.model={
		persons:null
	};

 $scope.refresh = function () {
	
	teamsService.getAllPerson(function(data){
			debugger
			model.persons=data;	
		});
 };
  
 
   $scope.refresh();
   $scope.$on("refresh", $scope.refresh);





}]).filter('htmlize', ['$sce', function($sce){
			return function(val) {
				return $sce.trustAsHtml(val);
			};
	}]);
}).call(this);




 
