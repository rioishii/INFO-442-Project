import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCCNFxIPBTcYB3UoC0oXcc1femR_vCjrNE",
    authDomain: "roomnchored.firebaseapp.com",
    databaseURL: "https://roomnchored.firebaseio.com",
    projectId: "roomnchored",
    storageBucket: "roomnchored.appspot.com",
    messagingSenderId: "148134115781",
    appId: "1:148134115781:web:40f830dc7d8eaeb7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;