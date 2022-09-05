import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBx_y7LCWlwYCPa1bUqoNb_8sRi9JkcC4",
  authDomain: "aashram-auth-test1.firebaseapp.com",
  projectId: "aashram-auth-test1",
  storageBucket: "aashram-auth-test1.appspot.com",
  messagingSenderId: "404141153791",
  appId: "1:404141153791:web:fe31c788f5254b4c795bca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
