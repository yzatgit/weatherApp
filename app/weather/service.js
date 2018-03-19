'use strict';

angular.module('weatherApp.service',['ngResource'])
  .factory('weatherData', ['$resource', function($resource){ 
    //max 10 requests per minutes, 500/day
    //TODO: try be as economic as possible, combine 10day fc with weather request together count as 1 single request. 
    //example 10 day: http://api.wunderground.com/api/813de3f6f748408e/forecast10day/q/CA/San_Francisco.json
    //example today : http://api.wunderground.com/api/813de3f6f748408e/conditions/q/CA/San_Francisco.json

    var key = '813de3f6f748408e';
    var baseUrl = 'http://api.wunderground.com/api/813de3f6f748408e/';
    return $resource(baseUrl + ':path/q/:state/:city.json', //controller needs to pass in :state, :city for this api to work
            //TODO: some default values for parameters??
            {},
            { 
							//queryCurrentWeather method, returns the current weather condition of a given city
							queryCurrentWeather: 
							{ method:'GET', params:{ path:'conditions' }, isArray: false},
							//query10dayForecast method, returns the 10 day weather forecast a given city
							query10dayForecast:
							{ method:'GET', params:{ path:'forecast10day' }, isArray: false}
            }
        	);
  }])

  .factory('locationData', function(){
    // locations for user to select
    var locations = [
      {city: 'Boston', state:'MA'},
      {city: 'Southborough', state:'MA'},
      {city: 'New York', state: 'NY'},
      {city: 'Nashua', state:'NH'},
      {city: 'Chicago', state:'IL'},
      {city: 'Raleigh', state: 'NC'},
      {city: 'Seattle', state: 'WA'},
      {city: 'Las Vegas', state: 'NV'}
    ];
    return locations;
  })