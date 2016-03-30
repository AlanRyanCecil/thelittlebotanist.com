angular.module('ThelittlebotanistApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        views: {
            'content': {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            }
        }
    })
}])