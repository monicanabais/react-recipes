import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK4Kibl8BZ56tRTLSqkNh_eeVE1-lpsfw",
  authDomain: "recipes-app-ccf65.firebaseapp.com",
  projectId: "recipes-app-ccf65",
  storageBucket: "recipes-app-ccf65.appspot.com",
  messagingSenderId: "22251021688",
  appId: "1:22251021688:web:c99f4778cf642a7ad7148d"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };