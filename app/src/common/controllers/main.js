'use strict';

app.controller('MainCtrl',['$scope','funds' , function($scope, funds ){
  funds.success(function(data){
    $scope.fundList = data;
  });

  function getasArray(funds){
    funds.success(function(data){
      var array = data;
      var n =[];
      angular.forEach(array, function(value,key){
        this.push(value);
      },n);
      $scope.arrayList = n;
    });
  }

}]);
