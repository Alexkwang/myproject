(function () {
'use strict';
angular.module('scotchApp').controller('menuController', ['$scope',function($scope) {



$scope.goToNewsList=function(){
	$scope.templateUrls.backendmainPage="/pages/backend/login/login.html";	
};


$scope.goToProgramList=function(){
	$scope.templateUrls.backendmainPage="/pages/backend/manageprogram/programlist.html";
};

}]);
}).call(this);