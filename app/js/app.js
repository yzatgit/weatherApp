// 'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

'use strict';

// Declare app level module which depends on filters, and services
angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.services',
  'weatherApp.directives',
  'weatherApp.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {
    templateUrl: 'views/forecast.html', 
    controller: 'weatherAppCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);