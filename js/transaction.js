const cafetransactionlist = document.querySelector('#cafe-transaction-list');
var selectedID;

//get real time database, if changes made, refresh automatically
db.collection('Transactions').orderBy("date").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderDatabase(change.doc);
        } else if (change.type == 'removed') {
            let tr = cafetransactionlist.querySelector('[data-id=' + change.doc.id + ']');
            cafetransactionlist.removeChild(tr);
        }
    })
    //debugging purpose
    console.log("changes made")

});

// create element renderDatabase
function renderDatabase(doc) {
    let tr = document.createElement('tr');
    let amount = document.createElement('td');
    let date = document.createElement('td');
    let server = document.createElement('td');
    let item = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    amount.textContent = doc.data().amount;
    date.textContent = doc.data().date;
    server.textContent = doc.data().server;
    item.textContent = doc.data().item;

    tr.appendChild(amount);
    tr.appendChild(item);
    tr.appendChild(date);
    tr.appendChild(server);
    cafetransactionlist.appendChild(tr);
}
