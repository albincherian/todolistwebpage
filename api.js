function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState==4&&this.status==200) {
        var response= JSON.parse(this.responseText);
        var checkboxes= "";
        var row="";
        var table="";
        for ( var i=0;i<response.length; i++) 
        {
            if(response[i].completed==true){
             row +="<br>"+'<input type="checkbox" class="check" checked disabled>'+(response[i].title)+"<br>";
           }
           else{
            row +="<br>"+'<input type="checkbox" class="checks">'+(response[i].title)+"<br>";
            
           }
               
        document.getElementById("todo").innerHTML=row;
        
          }  ;
        }
      };
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
}


var count=0;
function counter()
{
    count=$(".checks:checked").length;
    const promise=new Promise((resolve,reject) =>{
    if(count>=5)
    {
      resolve(" Congrats. 5 Tasks have been Successfully Completed");
   }
   
});
   promise.then(alert).catch();
}


