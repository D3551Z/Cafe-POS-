$(document).ready(function () {

    $("#buttoner1").click(function () {
        $("#box ").toggle("slow");
        return false;
    });
});

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

function CloneForm() {
    document.getElementById('tablepage').appendChild(clone);
}

function DeleteForm() {
    clone.remove();
}
