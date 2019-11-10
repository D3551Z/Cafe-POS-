const admin = document.getElementById('admin');
const nonadmin = document.getElementById('nonadmin');
const logEmail = document.getElementById('logEmail');
const logPassword = document.getElementById('logPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const btnInfo = document.getElementById('btnInfo');
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

//---------------------------------------------------------------------------Login and Registration---------------------------------------------------------------------------------------------------
btnLogin.addEventListener('click', e => {
    const email = logEmail.value;
    const pass = logPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => alert(e.message));
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection('users').doc(user.uid).get().then(doc => {
                if (doc.data().admin == "true") {
                window.location.href = "adminpanel.html";
            } else {
                window.location.href = "tablePage.html";
                }          
        });
            
        }
    });

});

/*
btnInfo.addEventListener('click', e => {
    const email = logEmail.value;
    const name = regName.value;

    alert(name + " with email: " + email + " logged in");
    $("#box form").toggle("slow");

});

// Log out
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    alert(" You have logged out.");
    $("#box form").toggle("slow");

});
*/



