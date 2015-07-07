(function () {
'use strict';
  var url = 'http://127.0.0.1:8201/upload';
 angular.module('scotchApp', ['ngRoute','blueimp.fileupload'])
.config(["$routeProvider","$httpProvider",'$locationProvider','fileUploadProvider',function($routeProvider,$httpProvider,$locationProvider,fileUploadProvider) {
  
        //$httpProvider.defaults.useXDomain = true;
       // $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        //$httpProvider.defaults.withCredentials = true;
        
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  fileUploadProvider.defaults.redirect = window.location.href.replace(
                    /\/[^\/]*$/,
                    '/pages/cors/result.html?%s'
                );
         

    $routeProvider
        .when('/', {
            templateUrl : 'pages/homes/home.html',
            controller  : 'homeController'
        })
 
        // route for the about page
        .when('/company', {
            templateUrl : 'pages/companys/company.html',
            controller  : 'companyController'
        })
 
        // route for the contact page
        .when('/news', {
            templateUrl : 'pages/news/news.html',
            controller  : 'newsController'
        })

         .when('/plan', {
            templateUrl : 'pages/plans/plan.html',
            controller  : 'planController'
        })

          .when('/build', {
            templateUrl : 'pages/buildings/build.html',
            controller  : 'buildController'
        })

           .when('/us', {
            templateUrl : 'pages/teams/team.html',
            controller  : 'teamController'
        })

            .when('/about', {
            templateUrl : 'pages/abouts/about.html',
            controller  : 'aboutController'
        }) 
            .when('/login',{
                templateUrl:'pages/backend/index/index.html',
                controller:'indexController'
            })
        .otherwise({redirectTo:'/'});

         $locationProvider.html5Mode(true);

}]) .controller('DemoFileUploadController', [
            '$scope', '$http', '$filter', '$window',
            function ($scope, $http) {
                $scope.options = {
                    url: url
                };
              
                    $scope.loadingFiles = false;
                    $http.get(url)
                        .then(
                           //不要否则会自动加载所有内容出来
                            // function (response) {

                            //     $scope.loadingFiles = false;
                                
                            //     $scope.queue = response.data.files || [];
                            // },
                            // function () {
                            //     $scope.loadingFiles = false;
                            // }
                        );
                
            }

            
        ])

        .controller('FileDestroyController', [
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
                    file.$cancel = function () {
                        $scope.clear(file);
                    };
                }

            }
        ]);

}).call(this);
 

 





