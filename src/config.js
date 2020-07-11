import fire from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAyBZtfUE_eT0DxobMgbL9UIUrjUpmGQPU',
	authDomain: 'behayve-adept.firebaseapp.com',
	databaseURL: 'https://behayve-adept.firebaseio.com',
	projectId: 'behayve-adept',
	storageBucket: 'behayve-adept.appspot.com',
	messagingSenderId: '287997635685',
	appId: '1:287997635685:web:d4c5c12f48af5fce4eea8c',
};

const firebase = fire.initializeApp(config);
export default firebase;
