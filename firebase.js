import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDYadp2GBINzJxcx9wbjmrxy1mENrGnOgw",
  authDomain: "inventory-management-app-6eb26.firebaseapp.com",
  projectId: "inventory-management-app-6eb26",
  storageBucket: "inventory-management-app-6eb26.appspot.com",
  messagingSenderId: "10386615479",
  appId: "1:10386615479:web:a7247237451a6759047132",
  measurementId: "G-3KTY77X7TP",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
