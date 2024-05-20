import { initializeApp } from "firebase/app";
import {collection, getFirestore, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "rio-ai-chat-bot.firebaseapp.com",
  projectId: "rio-ai-chat-bot",
  storageBucket: "rio-ai-chat-bot.appspot.com",
  messagingSenderId: "387863839446",
  appId: "",
  measurementId: ""
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const userCollectionRef = collection(db, "users");
  export default app;
