const selecionador = document.querySelector('#picker');

const textoEscolha = document.querySelector('.escolha');

console.log(selecionador);

selecionador.addEventListener('input', () => {
    textoEscolha.innerHTML=`Data escolhida: ${selecionador.value}`
})