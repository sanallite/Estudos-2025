/* Genéricos, forma de escrever códigos flexíveis e reutilizáveis, que podem trabalhar com qualquer tipo de dado,mantendo a segurança de tipo. */
var arrString = ['a', 'b', 'c', 'z'];
var numArr = [1, 2, 4, 19];
function reduzir(array) {
    /* Não é preciso definir tipos na função reduce, ela recebe o tipo do array recebido pelo parâmetro. */
    return array.reduce(function (anterior, atual) {
        return atual > anterior ? atual : anterior;
    }
    /* Operadores ternários */
    );
}
var resultado = reduzir(arrString);
/* Após declarar o tipp genérico na função, podemos chamá-la com qualquer tipo */
var outroResultado = reduzir(numArr);
/* Aqui foram feitas inferências de tipo, nas variáveis e no tipo genérico. */
console.log(resultado, outroResultado);
var encontrarMaior = function (array) { };
/* Usando a síntaxe de função de seta. */
/* "A", uma letra genérica, representa o "parâmetro de tipo" */
var Generica = /** @class */ (function () {
    function Generica(valor) {
        this.valor = valor;
        this.valor = valor;
    }
    return Generica;
}());
var quatroCinco = new Generica(45);
/* quatroCinco = 45; Erro. Depois de atribuirmos uma instância da classe com um tipo específico, não podemos atribuir um valor de outro tipo na variável. */
var quatroSeis = new Generica('46');
var dezenas = new Generica({ um: 10, dois: 20 });
/* Definindo o tipo por inferência, que como é um objeto, o tipo deve ser um objeto com essas duas propriedades com valores do tipo number. */
/* dezenas = new Generica({ quatro: 40, cinco: 50}) Erro. Faltando as propriedades um e dois. */
dezenas = new Generica({ um: 1, dois: 2 });
var centenas = new Generica({ cem: 100 });
centenas = new Generica({ duzentos: 200 });
/* Sem erro, o tipo da classe precisa ser um objeto, mas sem propriedades específicas. */
centenas = new Generica([]);
