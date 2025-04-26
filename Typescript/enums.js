/* Enumerações. Conjuntos de constantes nomeadas e valores númericos. */
var Direcoes;
(function (Direcoes) {
    Direcoes[Direcoes["Cima"] = 0] = "Cima";
    Direcoes[Direcoes["Baixo"] = 1] = "Baixo";
    Direcoes[Direcoes["Esquerda"] = 2] = "Esquerda";
    Direcoes[Direcoes["Direita"] = 3] = "Direita";
    /* Definição, com os valores iniciados com letra maiúscula, e separados por vírgulas. Cada membro é atribuído um número automáticamente, começando em 0. */
})(Direcoes || (Direcoes = {}));
Direcoes.Cima; // 0
console.log(Direcoes[1]); // Baixo
/* Acessando os valores, pelo seu nome ou numeração. */
var Opcoes;
(function (Opcoes) {
    Opcoes[Opcoes["Arquivo"] = 3] = "Arquivo";
    /* Definindo um número inicial, assim os próximos itens vão seguir a ordem crescente a partir dele. */
    Opcoes[Opcoes["Editar"] = 4] = "Editar";
    Opcoes[Opcoes["Selecao"] = 5] = "Selecao";
})(Opcoes || (Opcoes = {}));
console.log(Opcoes.Editar); // 4
var Dias;
(function (Dias) {
    Dias["S"] = "Segunda";
    Dias["T"] = "Ter\u00E7a";
    Dias["QU"] = "Quarta";
    Dias[Dias["QI"] = 5] = "QI";
    /* È possível defir o valor como uma string, e também juntar valores numéricos e string num mesmo enum. */
})(Dias || (Dias = {}));
Dias.T; // Terça
console.log(Dias[5]);
/* Essa forma de acessar o nome só funciona se o valor for númerico. */
/* Um exemplo do Claude de um uso de enums, para mapeamento de valores de APIs externas. */
var TipoTransacaoInterna;
(function (TipoTransacaoInterna) {
    TipoTransacaoInterna["Deposito"] = "DEP";
    TipoTransacaoInterna["Saque"] = "SAQ";
    TipoTransacaoInterna["Transferencia"] = "TRF";
    TipoTransacaoInterna["Pagamento"] = "PAG";
})(TipoTransacaoInterna || (TipoTransacaoInterna = {}));
// Usar na comunicação com API externa
function enviarTransacao(tipo, valor) {
    fetch("https://api.pagamentos.com/transacao", {
        method: "POST",
        body: JSON.stringify({
            transaction_type: tipo, // Vai enviar o valor correto: "DEP", "SAQ", etc.
            amount: valor
        })
    });
}
/* enviarTransacao(TipoTransacaoInterna.Deposito, 2000); Chamando a função, usando o membro do enum e não o seu valor. Essa função só vai aceitar como parâmetro tipo valores do enum, qualquer outro resulta em erro de compilação. */
