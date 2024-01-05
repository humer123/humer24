
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1wFutN5AARjq8BdLjx_yUMBa9XX9i-4Y",
  authDomain: "todoapp-57c7f.firebaseapp.com",
  projectId: "todoapp-57c7f",
  storageBucket: "todoapp-57c7f.appspot.com",
  messagingSenderId: "246729679835",
  appId: "1:246729679835:web:22b114f4218a937512fdfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
