var ltAppControllers = angular.module('ltApp.controllers', []);

ltAppControllers.
    controller('AboutController', ['$scope', function($scope) {

    }]).

    controller('ContactController', ['$scope', function($scope) {

    }]).

    controller('PortfolioController', ['$scope', function($scope) {

    }]).

    controller('ResumeController', ['$scope', function($scope) {
        $scope.stats = [
            {
                name: 'Front',
                scale: 78
            },
            {
                name: 'Back',
                scale: 35
            },
            {
                name: 'DBA',
                scale: 25
            },
            {
                name: 'Design',
                scale: 55
            },
            {
                name: 'UX/UI',
                scale: 60
            }
        ];
    }]).

    controller('HomeController', ['$scope', function($scope) {

    }]);
