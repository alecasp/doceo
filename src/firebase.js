import firebase from "firebase/app";
import firestore from "firebase/firestore";
import storage from "firebase/storage";

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
  apiKey: "AIzaSyD-yx-Rh7zJX8kyhB9FHoP0ZC8oqM2z08M",
  authDomain: "splitscreen-6e304.firebaseapp.com",
  projectId: "splitscreen-6e304",
  storageBucket: "splitscreen-6e304.appspot.com",
  messagingSenderId: "295085217071",
  appId: "1:295085217071:web:5f3e846d21ee06627c3dda",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
db.settings(settings);
export const collection = db.collection("News");

export default firebase;
