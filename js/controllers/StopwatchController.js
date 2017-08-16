mainApp.controller('StopwatchController', ['$scope', '$interval', function($scope,$interval){
  $scope.message = 'This is the stopwatch app';
  $scope.time_elapsed = 0;

  var repeat;
  $scope.get_date = function(){
    return new Date();
  };

  $scope.start = function(){
    if (!repeat) {
    if ($scope.time_elapsed == 0 ){
    initial_time = $scope.get_date();
  }
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
  }
  };

  $scope.$on('$destroy', function() {
   // Make sure that the interval is destroyed too
   $scope.stop();
 });

}]);
