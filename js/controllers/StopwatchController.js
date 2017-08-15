mainApp.controller('StopwatchController', ['$scope', function($scope){
  $scope.message = 'This is the stopwatch app';
  $scope.time_elapsed = 0;

  $scope.get_date = function(){
    return new Date();
  };

  $scope.start = function(condition){
    $scope.initial_time = get_date();
    return $scope.initial_time;
  };
}]);
