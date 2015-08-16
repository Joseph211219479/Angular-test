'use strict';

//data called not formatted ... create service withe formatted data
app.controller('MainCtrl',['$scope','funds' , function($scope, funds ){
  funds.success(function(data){
    $scope.fundList = data;
  })
}])

//one controller per html
/*.controller('DateSplit',['ldate',function(ldate){
  ldate.success(function(data){
    $scope.sDate = data;
    $scope.splitter = function(ld){
     var dt = ld.split('/');
     var nDate =new Date( dt[2] +',' +dt[1]+'+' +dt[0]);
     return nDate;
     };
  });
}])*/


/*
angular.module('fundInformationApp')
  .controller('MainCtrl', ['$scope','funds',function($scope,funds) {
    funds.success(function(data) {
      $scope.fund = data;
    }) ;

  }]);
*/
