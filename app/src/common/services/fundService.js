'use strict'

app.factory('funds', ['$http',function($http){
    return $http.get('src/common/jsonDataFiles/fund.json')
      .success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      });
  }])
  .filter('ldate',[ function(){
    return function(input) {
      input = input.split('/');
      return (new Date(input[2] + ',' + input[1] + ',' + input[0]));
    };
  }])
  .filter('isNull',[function(){
    return function(input){
     return (input.toString() ==''? '--' :input );
    }
  }]);





