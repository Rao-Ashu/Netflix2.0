import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHKh4FgGglkeqML3jNO5oxJkUtCpPIZIk",
    authDomain: "netflix-2-67439.firebaseapp.com",
    projectId: "netflix-2-67439",
    storageBucket: "netflix-2-67439.appspot.com",
    messagingSenderId: "1070510237810",
    appId: "1:1070510237810:web:6b45d66f0702c0de913aeb"
  };

  // Initialize the Firebase SDK
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
