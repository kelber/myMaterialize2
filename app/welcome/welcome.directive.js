'use strict';
angular.module('myApp')
		.directive('bgImg', [function () {
		  return {
			'restrict': 'A',
			'scope': true,
			'link': function ($scope, element, attrs) {
			  

body {
	
    background-image: url("../sp2.jpg");
	background-size: 100%; 
	background-repeat: initial;
	
  /*    background-color: #cccccc;  */
}

			}

	}]);
		  


