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
      })//redundant
      .when('/fundInformation',{
        templateUrl:'src/common/views/fundInformation.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
