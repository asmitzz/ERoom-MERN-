import firebase from 'firebase/app';
import 'firebase/firebase-auth';

const firebaseConfig = {
    apiKey: "AIzaSyAeyxivWODRkED2fpkJGni4O_jydgLQmqo",
    authDomain: "e-room-b8167.firebaseapp.com",
    projectId: "e-room-b8167",
    storageBucket: "e-room-b8167.appspot.com",
    messagingSenderId: "144248512005",
    appId: "1:144248512005:web:02ab13d8742950b7d0466c",
    measurementId: "G-PY5E56KH37"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;