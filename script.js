import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getDatabase,ref,set,onValue,runTransaction,remove, push, onChildAdded,  onChildRemoved, } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";
    // Import the functions you need from the SDKs you need

    //import "firebase/compat/database";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDypaZOsPuLmqX39O4LBg0RTeUI7vs0UKk",
        authDomain: "fe25-vc.firebaseapp.com",
        databaseURL:
            "https://fe25-vc-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "fe25-vc",
        storageBucket: "fe25-vc.firebasestorage.app",
        messagingSenderId: "281274460284",
        appId: "1:281274460284:web:406859a497e65fdc3f01f9",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const db =  getDatabase(app);       
    console.log(db);
    
 writeUserData("Alrik")
 
function writeUserData(userId) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: userId,
  });
}


const starCountRef = ref(db, 'users/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});