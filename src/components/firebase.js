import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD19YR1DQ35M64iaZahVe6vrfROZK2PZDk",
  authDomain: "twitter-clone-985cf.firebaseapp.com",
  databaseURL: "https://twitter-clone-985cf.firebaseio.com",
  projectId: "twitter-clone-985cf",
  storageBucket: "twitter-clone-985cf.appspot.com",
  messagingSenderId: "584981180219",
  appId: "1:584981180219:web:92512f8264f9613bfa911e",
  measurementId: "G-SWCEHE91LC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
