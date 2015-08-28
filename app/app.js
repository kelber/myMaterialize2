'use strict';
angular.module('myApp', [
		'firebase',
		'ui.router',
		'angular-md5'

	])
	.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
			.state('welcome', {
				url: '/',
				templateUrl:  'welcome/index.html',
				controller:  'AuthCtrl as authCtrl'
			})
			.state('ultravisao', {
				url: '/ultravisao',
				templateUrl: 'welcome/ultravisao.tpl.html',
				controller:  'AuthCtrl as authCtrl'
			})
			.state('ultravisao.sobre', {
				url: '/sobre',
				templateUrl: 'welcome/sobre.tpl.html',
				controller:  'WelcomeCtrl as welcomeCtrl'
			})	
			.state('ultravisao.plano', {
				url: '/plano',
				templateUrl: 'welcome/plano.tpl.html'
			})
			.state('ultravisao.oqueoferecemos', {
				url: '/oqueoferecemos',
				templateUrl: 'welcome/oqueoferecemos.tpl.html'
			})
			.state('ultravisao.diferenciais', {
				url: '/diferenciais',
				templateUrl: 'welcome/diferenciais.tpl.html'
			})
			.state('ultravisao.perfilempreendedor', {
				url: '/perfilempreendedor',
				templateUrl: 'welcome/perfilempreendedor.tpl.html'
			})
			.state('ultravisao.perfilempreendedordois', {
				url: '/perfilempreendedordois',
				templateUrl: 'welcome/perfilempreendedordois.tpl.html'
			})
			.state('ultravisao.valores', {
				url: '/valores',
				templateUrl: 'welcome/valores.tpl.html'
			})
			.state('ultravisao.observacoes', {
				url: '/observacoes',
				templateUrl: 'welcome/observacoes.tpl.html',
				controller:  'AuthCtrl as authCtrl'
			})
			
			// -----------------------------------------------
			// franqueados
			// -----------------------------------------------
			.state('franqueados', {
				url: '/franqueados',
				templateUrl: 'franqueados/index.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'

			})
			.state('franqueados.bemvindos', {
				url: '/bem-vindos',
				templateUrl: 'franqueados/bemvindo.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'
			
			})
			.state('franqueados.franchising', {
				url: '/sistema-de-franchising',
				templateUrl: 'franqueados/franchising.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'
			
			})
	
			.state('franqueados.cronogramas', {
				url: '/cronogramas',
				templateUrl: 'franqueados/cronogramas.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'

			})
			.state('franqueados.resumocof', {
				url: '/resumocof',
				templateUrl: 'franqueados/resumoCof.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'

			})
			.state('franqueados.cadastros', {
				url: '/cadastros',
				templateUrl: 'franqueados/cadastros.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'

			})
			.state('franqueados.relacaodocumentos', {
				url: '/relacao-de-documentos',
				templateUrl: 'franqueados/relacaodedocumentos.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'

			})
	
			.state('franqueados.minutas', {
				url: '/minutas',
				templateUrl: 'franqueados/minutas.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'

			})
			// -----------------------------------------------
			// COF
			// -----------------------------------------------
			.state('cof', {
				url: '/cof',
				templateUrl: 'cof/cof.tpl.html',
				controller:  'FranqueadosCtrl as franqueadosCtrl',
				controller:  'AuthCtrl as authCtrl'

			})







			
			.state('login', {
				url: '/login',
				templateUrl: 'auth/login.tpl.html',
				controller:  'AuthCtrl as authCtrl',
				resolve: {
					requireNoAuth: function ($state, Auth, Users) {
						Auth.$requireAuth().then(function (auth) {
							$state.go('welcome');
						}, function (error) {
							authCtrl.error = error;
						});
					}
				}
			})
			.state('register' , {
				url: '/register',
				templateUrl: 'auth/register.tpl.html',
				controller:  'AuthCtrl as authCtrl',
				resolve: {
					requireNoAuth: function ($state, Auth, Users) {
						Auth.$requireAuth().then(function (user) {
							$state.go('welcome');
						}, function (error) {
							authCtrl.error = error;
						});
					}
				}






			});
			$urlRouterProvider.otherwise('/');
			

	})
	.constant('FIREBASE_URL', 'https://minhafranquia.firebaseio.com/');

