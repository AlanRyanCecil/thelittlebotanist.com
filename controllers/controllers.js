angular.module('ThelittlebotanistApp')

    .controller('HomeController', ['$scope', function ($scope) {
        $scope.greeting = "The Little Botanist.";
    }])