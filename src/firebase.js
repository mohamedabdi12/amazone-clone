import firebase from "firebase";

const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyCeyOYhcQBgH7JnzTEkkbNuio5gLBUnYt0",
        authDomain: "clone-e12af.firebaseapp.com",
        databaseURL: "https://clone-e12af.firebaseio.com",
        projectId: "clone-e12af",
        storageBucket: "clone-e12af.appspot.com",
        messagingSenderId: "484907885648",
        appId: "1:484907885648:web:d7a39c0564df8b40285d55",
        measurementId: "G-NCYHR6JJ90"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { db, auth };