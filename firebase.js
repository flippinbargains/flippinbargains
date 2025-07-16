// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCn2yB_oVrb-st1uosqN8YbjdzGp2EF--o",
  authDomain: "flippinbargains-e8a8a.firebaseapp.com",
  projectId: "flippinbargains-e8a8a",
  storageBucket: "flippinbargains-e8a8a.appspot.com",
  messagingSenderId: "920267203424",
  appId: "1:920267203424:web:d703d051131d8e2d9bb405",
  measurementId: "G-03GDHRHYYC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
