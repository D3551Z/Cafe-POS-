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



const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');


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
    console.log("test");
    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise
        .catch(e => console.log(e.message));

});
// Log out
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    console.log(" user logged out");
});

$(document).ready(function () {
    $("#buttoner").click(function () {
        $("#box form").toggle("slow");
        if (user) {
            // User is signed in.
            console.log("signed in");
        } else {
            // No user is signed in.
        }
        return false;
    });
});
//Pop up box for login
$(document).ready(function () {

    $("#buttoner1").click(function () {
        $("#box ").toggle("slow");
        return false;
    });


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


//---------------------------------------------------------------------------Table Management---------------------------------------------------------------------------------------------------
button1.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hej");

    db.collection('Table').doc("Table 1").update({

        status: rank1.value,
        customer_info: cus1.value

    });
});

button2.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("tabell2");

    db.collection('Table').doc("Table 2").update({

        status: rank2.value,
        customer_info: cus2.value

    });
});

button3.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("tabell3");

    db.collection('Table').doc("Table 3").update({

        status: rank3.value,
        customer_info: cus3.value

    });
});

button4.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("tabell4");

    db.collection('Table').doc("Table 4").update({

        status: rank4.value,
        customer_info: cus4.value

    });
});

button5.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("tabell5");

    db.collection('Table').doc("Table 5").update({

        status: rank5.value,
        customer_info: cus5.value

    });
});

/* for (var i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', (e) => {

        e.preventDefault();

        for (var i = 0; i < tableID.length; i++) {
            var tableNumber = tableID[i].textContent
            console.log(tableID[i].textContent);

            var docRef = db.collection("Table").doc('Table 2');
            console.log(docRef + " yoooo");
            docRef.get().then(function (doc) {
                console.log("inside function" + docRef.get());
                if (doc = "Table 1") {
                    console.log(doc + "+ woow");
                    console.log(tableNumber + " is the table ID");
                    db.collection('Table').doc("Table 1").update({
                       // status: form.rank1.value,
                        status: rank1.value,
                       // customer_info: form.customer_info.value
                        customer_info: cust_info.value
                    });             
                    console.log("No such document!");
                }
            })

        }
    });
} */
//     db.collection('Table').where('id', '==', "Table 1").get(); {

//Change select-color
/*   function onSelectChange() {
       if (document.getElementsByClassName('rank').value == unoccupied) {
         document.getElementsByClassName('rank').className = 'myRed';
       } else {
           document.getElementById('mySelect').className = 'myBlack'
       }   
   }
}); */

function CloneForm(formName) {
    var tableCount = 2;
    document.getElementById('table1').innerHTML++;
    tableCount++;


    var formCount = document.forms.length;
    var oForm = document.forms[formName];
    var clone = oForm.cloneNode(true);
    clone.name += "_" + formCount;
    document.body.appendChild(clone);

}






