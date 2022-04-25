//Calculadora de edad en días

var calcuedad = () => {
    var edad = prompt();
    var calculo = edad * 365;
    console.log("usted tiene aproximadamente " +calculo+ " días de vida.");
}

/*el calculo anterior lo tomé prestado de colegas, porque no supe cómo usar bien el prompt. 
A continuación viene la lógica de mi calculo.*/

var edad = 31;
var calculo = edad * 365;
console.log("usted tiene aproximadamente " +calculo+ " días de vida.");

//calculadora de snacks

var calcusnack = () => {
var edad = prompt("Indica tu edad actual");
var edadmax = prompt("¿hasta qué edad te gustaría vivir?");
var snacks = prompt("Indica tu snack favorito :D");
var totalsnack = (edadmax - edad) * 365;
var resultado = totalsnack * 2;

alert("En lo que te queda de vida, necesitarás " +resultado+ +snacks+ " ." );
alert("Como tu snack favorito vale $250, gastarás aprox. $" +resultado * 250+ " en tu vida.");

}
