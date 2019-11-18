const regEmail = document.getElementById('regEmail');
const admin = document.getElementById('admin');
const nonadmin = document.getElementById('nonadmin');
const name = document.getElementById('name');
const regPassword = document.getElementById('regPassword');
const btnSignUp = document.getElementById('btnSignUp');
const regForm = document.querySelector('#form2');
const regName = document.getElementById('name');
const form = document.getElementById('f');
const auth = firebase.auth();
const db = firebase.firestore();


//---------------------------------------------------------------------------Registration---------------------------------------------------------------------------------------------------

function registerFunction() {
    //Validation
    var mail = document.forms["f"]["regEmail"].value;
    var username = document.forms["f"]["name"].value;
    var password = document.forms["f"]["regPassword"].value;
    if (username == "" || mail == "" || regEmail == "") {
        alert("You forgot to fill in a field.");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    const email = regEmail.value;
    const pass = regPassword.value;
    const name = regName.value;
    const auth = firebase.auth();
    if (admin.checked) {
        adminval = admin.value;
        sessionStorage.setItem("admin", "true");
    } else {
        adminval = nonadmin.value;
        sessionStorage.setItem("admin", "false");
    }
    //Create user in Firebase Auth and in the users collection.
    auth.createUserWithEmailAndPassword(email, pass);

    // auth.createUserWithEmailAndPassword(email, pass).catch(e => alert(e.message));
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection('users').doc(user.uid).set({
                email: email,
                uid: user.uid,
                admin: adminval,
                name: name
                //If user is admin or not, send to different pages.
            }).then(() => {
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("name", name);
                delete user;
                if (user && admin.checked) {
                    window.location.href = "adminpanel.html";
                } else if (user && nonadmin.checked) {
                    window.location.href = "tablePage.html";

                }
            });
} else {
            console.log("No user!");
        }

    });

}

