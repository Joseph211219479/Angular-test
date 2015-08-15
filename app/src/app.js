'use strict';

var app = angular.module('fundInformationApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).
  config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/common/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
/*
angular.module('fundInformationApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

  .
  config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/common/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/
