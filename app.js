var app = angular.module('plunker', []);
app.directive('ngweb',function(){
  return{
    template:'<div>{{webname}}</div>'
  }
})
app.controller('MainCtrl', function($scope) {
  $scope.webname ="customize thing website" 
  $scope.mname = '';
  $scope.cname = '';
  $scope.tname = '';
  $scope.things=['mobile case','cup','t shirt']
});
