import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwifFCqA2HpY30BOgsf0pH4aqtYy74V1Q",
    authDomain: "college-quora-28d4e.firebaseapp.com",
    projectId: "college-quora-28d4e",
    storageBucket: "college-quora-28d4e.appspot.com",
    messagingSenderId: "735188043935",
    appId: "1:735188043935:web:73979e28193e5a6873baaa",
    measurementId: "G-RE12TG52HK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
 
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebase.firestore()


  export { auth, provider}
  export default db  

