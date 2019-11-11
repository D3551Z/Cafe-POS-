
//---------------------------------------------------------------------------Login---------------------------------------------------------------------------------------------------
function loginUser() {
    const logEmail = document.getElementById('logEmail');
    const logPassword = document.getElementById('logPassword');
    const auth = firebase.auth();
    const db = firebase.firestore();
    const functions = firebase.functions();
    const email = logEmail.value;
    const pass = logPassword.value;
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message));
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection('users').doc(user.uid).get().then(doc => {
                if (doc.data().admin == "true") {
                    // Store
                    sessionStorage.setItem("email", email);
                    window.location.href = "adminpanel.html";
                } else {
                    sessionStorage.setItem("email", email);
                    window.location.href = "staffpanel.html";
                }
            });

        }
    });

}
function userInfo() {
    console.log("inside function");
    if (sessionStorage.getItem("email") != null) {
        alert(" User with email: " + sessionStorage.getItem("email") + " logged in");
    } else {
        alert("No user signed in");
    }
}


function userLogout() {
    firebase.auth().signOut();
    alert(" You have logged out.");
    sessionStorage.clear("email");
    window.location.href = "loginpage.html";

}




