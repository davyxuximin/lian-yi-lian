// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC-syHGrXWQ9jOp9Q2R97565gkPhBMZ94",
  authDomain: "lian-yi-lian.firebaseapp.com",
  projectId: "lian-yi-lian",
  storageBucket: "lian-yi-lian.firebasestorage.app",
  messagingSenderId: "158660735477",
  appId: "1:158660735477:web:79ae88cd964c8ba306f0bc",
  measurementId: "G-F9GMEE5VGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app);

const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };