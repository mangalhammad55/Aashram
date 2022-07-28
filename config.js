import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE4S3HMg2opObDAOHHcKkaC2cTpHRgM9o",
  authDomain: "aashram-auth.firebaseapp.com",
  projectId: "aashram-auth",
  storageBucket: "aashram-auth.appspot.com",
  messagingSenderId: "291036330771",
  appId: "1:291036330771:web:cbda2612df841a4d6a38e6",
  measurementId: "G-QC4GELG90W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
