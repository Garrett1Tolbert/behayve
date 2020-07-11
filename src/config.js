const firebase = require('firebase');
require('firebase/firestore');

const config = {
	apiKey: 'AIzaSyAyBZtfUE_eT0DxobMgbL9UIUrjUpmGQPU',
	authDomain: 'behayve-adept.firebaseapp.com',
	databaseURL: 'https://behayve-adept.firebaseio.com',
	projectId: 'behayve-adept',
	storageBucket: 'behayve-adept.appspot.com',
	messagingSenderId: '287997635685',
	appId: '1:287997635685:web:d4c5c12f48af5fce4eea8c',
};
firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
