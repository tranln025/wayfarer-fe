import firebase from 'firebase/app'
import 'firebase/storage'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC8r5oARgr8mGe5ejaXbK_t694I4XHi4nk",
    authDomain: "wayfarer-sei5.firebaseapp.com",
    databaseURL: "https://wayfarer-sei5.firebaseio.com",
    projectId: "wayfarer-sei5",
    storageBucket: "wayfarer-sei5.appspot.com",
    messagingSenderId: "249857016927",
    appId: "1:249857016927:web:d8f848629ba7499ee047ea",
    measurementId: "G-QDMM1J1VPM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;