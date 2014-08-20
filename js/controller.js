angular.module('ltApp', ['ngAnimate']).controller('ltMainController', ['$scope', function($scope) {

    $scope.initialized = false;

    $scope.menu = {
        'section': null,
        'setSection': function(section) {
            $scope.menu.section = section;

            $scope.logo.setStyle();
        },
        'isSection': function(section) {
            return section === $scope.menu.section;
        },
        'items': {
            'Work': {
                'name': "Work",
                'key': 'work',
                'active': function() {
                    $scope.menu.isSection('work');
                },
                'classes': function() {
                    return $scope.menu.isSection('work') ? 'work active' : 'work';
                }
            },
            'Services': {
                'name': "Services",
                'key': 'services',
                'active': function() {
                    $scope.menu.isSection('services');
                },
                'classes': function() {
                    return $scope.menu.isSection('services') ? 'services active' : 'services';
                }
            },
            'Blog': {
                'name': "Blog",
                'key': 'blog',
                'active': function() {
                    $scope.menu.isSection('blog');
                },
                'classes': function() {
                    return $scope.menu.isSection('blog') ? 'blog active' : 'blog';
                }
            },
            'About': {
                'name': "About Me",
                'key': 'about',
                'active': function() {
                    $scope.menu.isSection('about');
                },
                'classes': function() {
                    return $scope.menu.isSection('about') ? 'about active' : 'about';
                }
            }
        }
    };

    $scope.logo = {
        'src': null,
        'style': null,
        'OUTLINE_SRC': "img/logo-stroke.png",
        'SOLID_SRC': "img/logo.png",
        'setOutline': function() {
            $scope.logo.src = $scope.logo.OUTLINE_SRC;
            $scope.logo.style = 'outline';
        },
        'setSolid': function() {
            $scope.logo.src = $scope.logo.SOLID_SRC;
            $scope.logo.style = 'solid';
        },
        'clicked': function() {
            !$scope.menu.isSection('home') ? $scope.menu.setSection('home') : $scope.menu.setSection('work');
        },
        'setStyle': function() {
            if ($scope.menu.isSection('home')) {
                $scope.logo.setSolid();
            } else {
                $scope.logo.setOutline();
            }
        }
    };

    $scope.stats = [
        {
            name: 'Front-end',
            scale: 70,
            items: [
                'HTML5',
                'CSS3/LESS',
                'JavaScript',
                'AngularJS',
                'Bootstrap'
            ]
        },
        {
            name: 'Back-end',
            scale: 45,
            items: [
                'Python',
                'Django'
            ]
        },
        {
            name: 'Design',
            scale: 95,
            items: [
                'Photoshop',
                'Illustrator'
            ]
        },
        {
            name: 'DBA',
            scale: 30,
            items: [
                'PostgreSQL',
                'MySQL'
            ]
        }
    ];

    $scope.ltInit = function() {
        $scope.menu.setSection('home');
        $scope.initialized = true;
    };
}]);
