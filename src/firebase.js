import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD13aJOv3Bixaih2hiYnNQ6_fmoJfPOoI",
    authDomain: "react-app-eba41.firebaseapp.com",
    projectId: "react-app-eba41",
    storageBucket: "react-app-eba41.appspot.com",
    messagingSenderId: "808133380144",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };