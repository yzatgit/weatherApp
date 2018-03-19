'use strict';

angular.module('weatherApp.controller', ['ngRoute','chart.js'])

.controller('weatherCtrl',['$scope','weatherData', 'locationData',function($scope, weatherData, locationData){
  $scope.locations = locationData;
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

      //on success
      function(response){
        console.log("success");
        $scope.showContent=true;
        $scope.forecastJson = response.forecast; 

        var weekdays = [];
        var tempHighs = [];
        var tempLows = [];

        //convert forecast hash to dfferent arrays
        var dayForecastArr = $scope.forecastJson.simpleforecast.forecastday;
        for(var i in dayForecastArr)
        {
          //mylabel.push(dayForecast.date.weekday);
          weekdays.push(dayForecastArr[i].date.weekday);
          tempHighs.push(dayForecastArr[i].high.fahrenheit);
          tempLows.push(dayForecastArr[i].low.fahrenheit);
        }

        // chart settings
        $scope.labels = weekdays;
        $scope.series = ['Temperature High(F)', 'Temperature Low(F)'];
        $scope.data = [tempHighs, tempLows ];

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

      //on error
      function(response){
        $scope.message="Error fetching weather data, status: "+ response.status + ", statustext: " + response.statusText;
        console.log("error");
      }
    )
  };
  
  // get default location data
  $scope.getLocationDetail();



  

}])