import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBgMuMqsQsHCnmGdp5YgzdbmPybCLmkeIU",
    authDomain: "react-getting-started-7b9f6.firebaseapp.com",
    databaseURL: "https://react-getting-started-7b9f6-default-rtdb.firebaseio.com",                 
    projectId: "react-getting-started-7b9f6",
    storageBucket: "react-getting-started-7b9f6.appspot.com",
    messagingSenderId: "801125783618",
    appId: "1:801125783618:web:cf8441be460950f582b5db"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;