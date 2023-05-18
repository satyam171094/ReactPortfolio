
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtAqoX4lAmQbrSJ7xdfQNQoohS5OmwRio",
  authDomain: "react-portfolio-satyam.firebaseapp.com",
  projectId: "react-portfolio-satyam",
  storageBucket: "react-portfolio-satyam.appspot.com",
  messagingSenderId: "530879757332",
  appId: "1:530879757332:web:63d6cd27ef66cd39ccbb01"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

