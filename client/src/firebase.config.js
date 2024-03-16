import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyACWzMo7NDzdXtFZbj59YnUYnz51AKODXw",
  authDomain: "mernblogapp-887b1.firebaseapp.com",
  projectId: "mernblogapp-887b1",
  storageBucket: "mernblogapp-887b1.appspot.com",
  messagingSenderId: "194552838945",
  appId: "1:194552838945:web:98352c0a7a2406bb659c60"
};

// Initialize Firebase
export  default initializeApp(firebaseConfig);