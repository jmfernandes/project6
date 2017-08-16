var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: '/project6/assets/templates/home.html',
			controller: 'HomeController'
		})
		.when('/stopwatch', {
			templateUrl: '/project6/assets/templates/stopwatch.html',
			controller: 'StopwatchController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.filter('millSecondsToTimeString', function() {
  return function(millseconds) {
    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;

		var milliseconds = Math.floor(millseconds % 1000);
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
    if (seconds !== 0) {
        timeString += (seconds !== 1) ? (seconds + ' seconds ') : (seconds + ' second ');
    }
		if (milliseconds !== 0) {
        timeString += (milliseconds !== 1) ? (milliseconds + ' milliseconds ') : (milliseconds + ' milliseconds ');
    }

    return timeString;
};
});
