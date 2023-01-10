import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider,  setPersistence, browserLocalPersistence} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC0uSMvvmB5EC3l7kXWDlZrdFdKl6NBTKg",
  authDomain: "mobileapp-88de9.firebaseapp.com",
  databaseURL: "https://mobileapp-88de9-default-rtdb.firebaseio.com",
  projectId: "mobileapp-88de9",
  storageBucket: "mobileapp-88de9.appspot.com",
  messagingSenderId: "39360114189",
  appId: "1:39360114189:web:f308bbb49cff0e17152f44",
  measurementId: "G-2HEMEQ2VFN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);
// google auth
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      console.log(result.user)
      console.log(name, email, profilePic)
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithFacebook = () => {
  
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      console.log(result.user)
      console.log(name, email, profilePic)
    })
    .catch((error) => {
      console.log(error);
    });
};
setPersistence(auth, browserLocalPersistence);