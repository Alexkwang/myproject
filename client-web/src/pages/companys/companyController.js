// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('companyController', ['$scope',function($scope) {
  
    /*==========begin your business=================================*/

   
    
 //  	var radarChartData = {
	// 	labels: ["收益率", "快乐度", "工作强度", "技术进步性", "事业成长性"],
	// 	datasets: [
	// 		{
	// 			label: "公司理念",
	// 			fillColor: "rgba(32,115,223,0.5)",
	// 			strokeColor: "rgba(220,220,220,1)",
	// 			pointColor: "rgba(220,220,220,1)",
	// 			pointStrokeColor: "#fff",
	// 			pointHighlightFill: "#fff",
	// 			pointHighlightStroke: "rgba(220,220,220,1)",
	// 			data: [75,89,67,81,76]
				
	// 		}
		
	// 	]
	// };


	// $scope.refresh = function () {
	// 	window.myRadar = new Chart($("#canvas")[0].getContext("2d")).Radar(radarChartData, {
	// 			responsive: true
	// 		});

	// };
 //   $scope.refresh();
 //   $scope.$on("refresh", $scope.refresh);

    /*==========end your business===================================*/
}]);
}).call(this);