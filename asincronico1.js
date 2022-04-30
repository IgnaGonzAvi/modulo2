
function aniosADias(){
 
    var años = parseInt(document.getElementById("edad").value);
    var dias = años * 365;

    return "Tienes " + años + " años, lo cual se traduce a " + dias + " días de vida.";

}

function snackFavorito(){
    var snackFav = (document.getElementById("snack").value);
    var cantidad = parseInt(document.getElementById("cantSnacks").value);
    var años = 31;
    var superEdad = 70;
    var tiempoDeVida = superEdad - años;
    var dias = tiempoDeVida * 365;
    var cantidadTotal = dias * cantidad;

    return "Necesitarás " + cantidadTotal + " " + snackFav +  " para que te alcancen hasta los "+ superEdad + " años. Y si cada uno vale $500, gastarás en total de tu vida $" + (cantidadTotal * 500);
    
    

}