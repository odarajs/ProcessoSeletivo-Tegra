function calcular(input,elevado,diabete,resultado,soma) {

    input = Math.abs(document.querySelector('#glicose').value);

    if (input <= 100 ) {
        diabete = 'Normal';
    } else if (input <= 140) {
        diabete = 'Elevado'
    }else if (input > 140){
        diabete = 'Diabetes'
    }else if(' '){
        diabete = 'insira um valor'
    }
    resultado = document.querySelector('#resul-total').innerHTML = `Digite a medida da glicose: ${input} |
    Classificação: ${diabete}
    `
}