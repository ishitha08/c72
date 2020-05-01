import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCaoOwNAukNJN4Bh0CPRbf-6uDec4WXVZ4",
    authDomain: "c-7-1-3d7ac.firebaseapp.com",
    databaseURL: "https://c-7-1-3d7ac.firebaseio.com",
    projectId: "c-7-1-3d7ac",
    storageBucket: "c-7-1-3d7ac.appspot.com",
    messagingSenderId: "394478239817",
    appId: "1:394478239817:web:959e6a9554e80edf29bf98",
    measurementId: "G-52LC5L8KR9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()