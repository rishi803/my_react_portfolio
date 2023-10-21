import Firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxEypPqkeouA02MdOi1qVBjLwsh7jGosA",
  authDomain: "my-react-contact.firebaseapp.com",
  databaseURL: "https://my-react-contact-default-rtdb.firebaseio.com",
  projectId: "my-react-contact",
  storageBucket: "my-react-contact.appspot.com",
  messagingSenderId: "134409105034",
  appId: "1:134409105034:web:1e321bf26d82fc56944773"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
export default Firebase;
