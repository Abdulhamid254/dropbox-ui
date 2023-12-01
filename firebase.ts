import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6B3_KKu-qGks_f1A1CdUSzBMMPBfx1gI",
    authDomain: "dropbox-690bc.firebaseapp.com",
    projectId: "dropbox-690bc",
    storageBucket: "dropbox-690bc.appspot.com",
    messagingSenderId: "86974605084",
    appId: "1:86974605084:web:c0b64d41396dfa4fa7bcd9"
  };

  // singleton pattern initialized the application once

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const storage  = getStorage(app);

  export { db, storage};