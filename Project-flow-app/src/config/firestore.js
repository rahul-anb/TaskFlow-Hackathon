import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlJ_ihtsgZL87lzDLY8qTu7Yi8iPnrVlg",
  authDomain: "chatroom-61685.firebaseapp.com",
  databaseURL: "https://chatroom-61685-default-rtdb.firebaseio.com",
  projectId: "chatroom-61685",
  storageBucket: "chatroom-61685.appspot.com",
  messagingSenderId: "116367324657",
  appId: "1:116367324657:web:c47dc040c29dd0a3140050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);