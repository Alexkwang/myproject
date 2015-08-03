 var url = 'http://127.0.0.1:8201/';
 (function () {
'use strict';
 
 angular.module('scotchApp', ['ngRoute','blueimp.fileupload','ngDialog','textAngular','ui.bootstrap','datatables'])
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
            controller  : 'teamsController'
        })

            .when('/about', {
            templateUrl : 'pages/abouts/about.html',
            controller  : 'aboutController'
        }) 
            .when('/index',{
                templateUrl:'pages/backend/index.html',
                controller:'indexController'
            })
        .otherwise({redirectTo:'/'});

        // $locationProvider.html5Mode(true);

}]); 


}).call(this);
 

 





