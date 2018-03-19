'use strict';

describe('weatherApp.controller module', function() {

  var $scope;
  var ctrl;
  var locationData = [{city:'testCity',state:'testState'}];
  var weatherData = {
    query10dayForecast: function(){
      return  {$promise : new Promise(function(resolve, reject) {
        //always reject during a test
        reject({status:1,statusText:"test"});
      })
      }
    }
   ,
    queryCurrentWeather: function(){
      return {$promise : new Promise(function(resolve, reject) {
        //always reject during a test
        reject({status:1,statusText:"test"});
      })
      };
    }
    
  }; 
  
  beforeEach(module('weatherApp.controller'));

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    ctrl = $controller('weatherCtrl',{$scope:$scope,weatherData:weatherData,locationData:locationData});
  }))

  it('should do something', function() {
    expect($scope.location).toEqual("Boston,MA");
    expect($scope.showContent).toBeFalsy();
    expect($scope.getLocationDetail).toBeDefined();

  });
});