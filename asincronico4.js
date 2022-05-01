// contar de a tanto en tanto

function contarDeA_n(contar_de_a,contar_hasta){
let numero = 1;
console.log(numero)

    while(contar_hasta<=100){
        console.log(contar_de_a * numero);
        numero++;
        if(numero===contar_hasta){
            break;
        }
    }
  return numero;

}

contarDeA_n(2,10);





//FizzBuzz2 La venganza del FizzBuzz


let numeroMax = 100;
let num = 1;
let fizz_num = (num%17==0);
let buzz_num = (num%19==0);
function fizzBuzz2(palabra1,palabra2){

    while(num<=numeroMax){
    if(num%15==0){
        console.log(palabra1 + palabra2 + ", ");
    }else if(num%3==0){
        console.log(palabra1 + ", ");
    }else if(num%5==0){
        console.log(palabra2 + ", ");
    }else if(num%17==0){
        console.log("fizz_num, ");
    }else if(num%19==0){
        console.log("buzz_num, ")
    }else{
        console.log(num + ",");   
    }
    num++;
}
}

fizzBuzz2("fling","flung");













