// Formatando datas utilizando os comandos nativos do JS.

const dataAtual = new Date();
// Sem parâmetros definidos o construtor de datas escolherá o dia atual.

console.log('\n -- Formatações de datas básicas -- ');
console.log('toString()', dataAtual.toString());
console.log('toISOString()', dataAtual.toISOString());
console.log('toLocaleDateString()', dataAtual.toLocaleDateString());
console.log('toLocaleTimeString()', dataAtual.toLocaleTimeString());
// Formatações básicas

console.log('\n -- Exibição de datas customizada utilizando métodos de data --');

const formatoCustom1 = `${dataAtual.getFullYear()}-${ String( dataAtual.getMonth() ) }`;
// Pegando o ano e o mês da data e convertendo o tipo do valor do mês para string. Usando a string com crase chamada de template literal, que permite expressões, utilizando o ${}

const formatoCustom2 = `Dia ${ String( dataAtual.getDate() ).padStart(2, '0') } do ${ String( dataAtual.getMonth() ).padStart(2, '0') }`;
/* o padStart só funciona em strings, por isso foi feita a conversão e ele serve para adicionar letras ao início da linha para que ela tenha um tamanho desejado, definido como 2, já o '0' é o que foi escolhido para ser adicionado, assim todos os meses de um só digito vão receber um zero na frente do número, os que tem dois ou mais já atendem o tamanho desejado, então não haverá mudança */

const formatoCustom3 = `Formato 3, índice do mês + 1: ${String( dataAtual.getMonth() + 1 )}`;
/* Os meses são contandos a partir do zero, então é preciso adicionar 1 para exibir a numeração correta. */

console.log('Formato 1, yyyy-mm:', formatoCustom1);
console.log('Formato 2, dd do mm:', formatoCustom2);
console.log(formatoCustom3);

const dataAntiga = new Date(1999, 4);
/* Data definida usando apenas o mês e o ano. Se você colocar apenas um ano no constutor, a data será definida como 31/12/1969.*/

console.log('Uma data antiga:',dataAntiga.toLocaleString());

// Processando argumentos da linha de comando.

// process.argv[0] é o caminho executável do Node.
// process.argv[1] é o caminho do script.
const args = process.argv.slice(2);
/* Pegar todos os argumentos da linha de comando depois do nome do script.
A função slice cria um novo array a partir de um índice de outro array, nesse caso a partir do segundo item, então o novo array receberá o valor daquele item e os posteriores. Isso foi usado para pular os argumentos anteriores, referentes a execução do script. */

console.log('\n-- Exibindo data recebida por argumentos --');

if ( args.length > 0 ) {
    try {
        console.log('Você proveu esses argumentos:', args);

        const parsedDate = new Date(args[0]);
        /* Na configuração padrão do construtor, os argumentos na linha devem ser enviados no formato mês-dia-ano ou ano-mês-dia. */

        if ( !isNaN(parsedDate) ) {
            console.log('\nFoi feita uma data com o primeiro argumento:', parsedDate.toLocaleDateString());
        }

        else {
            console.log('\nO primeiro argumento não é uma data válida.');
            /* A verificação do if não manda um erro pro catch pegar, porque se a data recebida pelo argumento for inválido, o construtor vai criar um objeto chamado "Invalid Date" que resulta em true se verificado pelo !isNaN, por isso foi adicionada essa linha para exibir o erro.. */
        }
    }
    // Se o primeiro argumento for uma string de data no formato ano-mês-dia, ou ano-mês-dia-horas-minutos, ele será parseado e nesse caso serão exibidos apenas ano-mês-dia.

    catch (error) {
        console.log('O primeiro argumento não é uma data válida.')
    }
}

else {
    console.log('Nenhum argumento enviado. Tente digitar uma data')
    console.log('node formatacao_datas_padrao.js 2012,15,1 "argumento adicional"');
}
