// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('indexController', ['$scope',function($scope) {
  $scope.goToNewsList=function(){
	$scope.templateUrls.backendmainPage="/pages/backend/login/login.html";
	$scope.homeName="员工管理";	
};

$scope.goToProgramList=function(){
	$scope.templateUrls.backendmainPage="/pages/backend/manageprogram/programlist.html";
	$scope.homeName="项目管理";

};

$scope.goToteamInfo=function(){
	$scope.templateUrls.backendmainPage="/pages/backend/teams/teaminfo.html";
	$scope.homeName="团队信息";

};

$scope.goTonewslist=function(){
	$scope.templateUrls.backendmainPage="/pages/backend/news/newslist.html";
	$scope.homeName="新闻管理";
};

$scope.goToteambuildings=function(){
	$scope.templateUrls.backendmainPage="/pages/backend/teambuildings/tblist.html";
	$scope.homeName="团队建设";
};

}]);
}).call(this);