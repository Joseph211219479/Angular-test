'use strict';

app.controller('MainCtrl',['$scope','funds', function($scope, funds){
  funds.success(function(data){
    $scope.fundList = data;
  });
}]);

/*
angular.module('fundInformationApp')
  .controller('MainCtrl', ['$scope','funds',function($scope,funds) {
    funds.success(function(data) {
      $scope.fund = data;
    }) ;

  }]);
*/
