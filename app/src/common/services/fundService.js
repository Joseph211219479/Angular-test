'use strict'

app.factory('funds', ['$http',
  function($http){
    return $http.get('src/common/jsonDataFiles/fund.json').
      success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      });
  }]);

