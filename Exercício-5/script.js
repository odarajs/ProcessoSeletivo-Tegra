function calcular(){ 
//Digite o valor do raio do círculo:
const calcularcirculo = Math.abs(document.querySelector('#circulo').value).toFixed(1)

const somar = (3.14159 * calcularcirculo ** 2).toFixed(3)

const somartotal = document.querySelector('#result-Total')

somartotal.innerHTML = `Digite o valor do raio do círculo: ${calcularcirculo} | ÁREA = ${somar}`
}