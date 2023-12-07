import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC7DFj2kb1FjDBCsHpDoGBXjaOPS6cNJb0",
  authDomain: "personal-note-a2bd1.firebaseapp.com",
  projectId: "personal-note-a2bd1",
  storageBucket: "personal-note-a2bd1.appspot.com",
  messagingSenderId: "280229248689",
  appId: "1:280229248689:web:29b975be75c12893f1ac90",
  measurementId: "G-86XTPLDLD6",
}
const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

export { firebase }
