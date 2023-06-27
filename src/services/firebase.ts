import firebase from "firebase/compat/app";
import { Auth, getAuth } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_STORAGE_BUCKET,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

let db;
let auth: Auth;
try {
  const app = firebase.initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
} catch (error) {
  console.error("Error while initializing firebase app: ", error);
}

export { auth };
export default db;
