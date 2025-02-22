/* Formatando Datas - Usando date-fns, versão import */
/* Para rodar aquivos com ES Modules no Node, é preciso ou ter o arquivo com a extensão mjs ou colocar o objeto "type": "module" no arquivo "package.json" */

import { format, parseISO, isValid } from "date-fns";
/* Síntaxe de importação dos módulos ES */

const args = process.argv.slice(2);
/* Recebendo os argumentos da linha de comando do Node */

function formatarData(stringData) {
    const data = stringData ? parseISO(stringData) : new Date();
    /* Se foi recebido um parâmetro com a data digitada, ele será parseado no formato ISO para criar uma data válida, caso contrário será construída um nova data padrão. */

    if ( !isValid(data) ) {
        console.error('Data inválida recebida.');
        process.exit(1);
        /* Para prevenvir o problema abaixo, nesse caso foi decidido encerrar a execução do script caso o valor recebido seja inválido. */

        /* return 'Data inválida recebida.'; Corrigido no arquivo da versão require.
        Como a renderização dos itens com Object.entries espera um objeto, se for retornado uma string, ela será iterada como se fosse um objeto, então a exibição no console seria numa forma estranha. */
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

console.log('\nDatas formatadas utilizando o date-fns, versão import:');

Object.entries(resultados)
.forEach( ([formato, resultado]) => {
    console.log(`${formato} ${resultado}`);
});
/* O Object.entries pega um objeto e o transforma num array com arrays dentro para cada propriedade, com a propriedade e o valor sendo os elementos/itens. Para exibição o loop forEach percorre cada item do array principal,extraindo ou desestruturando deles seus elementos/itens, que nesse caso representam o formato e a data em sí, para serem exibidos no console, com a formatação do texto tendo sido feita na string da propriedade do objeto. */