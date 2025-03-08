/* Algoritmos para processar os dados de input do formulário no HTML */

const selecionador = document.querySelector('#picker');
const textoEscolha = document.querySelector('.escolha');
/* O querySelector seleciona itens da mesma forma que você seleciona itens no css e permite selecionar itens com uma especificidade grande. */

const botaoConfirmar = document.getElementById('confirmar');
const segundoTexto = document.getElementById('segundoTexto');
/* O selecionador por id é a forma mais rápida de pegar um elemento único. */

botaoConfirmar.addEventListener('click', () => {
    textoEscolha.innerHTML=`Data escolhida: ${selecionador.value}`
    /* Definindo o conteúdo do elemento p como essa linha escrita com template literal, que pega o valor do input armazenado em selecionador, que é uma string de uma data. */

    const dataEscolhida = new Date(selecionador.value);
    /* Enviando a string de data diretamente pro construtor, o que causa que o dia exibido fique com o fuso horário local, que no caso do Brasil é o dia anterior do que foi selecionado no input. */

    let diaEscolhido = String(dataEscolhida.getDate()).padStart(2, '0');
    /* Formatando o dia numa string com padding no ínicio, para garantir que ela tenha no minímo dois caracteres, usando o número 0 para ocupar o espaço */

    segundoTexto.textContent = 'Dia escolhido: ' +  diaEscolhido;
    /* Definindo o conteúdo de texto do segundo elemento p como essa string adicionada com outra. Se você escrever a sintaxe de um elemento html, o textContent não vai transformar o texto em um elemento, apesar o innerHTML faz isso. */

    const [ ano, mes, dia ] = selecionador.value.split('-').map(Number);
    /* Componentizado a data: O split vai dividir o conteúdo da string quando encontrar um traço e armazenar cada parte num vetor, que é desestruturado para criar variáveis para cada elemento dele, já o map(Number) transforma todos os elementos do vetor, cada string, em números. */

    console.log(dia, mes, ano);
    /* Exibindo as três variáveis, que são os componente de uma data. Sendo usada a virgula para separar os elementos, já que o + somaria os números. */
});

