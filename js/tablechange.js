const cafetablelist = document.querySelector('#cafe-table-list');
const form = document.querySelector('#add-cafe-pos');
var Modal_Edit = document.getElementById('editmodalform');
var Edit_Form = document.querySelector('#edit-cafe-pos');
var btnclose = document.getElementsByClassName('close');
var selectedID;

//get real time database, if changes made, refresh automatically
db.collection('Table').orderBy("id").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderDatabase(change.doc);
        } else if (change.type == 'removed') {
            let tr = cafetablelist.querySelector('[data-id=' + change.doc.id + ']');
            cafetablelist.removeChild(tr);
        }
    })
    //debugging purpose
    console.log("changes made")

});

// create element renderDatabase
function renderDatabase(doc){
let tr = document.createElement('tr');
let tablenumber = document.createElement('td');
let tabledesc = document.createElement('td');
    let tablestatus = document.createElement('td');
    var btnEdit = document.createElement('button');
    btnEdit.innerHTML = "Edit";
    btnEdit.className = "btn btn-default btn-rounded mb-4";
    var btnRemove = document.createElement('button');
    btnRemove.innerHTML = "Delete";
    btnRemove.className = "btn btn-default btn-rounded mb-4";

tr.setAttribute('data-id', doc.id);
tablenumber.textContent = doc.data().id;
tabledesc.textContent = doc.data().customer_info;
tablestatus.textContent = doc.data().status;

tr.appendChild(tablenumber);
tr.appendChild(tabledesc);
    tr.appendChild(tablestatus);
    tr.appendChild(btnEdit);
    tr.appendChild(btnRemove);

    cafetablelist.appendChild(tr);
    btnEdit.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        console.log("heres your id that you selected: " + id);
        selectedID = id;
        //debugging purpose
        console.log(selectedID);
        Modal_Edit.style.display = "block";
        console.log("form has been summoned");

        btnclose.onclick = function (event) {
            if (event.target == Modal_Edit) {
                Modal_Edit.style.display = "none";
                console.log("ive close it");
            }
        }

        window.onclick = function (event) {
            if (event.target == Modal_Edit) {
                Modal_Edit.style.display = "none";
                console.log("ive nto close it");
            }
        }
    })




    btnRemove.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        console.log("heres your id that you selected: " + id);
        db.collection('Table').doc(id).delete();
        alert("You had sucessfully delete the item from system! Your table will now be updated!");
    })

}
/* Multiple
db.collection('Table').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderDatabase(doc);
        console.log(doc.data())
    })
}) */

//saving data
form.addEventListener('submit', (e) => {
    console.log("testing?")
    e.preventDefault();
    db.collection('Table').add({
        id: form.tablenumber.value,
        customer_info: form.tabledesc.value,
        status: form.tablestatus.value
    })
})

//edit data
Edit_Form.addEventListener('submit', (e) => {
    e.preventDefault();
    //debugging purpose
    console.log("you edit the item!");
    //store field values to a new empty string.

    db.collection('Table').doc(selectedID).update({

        food_name: Edit_Form.tablenumber.value,
        food_desc: Edit_Form.tabledesc.value,
        food_price: Edit_Form.tablestatus.value
    })

});