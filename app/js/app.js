var ltApp = angular.module('ltApp', [
    'ltApp.controllers',

    'ngRoute',
    'ngAnimate',
]);

ltApp.
    config(function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../partials/_home.html',
                controller: 'MainController'
            }).
            when('/resume/', {
                templateUrl: '../partials/_resume.html',
                controller: 'ResumeController'
            }).
            when('/about/', {
                templateUrl: '../partials/_about.html',
                controller: 'AboutController'
            }).
            when('/portfolio/', {
                templateUrl: '../partials/_portfolio.html',
                controller: 'PortfolioController'
            }).
            otherwise({
                redirectTo: '/'
            });

//        $locationProvider.html5Mode(true);
    });
