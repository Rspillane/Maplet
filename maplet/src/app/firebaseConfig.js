import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtWTSgv0MRXVq5GhRqOSP8hc2onKGqvWo",
  authDomain: "maplet-2b830.firebaseapp.com",
  projectId: "maplet-2b830",
  storageBucket: "maplet-2b830.appspot.com",
  messagingSenderId: "1030201474660",
  appId: "1:1030201474660:web:1ec67d03ef6a78986f6971",
  measurementId: "G-DMSLVHN1BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Get a reference to the storage service
const storage = getStorage(app);

export { storage };