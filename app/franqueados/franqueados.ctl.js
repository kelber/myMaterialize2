'use strict';
angular.module('myApp')

	.controller('FranqueadosCtrl', ['$state', 'md5','auth','profile',
				function ($state,md5,auth,profile) {

				var profileCtrl = this;
					profileCtrl.profile = profile;


				}])

	.controller('DocsCtrl', ['$state','Docs',
				function ($state,Docs) {

	    var docsCtrl = this;
		  docsCtrl.docs = {

		  };
		  docsCtrl.sendDoc = function (doc) {
			  Docs.addDoc(docsCtrl.docs);
			  console.log(doc);
				console.log('Documento enviado com sucesso');
				Materialize.toast('Documento enviado com sucesso',2000);
			};
			docsCtrl.updateDoc = function (id) {
				Docs.updateDoc(id);
				Materialize.toast('Atualizado com sucesso', 2000);
			};

				}])


	.controller('ProfileCtrl' , ['$state', 'md5','auth','profile',
				function ($state,md5,auth,profile) {

				var profileCtrl = this;
					profileCtrl.profile = profile;

					profileCtrl.updateProfile = function () {
//						profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
						profileCtrl.profile.$save();
						Materialize.toast('Profile cadastrado com sucesso',2000);
					};
				}]);









