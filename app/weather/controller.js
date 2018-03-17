'use strict';

angular.module('weatherApp.weather', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {
    templateUrl: 'weather/view.html',
    controller: 'weatherCtrl'
  });
}])

.controller('weatherCtrl', ['$scope',function($scope) {
  $scope.locations=['Boston', 'Los Angles','Chicago','New York','Seattle'];
}]);