// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOSyxjuwtOMcD10yXf-PYckZK7vLGB5dY",
    authDomain: "cafepos-3ff50.firebaseapp.com",
    databaseURL: "https://cafepos-3ff50.firebaseio.com",
    projectId: "cafepos-3ff50",
    storageBucket: "",
    messagingSenderId: "310157411962",
    appId: "1:310157411962:web:3875b6db38ced843e91dc3",
    measurementId: "G-9DW3SGTRYX"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let job = document.querySelector('#job').value;

    //send message values
    sendMessage(name, email, password, job);

    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
}

function sendMessage(name, email, password, bio, job, interest) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email: email,
        password: password,
        job: job,
    });
}

