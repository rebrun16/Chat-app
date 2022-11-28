import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyC5HWoN6CB30_Ru3iJcl_cJz7RMlhADj0E",
//   authDomain: "chat-8dd29.firebaseapp.com",
//   projectId: "chat-8dd29",
//   storageBucket: "chat-8dd29.appspot.com",
//   messagingSenderId: "431360039796",
//   appId: "1:431360039796:web:839de6d26cbc9c8c282a21"
// };
// AIzaSyA49qcrppc-M0cGfeQ3XNGOoyaEOqEFC9c
const firebaseConfig = {
  apiKey: "AIzaSyC5HWoN6CB30_Ru3iJcl_cJz7RMlhADj0E",
  authDomain: "chat-ab746.firebaseapp.com",
  projectId: "chat-ab746",
  storageBucket: "chat-ab746.appspot.com",
  messagingSenderId: "901216368405",
  appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
};
//2
// const firebaseConfig = {
//   apiKey: "AIzaSyBoIUVQrMO__akkwLEMHsTeGs0pUxtQE_Q",
//   authDomain: "chat2-77d99.firebaseapp.com",
//   projectId: "chat2-77d99",
//   storageBucket: "chat2-77d99.appspot.com",
//   messagingSenderId: "757987236994",
//   appId: "1:757987236994:web:c01ccfbaccf85e5352e89b"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);