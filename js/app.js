var MainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: '/project5/assets/templates/home.html',
			controller: 'HomeController'
		})
		.when('/stopwatch', {
			templateUrl: '/project5/assets/templates/stopwatch.html',
			controller: 'StopwatchController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
