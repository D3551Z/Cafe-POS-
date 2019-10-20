const cafemenulist = document.querySelector('#cafe-menu-list');
const form = document.querySelector('#add-cafe-pos')

// create element renderMenu
function renderMenu(doc){
let li = document.createElement('li');
let foodmenu = document.createElement('span');
let fooddesc = document.createElement('span');
let foodprice = document.createElement('span');

li.setAttribute('data-id', doc.id);
foodmenu.textContent = doc.data().foodmenu;
fooddesc.textContent = doc.data().fooddesc;
foodprice.textContent = doc.data().foodprice;

li.appendChild(foodmenu);
li.appendChild(fooddesc);
li.appendChild(foodprice);

cafemenulist.appendChild(li);
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