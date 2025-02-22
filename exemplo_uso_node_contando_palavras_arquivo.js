// Aprendendo sobre execução de scripts e argumentos no Node.

const filename = process.argv[2];
// Utilizando argumentos do terminal pra pegar o nome do arquivo.

if (!filename) {
    console.error('Por favor digite o nome de um arquivo para ser usado como argumento');
    console.log('Uso: node script.js <nome do arquivo>');
    // Não é necessário colocar o nome do arquivo entre aspas nos argumentos.
    
    process.exit(1);
    /* Esse é exit code, código de saída, que indica se o programa foi encerrado com ou sem erros, com 0 indicado que foi executado com sucesso e os demais números, típicamente 1 indicam que houve um erro. */
}

const fs = require('fs');
// Importando o módulo nativo que lida com o sistema de arquivos. utilizando o método do Common JS.

async function processFile(filename) {
    try {
        const data = await fs.promises.readFile(filename, 'utf8');
        // Lendo o conteúdo do arquivo.

        const wordCount = data.split(/\s+/).length;
        // Processando os dados, nesse caso fazendo a contagem das palavras.

        console.log(`Esse arquivo contém ${wordCount} palavras.`);
        // Exibindo o resultado, colocando o valor da variável dentro da string sem precisar de concatenação, o que exige o uso de crase!.
    }

    catch (error) {
        console.error('Erro ao ler arquivo: ', error.message);
    }
}
// Função assíncrona para ler e processar um arquivo.

processFile(filename) /* Executando a função */
/* processFile('exemplo.txt') */