'use strict';

angular.module('weatherApp.forecast', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {
    templateUrl: 'forecast/forecast.html',
    controller: 'forecastCtrl'
  });
}])

.controller('forecastCtrl', ['$scope',function($scope) {
  $scope.locations=['Boston', 'Los Angles','Chicago','New York','Seattle'];
}]);