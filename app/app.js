'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.controller',
  'weatherApp.service',
  'weatherApp.view2',
  'weatherApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/weather'});
  
}]);
