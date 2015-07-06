// create the controller and inject Angular's $scope
(function () {
'use strict';
angular.module('scotchApp').controller('indexController', ['$scope',function($scope) {
   
   var loginModel = $scope.loginModel={

    userName:null,
    passWord:null
   }

$scope.login=function(){

debugger;

  if(loginModel.userName=='admin' && loginModel.passWord=='admin')
  {

  }
};

}]);
}).call(this);
