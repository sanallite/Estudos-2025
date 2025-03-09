/* Algoritmos para processar os dados de input do formulário no HTML */

const selecionador = document.querySelector('#picker');
const textoEscolha = document.querySelector('.escolha');
/* O querySelector seleciona itens da mesma forma que você seleciona itens no css e permite selecionar itens com uma especificidade grande. */

const botaoConfirmar = document.getElementById('confirmar');
const segundoTexto = document.getElementById('segundoTexto');
/* O selecionador por id é a forma mais rápida de pegar um elemento único. */

const terceiroTexto = document.querySelector('main p:nth-of-type(3)');
/* Usando um seletor específico, que busca o terceiro elemento p que é filho do elemento main. Se fosse nth-child, ele iria buscar o terceiro filho do elemento main que é um elemento p. */

botaoConfirmar.addEventListener('click', () => {
    if ( selecionador.value.trim() ) {
    /* Usando uma condicional que chama o método trim, que retorna true se o valor for vazio, depois de remover todos os espaços em branco, assim verificando se foi selecionada uma data no input. */

        textoEscolha.innerHTML = `Data escolhida: ${selecionador.value}`
        /* Definindo o conteúdo do elemento p como essa linha escrita com template literal, que pega o valor do input armazenado em selecionador, que é uma string de uma data. */

        const dataEscolhida = new Date(selecionador.value);
        console.log(dataEscolhida);
        /* Enviando a string de data diretamente pro construtor, o que causa que o dia exibido fique com o fuso horário local, que no caso do Brasil é o dia anterior do que foi selecionado no input. */

        const diaEscolhido = String(dataEscolhida.getDate()).padStart(2, '0');
        /* Formatando o dia numa string com padding no ínicio, para garantir que ela tenha no minímo dois caracteres, usando o número 0 para ocupar o espaço */

        segundoTexto.textContent = 'Dia incorreto: ' + diaEscolhido;
        /* Definindo o conteúdo de texto do segundo elemento p como essa string adicionada com outra. Se você escrever a sintaxe de um elemento html, o textContent não vai transformar o texto em um elemento, apesar o innerHTML faz isso. */

        const [ano, mes, dia] = selecionador.value.split('-').map(Number);
        /* Componentizado a data: O split vai dividir o conteúdo da string quando encontrar um traço e armazenar cada parte num vetor, que é desestruturado para criar variáveis para cada elemento dele, já o map(Number) transforma todos os elementos do vetor, cada string, em números. */

        console.log(dia, mes, ano);
        /* Exibindo as três variáveis, que são os componente de uma data. Sendo usada a virgula para separar os elementos, já que o + somaria os números. */

        const novaData = new Date(ano, mes -1, dia);
        console.log(novaData);
        /* Passando para o construtor de data cada "componente dela", assim a data não terá problemas com o fuso horário. o -1 no mês é para que se adeque ao índice de meses, que começa em zero, caso contrário seria exibido o próximo mês. */

        terceiroTexto.textContent = 'Dia correto e formatado: ' + String(novaData.getDate()).padStart(2, '0') + '. Mês correto e formatado: ' + String(novaData.getMonth() + 1).padStart(2, '0');
        /* Convertendo os atributos da data em string para formatá-los com o padStart, e adicionando 1 ao index do mês para exibir o mês correto. */

        terceiroTexto.addEventListener('dblclick', () => {
        /* Escutador que executará uma função apenas quando o elemento com o terceiro texto for clicado duas vezes. */

            const mesFormatoLongo = novaData.toLocaleString('pt-br', { month: 'long' });
            /* Convertendo a data em uma string que exibe o mês no formato longo, localizado para o português. */

            const mesInicialMaiuscula = mesFormatoLongo[0].toLocaleUpperCase() + mesFormatoLongo.substring(1);
            /* O valor retornado pelo toLocaleString está todo em minúsculo, por iso foi pego a primeira letra da string, que é basicamente um array de caracteres, e foi usada a função para deixar as letras maiúsculas e depois essa letra foi concatenada ao restante da string, que foi selecionada pelo método substring, que pega uma parte da string começando e terminando por um índice específicado, que nesse caso é o índice 1, a segunda letra, e como o final não foi definido ele pegará todo o conteúdo até o final. */

            terceiroTexto.textContent = 'Mês escolhido: '+mesInicialMaiuscula;
        });
    }

    else {
        textoEscolha.innerHTML = '';
        segundoTexto.innerHTML = '';
        terceiroTexto.innerHTML = '';
        /* Caso nenhuma data tenha sido selecionada, o conteúdo dos elementos html será definido como vazio. */
    }

    /* Lembrando, essas variáveis só existem no escopo da função desse escutador de eventos, então não é possível usar esses valores em outro escutador ou função. */
});