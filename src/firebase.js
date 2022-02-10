import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
//require("firebase/auth")

const app = firebase.initializeApp({
  apiKey: "AIzaSyBFxAwEQB38Zf63IidX6uxYmCHOf3ZcGPU",
  // process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "speedy-rent-login-development.firebaseapp.com",
  //process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://speedy-rent-login-development-default-rtdb.firebaseio.com/",
  //process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "speedy-rent-login-development",
  //process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "speedy-rent-login-development.appspot.com",
  //process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "313068529951",
  //process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:313068529951:web:81661dc0c2530a073e682a"
  //process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app