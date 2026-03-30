// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkNjj6z78KWN-_7EGYXd5fS_BS3Y4cTvw",
  authDomain: "gaeul-yutong.firebaseapp.com",
  projectId: "gaeul-yutong",
  storageBucket: "gaeul-yutong.firebasestorage.app",
  messagingSenderId: "1009832156061",
  appId: "1:1009832156061:web:b3788fff68e87c985eed74",
  measurementId: "G-T5WSM70XGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
