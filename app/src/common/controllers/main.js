'use strict';

app.controller('MainCtrl',['$scope','funds' , function($scope, funds ){
  funds.success(function(data){
    $scope.fundList = data;
  })

  $scope.fullFunds = function(path){
    console.log("fullfunds");
    $location.path(path);
  }

}]);
