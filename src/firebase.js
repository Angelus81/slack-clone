import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKUb5A7pMIWYyb2u3Ho5Pvx_9OnhJDxYo",
  authDomain: "slack-clone-55062.firebaseapp.com",
  projectId: "slack-clone-55062",
  storageBucket: "slack-clone-55062.appspot.com",
  messagingSenderId: "144018841959",
  appId: "1:144018841959:web:6879de7ce99c5131a00fc2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
