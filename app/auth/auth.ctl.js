'use strict';
angular.module('myApp')
	.controller('AuthCtrl', ['$state', 'Auth', '$interval', 
				function ($state, Auth, $interval) {
			var authCtrl = this;

			// Set interval to Messages
			$interval(function () {
				authCtrl.message = false;
				authCtrl.error = false;
			}, 3000);



				authCtrl.user = {
					email: '',
					password: ''
				};

				authCtrl.login = function () {
					Auth.$authWithPassword(authCtrl.user).then(function (auth) {
						authCtrl.message = 'Logado com sucesso';
						$state.go('franqueados.bemvindos');
						
						console.log('logado');
					}, function (error) {
						authCtrl.error = 'Email ja tomado ou senha incorreta. Verique sinal da internet  ' + error;
					});
				};

				authCtrl.register = function () {
					Auth.$createUser(authCtrl.user).then(function (user) {
						Materialize.toast('Usuario criado com sucesso !!', 2000);
						authCtrl.message = 'Usuario criado com sucesso';
						$state.go('franqueados.bemvindos');
						$location.reload();
						console.log('usuario registrado');
					}, function (error) {
						authCtrl.error = 'Preencha os campos corretamente ou verifique sinal internet';
					});
				};

			   authCtrl.logout = function () {
					// Materialize.toast(message, displayLength, className, completeCallback);
					Materialize.toast('Voce foi desconectado com sucesso !!', 3500);
			    	 Auth.$unauth();
			  		$state.go('welcome');

				};






				}]);
