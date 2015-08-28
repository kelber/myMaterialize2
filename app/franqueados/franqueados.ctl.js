'use strict';
angular.module('myApp')
	.controller('FranqueadosCtrl', ['$state',
				function ($state) {


						// Set interval to Messages
			$interval(function () {
				authCtrl.message = false;
				authCtrl.error = false;
			}, 3000);






				}]);
