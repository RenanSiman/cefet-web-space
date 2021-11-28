// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let btsExpansao = document.querySelectorAll('.botao-expandir-retrair');
let cont = 0

for (let i = 0; i < btsExpansao.length; i++) {
  btsExpansao[i].addEventListener('click', function(e) {
    let btEl = e.currentTarget;
    let paragEl = btEl.parentNode;
    paragEl.classList.toggle('expandido') ? btEl.innerHTML = '-' : btEl.innerHTML = '+'
    
  });
}
