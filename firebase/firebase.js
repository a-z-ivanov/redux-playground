import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAbM7Tr6PxJQTO26lxqXx_lEBLw7CYEzyM",
    authDomain: "tryscrabble.firebaseapp.com",
    databaseURL: "https://tryscrabble.firebaseio.com",
    projectId: "tryscrabble",
    storageBucket: "tryscrabble.appspot.com",
    messagingSenderId: "527019003363"
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };

// firebase.database().ref().set({ name: 'alex' });