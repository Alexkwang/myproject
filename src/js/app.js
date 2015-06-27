;

var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'pages/homes/home.html',
            controller  : 'mainController'
           
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
});
 

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});


 scotchApp.controller('companyController', function($scope) {
    $scope.message = 'company pages.';
});

scotchApp.controller('newsController', function($scope) {
    $scope.message = 'news  pages.';
});

scotchApp.controller('planController', function($scope) {
    $scope.message = 'plan pages.';
});

scotchApp.controller('buildController', function($scope) {
    $scope.message = 'build page.';
});

scotchApp.controller('teamController', function($scope) {
    $scope.message = 'team pages .';
});


scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});
 





