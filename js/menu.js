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

function renderTable(doc){
    //debugging purpose
    console.log("you just run me");
    
    
    let tr = document.createElement('tr');
    tr.className="text-center"
    
    let Staff_id = document.createElement('td');
    let Staff_Name = document.createElement('td');
    let Staff_Gender = document.createElement('td');
    let Staff_PNumb = document.createElement('td');
    let Staff_Pos = document.createElement('td');
    let Staff_Sly = document.createElement('td');
    
    //creating button
    
    var btnEdit=document.createElement("BUTTON");
    btnEdit.innerHTML="Edit";
    btnEdit.className="btn btn-outline-info btn-xs";
    
    
    
    var btnDelete=document.createElement("BUTTON");
    btnDelete.innerHTML="Delete"
    btnDelete.className="btn btn-outline-danger btn-xs"
    
    

    tr.setAttribute('data-id', doc.id);
    Staff_id.textContent = doc.data().Staff_ID;
    Staff_Name.textContent=doc.data().Staff_Name;
    Staff_Gender.textContent=doc.data().Staff_Gender;
    Staff_PNumb.textContent=doc.data().Staff_PNum;
    Staff_Pos.textContent=doc.data().Staff_Position;
    Staff_Sly.textContent=doc.data().Staff_Salary;
    
    tr.appendChild(Staff_id);
    tr.appendChild(Staff_Name);
    tr.appendChild(Staff_Gender);
    tr.appendChild(Staff_PNumb);
    tr.appendChild(Staff_Pos);
    tr.appendChild(Staff_Sly);
    tr.appendChild(btnEdit);
    tr.appendChild(btnDelete);

    
    StaffList.append(tr); 
    
     btnEdit.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        console.log("heres your id that you selected: "+ id);
         selectedID=id;
         //debugging purpose
         console.log(selectedID);
         modal_Edit.style.display="block";
    })
    
 

    
    btnDelete.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        console.log("heres your id that you selected: "+ id);
        db.collection('Staffs').doc(id).delete();
           alert("You had sucessfully delete the item from system! Your table will now be updated!");
    })
    


        
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