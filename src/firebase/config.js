import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBTEj84M2Swrxmn8_fWS15vt2OljkRzSks",
  authDomain: "tsk-login-abaf1.firebaseapp.com",
  projectId: "tsk-login-abaf1",
  storageBucket: "tsk-login-abaf1.firebasestorage.app",
  messagingSenderId: "182917729663",
  appId: "1:182917729663:web:e76c75d421d3e887bb9e4a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
