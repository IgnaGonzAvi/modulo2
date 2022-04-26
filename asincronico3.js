//FizzBuzz costó pero se pudo
var i=1;

console.log("Jueguito FizzBuzz")

while(i<=100){
    if(i%15==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
    i++;
} 


//Piedra papel y tijera

var piedrapapeltijera=()=>{

var rescompu= Math.max(1,2,3);

var respuesta= prompt("Por favor, elige una opción: 1 es piedra, 2 es papel y 3 es tijera");

var respcompu=Math.random(1,2,3);
if(rescompu==1 && respuesta==1,3){
    alert("Perdiste");
}else if(rescompu==2 && respuesta==2,3){
    alert("Perdiste");
}else if(rescompu==3 && respuesta==1,3){
    alert("Perdiste");
}else{
    alert("Ganaste!");
}
}
