(function () {
'use strict';

//var mongoose = require("mongoose");
//var global;
//global.dbHelper = require( './common/dbHelper' );

//global.db = mongoose.connect("mongodb://127.0.0.1:27017/test1");


 angular.module('scotchApp', ['ngRoute'])
.config(["$routeProvider","$httpProvider",function($routeProvider,$httpProvider) {
  
        //$httpProvider.defaults.useXDomain = true;
       // $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        //$httpProvider.defaults.withCredentials = true;
        


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

           .when('/team', {
            templateUrl : 'pages/teams/team.html',
            controller  : 'teamController'
        })

            .when('/about', {
            templateUrl : 'pages/abouts/about.html',
            controller  : 'aboutController'
        }) 
        .otherwise({redirectTo:'/'});
}]);

}).call(this);
 

 





