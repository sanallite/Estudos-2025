/* Formatando Datas - Usando date-fns, versão require */

const { format, parseISO, isValid } = require('date-fns');
/* Síntaxe de importação de módulos CommonJS */

const args = process.argv.slice(2);
/* Recebendo os argumentos da linha de comando do Node */

function formatarData(stringData) {
    const data = stringData ? parseISO(stringData) : new Date();
    /* Se foi recebido um parâmetro com a data digitada, ele será parseado no formato ISO para criar uma data válida, caso contrário será construída um nova data padrão. */

    if ( !isValid(data) ) {
        return {
            'erro': 'Data inválida recebida.'
        }; 
        /* Retornando um objeto com uma propriedade chamada erro, para que essa string seja exibida corretamente no console após ser processada pelo Object.entries. */
    }
    /* Usando a função de verificação do date-fns, que na configuração padrão exige que data digitada seja do tipo string e no formato ano-mês-dia. */

    return {
        'Formato yyyy-MM-dd:': format(data, 'yyyy-MM-dd'), /* 2025-02-20 */
        'Formato MMM do, yyyy:': format(data, 'MMM do, yyyy'), /* Feb 20th, 2025 */
        'Formato HH:mm:ss:': format(data, 'HH:mm:ss'), /* 18:24:58 */ 
        'Formato completo:': format(data, 'EEEE, MMMM do, yyyy at HH:mm:ss a')
        /* Thursday, February 20th, 2025 PM1740087441 18:37:21 PM */

        /* Formatando a data de diversas maneiras. */
    };
}

/* Processando e exibindo os resultados. */
const dataSerFormatada = args[0];
const resultados = formatarData(dataSerFormatada);

if ( 'erro' in resultados ) {
    console.log(resultados.erro);
}
/* Verificando se existe uma propriedade chamada erro no objeto resultado, o que ocorre apenas se a data recebida não for válida, se for o caso é exibida mensagem armazenada no objeto, caso contrário os resultados das formatações serão exibidos. */

else {
    console.log('\nDatas formatadas utilizando o date-fns, versão require:');

    Object.entries(resultados)
        .forEach(([formato, resultado]) => {
            console.log(`${formato} ${resultado}`);
        });
    /* O Object.entries pega um objeto e o transforma num array com arrays dentro para cada propriedade, com a propriedade e o valor sendo os elementos/itens. Para exibição o loop forEach percorre cada item do array principal, extraindo ou desestruturando deles seus elementos/itens, que nesse caso representam o formato e a data em sí, para serem exibidos no console, com a formatação do texto tendo sido feita na string da propriedade do objeto. */
}

