'use strict';
angular.module('myApp')
	.factory('Franqueados', ['FIREBASE_URL', '$firebaseArray', 
			 function (FIREBASE_URL, $firebaseArray) {


			 }])
	.factory('Docs', ['FIREBASE_URL', '$firebaseArray', 
			 function (FIREBASE_URL, $firebaseArray) {

		var docsRef = new Firebase(FIREBASE_URL + 'docs');
		var docs = $firebaseArray(docsRef);

		var _getDocs = function () {
			return docs;
		};

		var _addDoc = function (doc) {
			 docs.$add(doc);
		};

		var _updateDoc = function (id) {
			docs.$save(id);
		};

		return {
			getDocs: _getDocs,
			addDoc:  _addDoc,
			updateDoc: _updateDoc
		};

			 }])
	.factory('Users', ['FIREBASE_URL', '$firebaseArray','$firebaseObject',
			 function (FIREBASE_URL, $firebaseArray,$firebaseObject) {

		
		var usersRef = new Firebase(FIREBASE_URL + 'users');
		var users = $firebaseArray(usersRef);
		
		var Users = {
			getProfile: function (uid) {
				return $firebaseObject(usersRef.child(uid));
			},
			getDisplayName: function (uid) {
				return users.$getRecord(uid).displayName;
			},
			getGravatar: function (uid) {
				return 'www/gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
			},
			all: users
		};

		return Users;




			 }]);
		
