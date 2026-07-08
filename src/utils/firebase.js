// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2wyXvId3pl0iBFjm3qeMGQGiGrvSvlaU",
  authDomain: "netmirrorgpt-f70bf.firebaseapp.com",
  projectId: "netmirrorgpt-f70bf",
  storageBucket: "netmirrorgpt-f70bf.firebasestorage.app",
  messagingSenderId: "706077546155",
  appId: "1:706077546155:web:6e6b818dcfa4fbdcaa09ee",
  measurementId: "G-H6FMEH3Z00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
