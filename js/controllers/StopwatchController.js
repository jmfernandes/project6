mainApp.controller('StopwatchController', ['$scope', '$interval', function($scope,$interval){
  $scope.message = 'This is the stopwatch app';

  var repeat;
  var time_elapsed = 0;
  var total_time = 0;

  $scope.get_date = function(){
    return new Date();
  };

  $scope.start = function(){
    if (!repeat) {
    initial_time = $scope.get_date();
    repeat = $interval(function () {
      now = $scope.get_date();
      time_elapsed = now.getTime() - initial_time.getTime();
    }, 10);
  }
  };

  $scope.stop = function(){
    if (repeat){
    $interval.cancel(repeat);
    repeat = undefined;
    total_time += time_elapsed;
    time_elapsed = 0;
  }
  };

  $scope.reset = function() {
  initial_time = $scope.get_date();
  total_time  = 0;
  time_elapsed = 0;
};

  $scope.$on('$destroy', function() {
   // Make sure that the interval is destroyed too
   $scope.stop();
 });

 $scope.getElapsedMs = function() {
  return total_time + time_elapsed;
};

}]);
