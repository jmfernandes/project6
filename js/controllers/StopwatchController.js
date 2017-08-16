mainApp.controller('StopwatchController', ['$scope', '$interval', function($scope,$interval){
  $scope.message = 'This is the stopwatch app';
  $scope.time_elapsed = 0;
  $scope.total_elapsed = 0;

  var repeat;
  $scope.get_date = function(){
    return new Date();
  };

  $scope.start = function(){
    if (!repeat) {
    initial_time = $scope.get_date();
    repeat = $interval(function () {
      var now = new Date();
      $scope.time_elapsed = now.getTime() - initial_time.getTime();
    }, 10);
  }
  };

  $scope.stop = function(){
    if (repeat){
    $interval.cancel(repeat);
    repeat = undefined;
    $scope.total_elapsed += $scope.time_elapsed;
    $scope.time_elapsed = 0;
  }
  };

  $scope.$on('$destroy', function() {
   // Make sure that the interval is destroyed too
   $scope.stop();
 });

 $scope.getElapsedMs = function() {
  return $scope.total_elapsed + $scope.time_elapsed;
};

}]);
