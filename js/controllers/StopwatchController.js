mainApp.controller('StopwatchController', ['$scope', function($scope){
  $scope.message = 'This is the stopwatch app';
  $scope.date = new Date();
  $scope.time_elapsed = 0;

  $scope.start = function(condition){
    return condition;
  };
}]);
