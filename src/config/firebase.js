import { initializeApp } from "firebase/app";
import {collection, getFirestore, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA2b7BW0k0J2rN9rYwrlq99CBZf2mvN3Rc",
  authDomain: "rio-ai-chat-bot.firebaseapp.com",
  projectId: "rio-ai-chat-bot",
  storageBucket: "rio-ai-chat-bot.appspot.com",
  messagingSenderId: "387863839446",
  appId: "1:387863839446:web:848806a93469307306bf77",
  measurementId: "G-8EDBP7VP1M"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const userCollectionRef = collection(db, "users");
  export default app;