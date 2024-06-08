// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qknOfg3E3zWAauF0IGq5IqpF6wg6Do0",
  authDomain: "beshoppy2002.firebaseapp.com",
  projectId: "beshoppy2002",
  storageBucket: "beshoppy2002.appspot.com",
  messagingSenderId: "209427268699",
  appId: "1:209427268699:web:f9fffac98ac7b5c7ceab7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb=getFirestore(app);
const auth=getAuth(app);

export{fireDb,auth}