mainApp.controller('StopwatchController', ['$scope', function($scope){
  $scope.message = 'This is the stopwatch app';
  $scope.time_elapsed = 0;

  $scope.get_date = function(){
    return new Date();
  };

  $scope.start = function(condition){
    initial_time = $scope.get_date();
    repeat = $interval(function () {
      var now = new Date();
      $scope.time_elapsed = now.getTime() - initial_time.getTime();
    }, 10);
  };
}]);
