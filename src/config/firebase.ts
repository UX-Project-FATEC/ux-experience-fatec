import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYabx583oU3AfITR9bqkx4Bdsp4WxcRGg",
  authDomain: "ux-experience-fatec.firebaseapp.com",
  projectId: "ux-experience-fatec",
  storageBucket: "ux-experience-fatec.appspot.com",
  messagingSenderId: "274180324907",
  appId: "1:274180324907:web:b55dab1b7a84ac6d82746e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);