// Initialize Firebase
const config = {
    apiKey: "AIzaSyCyZvwuBhfvR4XUNHGccdb-kGiRwqsT37k",
    authDomain: "cafe-pos-30bd9.firebaseapp.com",
    databaseURL: "https://cafe-pos-30bd9.firebaseio.com",
    projectId: "cafe-pos-30bd9",
    storageBucket: "cafe-pos-30bd9.appspot.com",
    messagingSenderId: "553867278387",
    appId: "1:553867278387:web:e2b1b70109c686fb8fcb46",
    measurementId: "G-7JD8TBC4YR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
