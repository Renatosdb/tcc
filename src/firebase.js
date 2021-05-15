import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyA6Wr5MVIXiakvkIw_UIBVxqywoOSOuB0M",
    authDomain: "e-commerce-62de3.firebaseapp.com",
    databaseURL: "https://e-commerce-62de3.firebaseio.com",
    projectId: "e-commerce-62de3",
    storageBucket: "e-commerce-62de3.appspot.com",
    messagingSenderId: "565735043978",
    appId: "1:565735043978:web:9b12596bc2dcea4f224e73",
    measurementId: "G-XFBHCL742J"
});

const auth = firebase.auth();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, facebookAuthProvider };