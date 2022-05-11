import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdYd5p3LeXynxSdSvOaZtLsqeHNMicUNU",
    authDomain: "badbank-c1e69.firebaseapp.com",
    projectId: "badbank-c1e69",
    storageBucket: "badbank-c1e69.appspot.com",
    messagingSenderId: "336683260282",
    appId: "1:336683260282:web:964943895ef497a2c6dec3",
    measurementId: "G-XP1T9063W1"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };