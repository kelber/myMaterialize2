'use strict';
angular.module('myApp')
	.controller('WelcomeCtrl', ['$scope','$state','$location',
				function($scope,$state,$location) {
					

			$scope.vai = function () {
			$location.path('http://demo.geekslabs.com/materialize/v2.1/layout01/app-widget.html');
			};
			


	}]);

