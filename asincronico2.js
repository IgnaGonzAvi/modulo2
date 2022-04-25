//par o impar

var numerop = () =>{
var numing =("Ingresa un número:");
var resultado = numing % 2;


if(resultado == 0){
    alert("El número ingresado es par.")
}else{
    alert("El número ingresado es impar.")
}
}

//jubilación parte 1

var jubimuj = () =>{
    var edad =("Ingresa tu edad:");
    var sexo =("Escribe M si eres mujer o H si eres hombre");
    
    while(sexo == M){
    if(edad >= 60 && sexo == M){
        alert("Ya puedes jubilar, buen descanso!");
    }else{
        alert("Aun no tienes edad para jubilar")
    }
}
}
//parte 2 
var jubilacion = () =>{
    var edad =("Ingresa tu edad:");
    var sexo =("Escribe M si te identificas mujer o H si te identificas hombre");
    
    if(edad >= 60 && sexo == M){
        alert("Ya puedes jubilar, buen descanso!");
    }else if(edad >= 65 && sexo == H){
        alert("Ya puedes jubilar, buen descanso!"); 
    }else{ 
        alert("Aun no estás en edad de jubilar, mucho ánimo!");
    }
}

//extra bonus

var jubilacionextra = () =>{
    var edadx =("Ingresa tu edad:");
    var sex =("Ingresa M si te identificas mujer o H si te identificas hombre"); 

    if(edadx >=60 && sex == M || edadx >=65 && sex == H){
        alert("Puedes jubilar, ten un buen descanso!");
    }else{
        alert("Aún no puedes jubilar, ánimo!");
    }
}

// prueba lógica en la consola
var edadx =60;
var sexm =1;
var sexh =0; 

if(edadx >=60 && sexm == 1 || edadx >=65 && sexh == 0){
    console.log("Puedes jubilar, ten un buen descanso!");
}else{
    console.log("Aún no puedes jubilar, ánimo!");
}
