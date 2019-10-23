const regEmail = document.getElementById('regEmail');
const admin = document.getElementById('admin');
const nonadmin = document.getElementById('nonadmin');
const regPassword = document.getElementById('regPassword');
const logEmail = document.getElementById('logEmail');
const logPassword = document.getElementById('logPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const regForm = document.querySelector('#form2');
var adminval = "yo";
const auth = firebase.auth();
const db = firebase.firestore();
const form = document.querySelectorAll('.survey');
const tableID = document.getElementsByClassName("tableIDe");
const rank1 = document.getElementById('rank1');
const cus1 = document.getElementById('cus1');
const cus2 = document.getElementById('cus2');
const cus3 = document.getElementById('cus3');


//---------------------------------------------------------------------------Login and Registration---------------------------------------------------------------------------------------------------
btnLogin.addEventListener('click', e => {
    const email = logEmail.value;
    const pass = logPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    console.log(email + " logged in");
   
        $("#box form").toggle("slow");
});
// Register and connect it to Firestore
    btnSignUp.addEventListener('click', e => {
        const email = regEmail.value;
        const pass = regPassword.value;
        const auth = firebase.auth();

        if (admin.checked) {
            adminval = admin.value;
        } else {
            adminval = nonadmin.value;
        }

        $("#regbox form").toggle("slow");
        auth.createUserWithEmailAndPassword(email, pass);
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                db.collection('users').doc(user.uid).set({
                    email: email,
                    uid: user.uid,
                    admin: adminval
                });
                } else {
                        console.log("No user!");
            }
        });
    });

// Log out
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    console.log(" user logged out");
    $("#box form").toggle("slow");

});

$(document).ready(function () {
    $("#buttoner").click(function () {
        $("#box form").toggle("slow");
        if (user) {
            // User is signed in.
            console.log(user + "signed in");
          
        } else {
            // No user is signed in.
        }
        return false;
    });
});
$(document).ready(function () {
    $("#buttoner1").click(function () {
        console.log("clicking");
$("#regbox form").toggle("slow");
    });
});




