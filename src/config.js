import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdBDpknAflX51yhVOML1NA07Dfb2nnbtI",
  authDomain: "workshopauth.firebaseapp.com",
  projectId: "workshopauth",
  storageBucket: "workshopauth.appspot.com",
  messagingSenderId: "495441756094",
  appId: "1:495441756094:web:85d58e4cb8e17e640203ef",
  measurementId: "G-YK2GPQS809",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
