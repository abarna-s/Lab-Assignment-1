angular.module('plunker', [])
    .controller('MainCtrl', ['$scope', function($scope) {
      $scope.count = 0;
      $scope.myFunc = function() {
        $scope.count++;
      };
    }]);
