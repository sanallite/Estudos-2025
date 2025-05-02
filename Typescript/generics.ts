/* Genéricos, forma de escrever códigos flexíveis e reutilizáveis, que podem trabalhar com qualquer tipo de dado,mantendo a segurança de tipo. */

const arrString: string[] = ['a', 'b', 'c', 'z'];
const numArr: number[] = [1, 2, 4, 19];

function reduzir<T> (array: T[]): T {
    /* Não é preciso definir tipos na função reduce, ela recebe o tipo do array recebido pelo parâmetro. */
    return array.reduce((anterior, atual) => 
        atual > anterior ? atual : anterior
        /* Operadores ternários */
    )
}
let resultado = reduzir<string>(arrString);
/* Após declarar o tipp genérico na função, podemos chamá-la com qualquer tipo */
let outroResultado: number = reduzir(numArr);
/* Aqui foram feitas inferências de tipo, nas variáveis e no tipo genérico. */

console.log(resultado, outroResultado);

const encontrarMaior = <T> ( array: T[] ): void => {}
/* Usando a síntaxe de função de seta. */

/* "A", uma letra genérica, representa o "parâmetro de tipo" */
class Generica<A> {
    constructor( public valor: A ) {
        this.valor = valor
    }
}

let quatroCinco = new Generica<number>(45);
/* quatroCinco = 45; Erro. Depois de atribuirmos uma instância da classe com um tipo específico, não podemos atribuir um valor de outro tipo na variável. */

let quatroSeis = new Generica<string>('46');
let dezenas = new Generica({ um: 10, dois: 20 });
/* Definindo o tipo por inferência, que como é um objeto, o tipo deve ser um objeto com essas duas propriedades com valores do tipo number. */

/* dezenas = new Generica({ quatro: 40, cinco: 50}) Erro. Faltando as propriedades um e dois. */
dezenas = new Generica({um: 1, dois: 2});

let centenas = new Generica<object>({ cem: 100 });
centenas = new Generica({ duzentos: 200 });
/* Sem erro, o tipo da classe precisa ser um objeto, mas sem propriedades específicas. */

centenas = new Generica([]);