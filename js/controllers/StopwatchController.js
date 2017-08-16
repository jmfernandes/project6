mainApp.controller('StopwatchController', ['$scope', '$interval', function($scope,$interval){
  $scope.message = 'This is the stopwatch app';
  $scope.time_elapsed = 0;

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
  }
  };

  $scope.$on('$destroy', function() {
   // Make sure that the interval is destroyed too
   $scope.stop();
 });

 $scope.filter('millSecondsToTimeString', function() {
  return function(millseconds) {
    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;

    var seconds = Math.floor((millseconds % oneMinute) / oneSecond);
    var minutes = Math.floor((millseconds % oneHour) / oneMinute);
    var hours = Math.floor((millseconds % oneDay) / oneHour);
    var days = Math.floor(millseconds / oneDay);

    var timeString = '';
    if (days !== 0) {
        timeString += (days !== 1) ? (days + ' days ') : (days + ' day ');
    }
    if (hours !== 0) {
        timeString += (hours !== 1) ? (hours + ' hours ') : (hours + ' hour ');
    }
    if (minutes !== 0) {
        timeString += (minutes !== 1) ? (minutes + ' minutes ') : (minutes + ' minute ');
    }
    if (seconds !== 0 || millseconds < 1000) {
        timeString += (seconds !== 1) ? (seconds + ' seconds ') : (seconds + ' second ');
    }

    return timeString;
};
});

}]);
