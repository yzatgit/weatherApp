'use strict';

angular.module('weatherApp.controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {
    templateUrl: 'weather/view.html',
    controller: 'weatherCtrl'
  });
}])


.controller('weatherCtrl',['$scope','weatherData', function($scope, weatherData){
  //TODO: locations collection move to service 
  $scope.locations = [
    {city: 'Boston', state:'MA'},
    {city: 'New York', state: 'NY'},
    {city: 'Nashua', state:'NH'},
    {city: 'Chicago', state:'IL'},
    {city: 'Raleigh', state: 'NC'},
    {city: 'Seattle', state: 'WA'},
    {city: 'Las Vegas', state: 'NV'}
  ];
  //initialize location 
  $scope.location = "Boston,MA";

  $scope.getLocationDetail = function() {
    $scope.city=$scope.location.split(",")[0];
    $scope.state=$scope.location.split(",")[1];
    //replace "space" with "_" in city name for query to work
    $scope.weatherRes = weatherData.queryCurrentWeather({city:$scope.city.replace(" ","_"),state:$scope.state});
    $scope.forecastRes = weatherData.query10dayForecast({city:$scope.city.replace(" ","_"),state:$scope.state});
    console.log($scope.city);
  };
  
  $scope.changeLocation = function(){
    $scope.getLocationDetail();
  };
  // get default location data
  $scope.getLocationDetail();
 
}])