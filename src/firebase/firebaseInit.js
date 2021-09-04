import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB6B-o3sQzUiUQLveBxaAaipD5NXT66Lzw",
    authDomain: "fireblogs-33c2d.firebaseapp.com",
    projectId: "fireblogs-33c2d",
    storageBucket: "fireblogs-33c2d.appspot.com",
    messagingSenderId: "69837042938",
    appId: "1:69837042938:web:351fcc1003c588b5918543"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();