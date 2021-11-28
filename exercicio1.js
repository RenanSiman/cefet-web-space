// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelector('#calcular');
let inputs = document.querySelectorAll('input')

botaoCalcular.addEventListener('click', function() {
    let constanteEl = document.querySelector('#constante').value
    let massa1El = document.querySelector('#massa1').value
    let massa2El = document.querySelector('#massa2').value
    let distanciaEl = document.querySelector('#distancia').value

    let result = (constanteEl*massa1El*massa2El)/(distanciaEl**2)
    document.getElementById("resultado").value = result
})

//console.log('Quantidade de inputs na página: ' + inputs.length);
//console.log(`Quantidade de inputs na página: ${inputs.length}`);