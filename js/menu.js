const cafemenulist = document.querySelector('#cafe-menu-list');
const form = document.querySelector('#add-cafe-pos')

// create element renderMenu
function renderMenu(doc){
let tr = document.createElement('tr');
let foodmenu = document.createElement('td');
let fooddesc = document.createElement('td');
let foodprice = document.createElement('td');

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