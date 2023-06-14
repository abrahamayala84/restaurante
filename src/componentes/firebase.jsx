
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmWy87_hQKzdpsaupE_QVPoWMfm9YsY_M",
  authDomain: "aaaaa-d6657.firebaseapp.com",
  projectId: "aaaaa-d6657",
  storageBucket: "aaaaa-d6657.appspot.com",
  messagingSenderId: "599417595528",
  appId: "1:599417595528:web:39d5e05640742f441da13d",
  measurementId: "G-DKF7LNZ9ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)