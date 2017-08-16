mainApp.controller('CurrencyController', ['$scope', function($scope){
  $scope.message = 'This is the currency page';
  $scope.input = 0;
  $scope.output = 0;
  $scope.options =
  [
  {
    name: 'American Dollar',
    value: 'American Dollar'
  },
  {
    name: 'Euro',
    value: 'Euro'
  },
  {
    name: 'Pound Sterling',
    value: 'Pound Sterling'
  },
  {
    name: 'Australian Dollar',
    value: 'Australian Dollar'
  },
  {
    name: 'Swiss Franc',
    value: 'Swiss Franc'
  },
  {
    name: 'Franc',
    value: 'Franc'
  },
  {
    name: 'Yen',
    value: 'Yen'
  }
  ];

  $scope.convert = function(){
    $scope.output = 5
  }

}]);
