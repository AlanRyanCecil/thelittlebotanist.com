angular.module('ThelittlebotanistApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '',
        views: {
            'content': {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            }
        }
    })
}])