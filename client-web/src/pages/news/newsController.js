// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('newsController', ['$scope','$sce','$timeout','newsfrontService',function($scope,$sce,$timeout,newsfrontService) {
    /*==========begin your business=================================*/
var model=$scope.model={
	news:null
};
  //var slides = $scope.slides =[];
var popnewsmodel = $scope.popnewsmodel={
	newstitle:null,
	newscontent:null,
	newsdate:null
};


$scope.refresh = function () {
	newsfrontService.getnews(function(data){
		model.news=data;
	});
}

$scope.refresh();
$scope.$on("refresh", $scope.refresh);





$('#newsModal').on('show.bs.modal', function (e) {

  var esseyId = e.relatedTarget.id;

  //slides.length=0;
	$.each(model.news,function(index,item){

			if(item.newsid==esseyId)
			{
				popnewsmodel.newstitle = item.newstitle;
				popnewsmodel.newscontent=item.newscontent;
				popnewsmodel.newsdate=item.newsdate;
				 // $.each(item.uploadimglist,function(index,image){
			  //        slides.push({image:image.Url});
			  //      });
			}
	});

	$timeout(function(){}, 1000);
 });



    /*==========end your business===================================*/
}]).filter('htmlize', ['$sce', function($sce){
			return function(val) {
				return $sce.trustAsHtml(val);
			};
	}]);

}).call(this);



