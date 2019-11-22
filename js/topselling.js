var chart;
var name;
var torder;
var total=[];
var myname=[];
var mydata=[];
db.collection('Order').orderBy("MenuTitle").get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{    
        name=doc.data().MenuTitle
        torder=doc.data().TotalOrder
        myname.push(name);
        mydata.push(torder);
        total.push({
            menuname:name,
            totalorder:torder
        })
    }) 
    //testing if the data store it into the array correctly

})
        //pie
function GenerateChart(){
        var ctxP = document.getElementById("myChart").getContext('2d');
        var myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: myname,
                datasets: [{
                    data: mydata,
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360","#800000","#800080","#008000","#ffff00","#0000ff","#008080"],
                
                }]
            },
            
            options: {
                responsive: true,
            }
        });
    }
    