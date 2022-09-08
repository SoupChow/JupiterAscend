import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDFfsGzITGNPkbIYx9IZ6yYEt5nZSalRvk",
    authDomain: "jupiterascendv1.firebaseapp.com",
    projectId: "jupiterascendv1",
    storageBucket: "jupiterascendv1.appspot.com",
    messagingSenderId: "900475822829",
    appId: "1:900475822829:web:86c18e34be3fb4163722e4"
  };

const app = initializeApp(firebaseConfig);
  
export const auth = getAuth(app);

export default app;