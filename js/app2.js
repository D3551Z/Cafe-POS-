(function () {

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
    
    firebase.initializeApp(config);

   

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    const auth = firebase.auth();
    const db = firebase.firestore();

   

    //Login
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        console.log(email + " logged in");
    });
    // Register 
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise
            .catch(e => console.log(e.message));

    });
    // Log out
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log(" user logged out");
    });
  

    // Checking if the user is logged in or not.
    function checkUser() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user logged in: ', user);
            } else {
                console.log('user logged out');
            }
        }
        )
    }

    checkUser();
    


}());