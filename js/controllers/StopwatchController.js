mainApp.controller('StopwatchController', ['$scope', function($scope){
  $scope.message = 'This is the stopwatch app';
  $scope.date1 = new Date();
  $scope.date2 = new Date();
}]);
