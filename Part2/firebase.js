import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkyfcer9-kh68v9WV1khe-BPPVr4ficZg",
  authDomain: "signalclone-32619.firebaseapp.com",
  projectId: "signalclone-32619",
  storageBucket: "signalclone-32619.appspot.com",
  messagingSenderId: "1071228368439",
  appId: "1:1071228368439:web:edbefb70156b80994d71b2",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
