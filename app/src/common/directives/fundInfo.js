app.directive('fundInfo', function(){
  return{
    restrict:'E',
    scope:{
      info:'='
    },
    templateUrl:'src/common/views/fundInformation.html'
  };
});
