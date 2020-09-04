import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBxUw_uRSQmY7850hYkteP-an9tab7Nvo",
  authDomain: "oddam-w-dobre-rence.firebaseapp.com",
  databaseURL: "https://oddam-w-dobre-rence.firebaseio.com",
  projectId: "oddam-w-dobre-rence",
  storageBucket: "oddam-w-dobre-rence.appspot.com",
  messagingSenderId: "556314105207",
  appId: "1:556314105207:web:035b6b6036b6cb41d4bd72",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

export default app;
