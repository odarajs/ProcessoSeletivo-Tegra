let botao= document.querySelector('#button');

function calcular() {
    let numero = parseInt(document.querySelector('#valor').value);
    
    let listaUnitario = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];
    let listaDezenas = ['Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
    
    let numeroExtenso;
    if (numero < 20){
        numeroExtenso = listaUnitario[numero];
    } else{
        let casaDecimal = Math.floor(numero / 10);
        let casaUnitaria = numero % 10;
        
        numeroExtenso = listaDezenas[casaDecimal - 2] + (casaUnitaria > 0 ? ` e ${listaUnitario[casaUnitaria - 0]}` : '');
    }
    
    let result = document.querySelector('#result-total');
    result.innerHTML = `Número: ${numeroExtenso}<br>Saída: ${numeroExtenso}<br>`
}

botao.addEventListener('click', calcular)