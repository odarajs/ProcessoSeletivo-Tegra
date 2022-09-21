let button = document.querySelector('#button');
let input = document.querySelector('#inputEscala');
let inputTemp = document.querySelector('#inputTemp');
let label = document.querySelector('label[for="inputTemp"]');

function calcular(tempInicial,escalaInicial,escalaFinal,textArea) {
    let escala = input.value;
    
    if (escala === 'C' || escala === 'c' || escala === 'F' || escala === 'f'){
         tempInicial = parseFloat(inputTemp.value);
        
        if (escala === 'C' || escala === 'c') {
            tempFinal = (tempInicial * 9/5) + 32;
            
            escalaInicial = 'Celsius';
            escalaFinal = 'Fahrenheit';
        } else if (escala === 'F' || escala === 'f') {
            tempFinal = (tempInicial - 32) * 5/9;
            
            escalaInicial = 'Fahrenheit';
            escalaFinal = 'Celsius';
        }
        
         textArea = document.querySelector('#result-total').innerHTML = `Você vai digitar a temperatura em qual escala (C/F)? | ${escala}<br>  Digite a temperatura em ${escalaInicial} ${tempInicial}\n Temperatura equivalente em ${escalaFinal}: ${tempFinal.toFixed(2)}\n\n`
    }
}

function verificarEscala() {
    if (input.value === 'C' || input.value === 'c'){
        label.innerHTML = 'Digite a temperatura em Celsius: ';
    } else if (input.value === 'F' || input.value === 'f') {
        label.innerHTML = 'Digite a temperatura em Fahrenheit: ';
    }
}

button.addEventListener('click', calcular)
inputEscala.addEventListener('keyup', verificarEscala)