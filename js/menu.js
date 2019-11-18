const cafemenulist = document.querySelector('#cafe-menu-list');
const form = document.querySelector('#add-cafe-pos');
var Modal_Edit=document.getElementById('editmodalform');
var Edit_Form = document.querySelector('#edit-cafe-pos');
var btnclose = document.getElementById('close');
var Modal_title = document.getElementById('datab_title');
var Modal_desc = document.getElementById('datab_desc');
var Modal_price = document.getElementById('datab_price');
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
tr.appendChild(btnEdit);
tr.appendChild(btnRemove);

cafemenulist.appendChild(tr);

btnEdit.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    console.log("heres your id that you selected: "+ id);
     selectedID=id;
     //debugging purpose
     console.log(selectedID);
    Modal_Edit.style.display="block";
    console.log("form has been summoned");
    Modal_title.textContent = doc.data().food_name;
    Modal_desc.textContent = doc.data().food_desc;
    Modal_price.textContent = doc.data().food_price;

    btnclose.onclick = function(event) {
        if (event.target == btnclose) {
            Modal_Edit.style.display = "none";
            console.log("ive close it");  
        }
     }
    
     window.onclick = function(event) {
        if (event.target == Modal_Edit) {
            Modal_Edit.style.display = "none";
            console.log("ive nto close it");  
        }
      }
})




btnRemove.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    console.log("heres your id that you selected: "+ id);
    db.collection('Menu').doc(id).delete();
       alert("You had sucessfully delete the item from system! Your table will now be updated!");
})

}

/*db.collection('Menu').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderMenu(doc);
        console.log(doc.data())
    })
})*/

//saving data
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('Menu').add({
        food_name: form.menutitle.value,
        food_desc: form.menudesc.value,
        food_price: form.menuprice.value
    })
})

//edit data
Edit_Form.addEventListener('submit', (e) => {
    e.preventDefault();
    //debugging purpose
    console.log("you edit the item!");
    //store field values to a new empty string.
    
    db.collection('Menu').doc(selectedID).update({
       
        food_name: Edit_Form.menutitle.value,
        food_desc: Edit_Form.menudesc.value,
        food_price: Edit_Form.menuprice.value
    })
   
});

