const cafemenulist = document.querySelector('#cafe-menu-list');
const form = document.querySelector('#add-cafe-pos');
var Modal_Edit=document.getElementById('editmodalform');
var Edit_Form = document.querySelector('#edit-cafe-pos');
var btnclose = document.getElementsByClassName('close');
var selectedID;

//get real time database, if changes made, refresh automatically
db.collection('Menu').orderBy("food_price").onSnapshot(snapshot =>{
    let changes=snapshot.docChanges();
    changes.forEach(change=>{
        if(change.type=='added'){
            renderMenu(change.doc);
        }else if (change.type=='removed'){
            let tr = cafemenulist.querySelector('[data-id=' + change.doc.id +']');
            cafemenulist.removeChild(tr);
        }
    })
    //debugging purpose
    console.log("changes made")
            
});

// create element renderMenu
function renderMenu(doc){
let tr = document.createElement('tr');
let foodmenu = document.createElement('td');
let fooddesc = document.createElement('td');
let foodprice = document.createElement('td');
var btnEdit = document.createElement('button');
btnEdit.innerHTML="Edit";
btnEdit.className="btn btn-default btn-rounded mb-4";
var btnRemove = document.createElement('button');
btnRemove.innerHTML="Delete";
btnRemove.className="btn btn-default btn-rounded mb-4";

tr.setAttribute('data-id', doc.id);
foodmenu.textContent = doc.data().food_name;
fooddesc.textContent = doc.data().food_desc;
foodprice.textContent = doc.data().food_price;

tr.appendChild(foodmenu);
tr.appendChild(fooddesc);
tr.appendChild(foodprice);

cafemenulist.appendChild(tr);

}

db.collection('Menu').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderMenu(doc);
        console.log(doc.data())
    })
})

//saving data
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('Menu').add({
        food_name: form.menutitle.value,
        food_desc: form.menudesc.value,
        food_price: form.menuprice.value
    })
})
