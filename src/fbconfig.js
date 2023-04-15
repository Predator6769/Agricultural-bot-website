// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-9L0mwgUnRbgsMX_25JIX8n0RTG6PJNk",
  authDomain: "agricultural-bot-c0e39.firebaseapp.com",
  databaseURL: "https://agricultural-bot-c0e39-default-rtdb.firebaseio.com",
  projectId: "agricultural-bot-c0e39",
  storageBucket: "agricultural-bot-c0e39.appspot.com",
  messagingSenderId: "176248744679",
  appId: "1:176248744679:web:eead8671a9b4d8dcf95042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fb = getDatabase(app)
export default fb 