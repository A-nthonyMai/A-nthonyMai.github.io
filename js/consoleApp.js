var app = angular.module('consoleApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/aboutMe.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});