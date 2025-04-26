/* Enumerações. Conjuntos de constantes nomeadas e valores númericos. */

enum Direcoes {
    Cima,
    Baixo,
    Esquerda,
    Direita
    /* Definição, com os valores iniciados com letra maiúscula, e separados por vírgulas. Cada membro é atribuído um número automáticamente, começando em 0. */
}

Direcoes.Cima // 0
console.log(Direcoes[1]); // Baixo
/* Acessando os valores, pelo seu nome ou numeração. */

enum Opcoes {
    Arquivo = 3,
    /* Definindo um número inicial, assim os próximos itens vão seguir a ordem crescente a partir dele. */
    Editar,
    Selecao
}

console.log(Opcoes.Editar) // 4

enum Dias {
    S = 'Segunda',
    T = 'Terça',
    QU = 'Quarta',
    QI = 5
    /* È possível defir o valor como uma string, e também juntar valores numéricos e string num mesmo enum. */
}

Dias.T // Terça
console.log(Dias[5])
/* Essa forma de acessar o nome só funciona se o valor for númerico. */

/* Um exemplo do Claude de um uso de enums, para mapeamento de valores de APIs externas. */
enum TipoTransacaoInterna {
    Deposito = "DEP",
    Saque = "SAQ",
    Transferencia = "TRF",
    Pagamento = "PAG"
}
  
// Usar na comunicação com API externa
function enviarTransacao(tipo: TipoTransacaoInterna, valor: number) {
    fetch("https://api.pagamentos.com/transacao", {
        method: "POST",
        body: JSON.stringify({
            transaction_type: tipo, // Vai enviar o valor correto: "DEP", "SAQ", etc.
            amount: valor
        })
    });
}
/* enviarTransacao(TipoTransacaoInterna.Deposito, 2000); Chamando a função, usando o membro do enum e não o seu valor. Essa função só vai aceitar como parâmetro tipo valores do enum, qualquer outro resulta em erro de compilação. */
