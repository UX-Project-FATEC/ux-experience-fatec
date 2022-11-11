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
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);