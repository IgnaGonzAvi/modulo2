//par o impar

function numeroIncognito(){
    var numero = parseInt(document.getElementById("incognita").value);
    var resultado = numero % 2;


if(resultado == 0){
    alert("El número es par.")
}else{
    alert("El número es impar.")
}
return ("Porque el resto es " + resultado);
}

//jubilación parte 1


    let select = document.querySelector('select');
    let para = document.querySelector('p');
    
    select.addEventListener('change', mePuedoJubilar);
    
    
    function mePuedoJubilar() {
      let choice = select.value;
    
      switch (choice) {
        case 'mujerMayor':
          para.textContent = alert('Si cumples las condiciones para jubilar, buen descanso!');
          break;
        case 'mujerMenor':
          para.textContent = alert('No cumples las condiciones para jubilar');
          break;
        case 'hombreMayor':
          para.textContent = alert('Si cumples las condiciones para jubilar, buen descanso!');
          break;
        case 'hombreMenor':
          para.textContent = alert('No cumples las condiciones para jubilar');
          break;
        default:
          para.textContent = '';
      }
    }