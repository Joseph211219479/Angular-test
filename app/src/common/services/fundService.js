'use strict'

app.factory('funds', ['$http',
  function($http){
    return $http.get('src/common/jsonDataFiles/fund.json').
      success(function(data){
        //$scope.scopeLdate = internalData(data,'fund' )
        return data;
      })
      .error(function(err){
        return err;
      });
  }]).
  filter('ldate', function(){
    return function(input) {
      var dte = input.split('/');
      var sDate = new Date(dte[2] + ',' + dte[1] + ',' + dte[0]);
      return sDate;
    }
});

/*
app.factory('format', function($scope ,rawData){
  var toProcess = {};
  var dataArray =[];
  rawData.success(function(){
    toProcess = $scope.fundList.getByName('fund');
    angular.forEach(toProcess, function(value,key){
      if(value == '')
        this.push(key +" : -- "  );
      else
        this.push(key+ " : " + value);
    })
    $scope.arrayList = dataArray;

  });
});

*/


