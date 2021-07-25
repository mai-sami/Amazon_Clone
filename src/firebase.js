
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYp4GwwdRNQfdMaGEsmcU8nRv2r_y5upw",
  authDomain: "fir-d0820.firebaseapp.com",
  projectId: "fir-d0820",
  storageBucket: "fir-d0820.appspot.com",
  messagingSenderId: "683513673993",
  appId: "1:683513673993:web:36e5e5928f558866c07bd8",
  measurementId: "G-WZMP1CDCXF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };