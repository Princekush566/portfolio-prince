import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD13aJOv3Bixaih2hiYnNQ6_fmoJfPOoI",
    authDomain: "react-app-eba41.firebaseapp.com",
    projectId: "react-app-eba41",
    storageBucket: "react-app-eba41.appspot.com",
    messagingSenderId: "808133380144",
    
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };