
//Cambiando un título por un párrafo

   var agregarTitulo = document.getElementById("title").value;
   document.getElementById("title").innerHTML = "<p>Este es el nuevo título</p>";
   

//Creando un nuevo párrafo con appendChild   
   var nuevoParrafo= document.createElement("p");
   nuevoParrafo.textContent = "Aunque no lo creas, este párrafo es nuevo."
   document.body.appendChild(nuevoParrafo);
   nuevoParrafo.classList.add("nuevoParr");

