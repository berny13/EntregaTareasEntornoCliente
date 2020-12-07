function guardar(){
   
    var _nom = document.getElementById("nomb").value;
    var _cat = document.getElementById("cat").value;
    
    

    var fila="<tr><td>"+_nom+"</td><td>"+_cat+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
	document.getElementById("tablita").appendChild(btn);

	var _cat = document.getElementsById("precio").value; 

for (var i = 1; i <= list.length; i++) { 
	list[i].innerHTML = i;
 }
}
