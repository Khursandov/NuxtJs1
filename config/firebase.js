import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDdRkr_DaWfu63mWlt_FQG6ydr-Mw8f3Oo",
    authDomain: "nuxtjs-b84fd.firebaseapp.com",
    databaseURL: "https://nuxtjs-b84fd.firebaseio.com",
    projectId: "nuxtjs-b84fd",
    storageBucket: "",
    messagingSenderId: "522282682288",
    appId: "1:522282682288:web:d4a316106aab0f2f"
}
!firebase.apps.length ? firebase.initializeApp(config) : '';
const db = firebase.database()
export default  db 