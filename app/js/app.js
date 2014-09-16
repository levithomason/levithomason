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
                controller: 'HomeController'
            }).
            when('/about/', {
                templateUrl: '../partials/_about.html',
                controller: 'AboutController'
            }).
            when('/contact/', {
                templateUrl: '../partials/_contact.html',
                controller: 'ContactController'
            }).
            when('/portfolio/', {
                templateUrl: '../partials/_portfolio.html',
                controller: 'PortfolioController'
            }).
            when('/resume/', {
                templateUrl: '../partials/_resume.html',
                controller: 'ResumeController'
            }).
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true).hashPrefix('!');
    });
