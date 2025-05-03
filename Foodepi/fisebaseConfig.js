// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBub0ZKESOgXvDb1706QIm5gkO0LumFQMA",
  authDomain: "foodepi.firebaseapp.com",
  projectId: "foodepi",
  storageBucket: "foodepi.firebasestorage.app",
  messagingSenderId: "988243049664",
  appId: "1:988243049664:web:a7274ead562a64976b0125",
  measurementId: "G-C4SH0SD5SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);


export { auth };