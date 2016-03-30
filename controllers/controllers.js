angular.module('ThelittlebotanistApp')

    .controller('HomeController', ['$scope', function ($scope) {
        $scope.greeting = "Welcome to The Little Botanist.";
    }])