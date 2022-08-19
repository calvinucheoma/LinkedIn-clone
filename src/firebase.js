import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBW7qi_0qiIs-gtGUNWUFVZUNiw5_fWc0g",
  authDomain: "chuks-linkedin-clone.firebaseapp.com",
  projectId: "chuks-linkedin-clone",
  storageBucket: "chuks-linkedin-clone.appspot.com",
  messagingSenderId: "556503267583",
  appId: "1:556503267583:web:6e2326c1e9804a3e8ef4ca"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {db, auth};