import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIfFYQmhSR5d5IYRB7ModeB4fVzYKd40w",
  authDomain: "distraction-aware-learning.firebaseapp.com",
  projectId: "distraction-aware-learning",
  storageBucket: "distraction-aware-learning.appspot.com",
  messagingSenderId: "543454976939",
  appId: "1:543454976939:web:a417e84b6ae2eec64b10ee"
};

const app = initializeApp(firebaseConfig);

window.auth = getAuth(app);
window.db = getFirestore(app);


