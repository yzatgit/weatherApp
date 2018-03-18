'use strict';

angular.module('weatherApp.controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {
    templateUrl: 'weather/view.html',
    controller: 'weatherCtrl'
  });
}])


.controller('weatherCtrl',['$scope','weatherData', function($scope, weatherData){
  $scope.locations = [
    {city: 'Boston',state:'MA'},
    {city: 'Nashua', state:'NH'},
    {city: 'Chicago', state:'IL'},
    {city: 'Raleigh', state: 'NC'},
    {city: 'Seattle', state: 'WA'}
  ]
  $scope.location = "Boston,MA";

  $scope.changeLocation = function(){
    $scope.city=$scope.location.split(",")[0];
    $scope.state=$scope.location.split(",")[1];
    $scope.forecastRes = weatherData.query10dayForecast({city:$scope.city,state:$scope.state});
    $scope.weatherRes = weatherData.queryCurrentWeather({city:$scope.city,state:$scope.state});
  };
  $scope.city=$scope.location.split(",")[0];
  $scope.state=$scope.location.split(",")[1];
  $scope.weatherRes = weatherData.queryCurrentWeather({city:$scope.city,state:$scope.state});
  $scope.forecastRes = weatherData.query10dayForecast({city:$scope.city,state:$scope.state});
 
}])