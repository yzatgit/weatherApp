'use strict';

angular.module('weatherApp.controller', ['ngRoute','chart.js'])

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
  $scope.message="Loading...";
  $scope.showContent=false;

  $scope.getLocationDetail = function() {
    $scope.city=$scope.location.split(",")[0];
    $scope.state=$scope.location.split(",")[1];
    //replace "space" with "_" in city name for query to work
    $scope.weatherRes = weatherData.queryCurrentWeather({city:$scope.city.replace(" ","_"),state:$scope.state});
    $scope.forecastRes = weatherData.query10dayForecast({city:$scope.city.replace(" ","_"),state:$scope.state});

    $scope.forecastRes.$promise
    .then(
      function(response){
        $scope.showContent=true;
        $scope.forecastJson = response.forecast; 
        //convert forecast hash to dfferent arrays
        var dayForecastArr = $scope.forecastJson.simpleforecast.forecastday;
        var mylabel = [];
        var myTempHigh = [];
        var myTempLow = [];
        
        for(var i in dayForecastArr)
        {
          //mylabel.push(dayForecast.date.weekday);
          mylabel.push(dayForecastArr[i].date.weekday);
          myTempHigh.push(dayForecastArr[i].high.fahrenheit);
          myTempLow.push(dayForecastArr[i].low.fahrenheit);
        }

        // chart settings
      $scope.labels = mylabel;
      $scope.series = ['Temperature High(F)', 'Temperature Low(F)'];
      $scope.data = [
        myTempHigh,//[65, 59, 80, 81, 56, 55, 40],
        myTempLow //[28, 48, 40, 19, 86, 27, 90]
      ];

      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

      $scope.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              ticks:{min:-20, max: 80},
              gridLines:{display:false}
            }
          ],
          xAxes: [
            {
              gridlines: {
                display:false
              }
            }
          ]
        },
        elements: {
          line: {
            fill:false
          }
        },
        legend: {display: true}
      };
    },
    function(response){
      $scope.message="Error: "+response.status + " " + response.statusText;
    }
  )
  };
  
  $scope.changeLocation = function(){
    $scope.getLocationDetail();
  };
  // get default location data
  $scope.getLocationDetail();

}])