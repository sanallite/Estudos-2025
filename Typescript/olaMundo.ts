const palavra: string = "Jesus Cristo é o Senhor.";
/* Síntaxe de criação de variáveis com anotação de tipo. */

console.log(palavra);

/* let ano:string = 2025; Erro de atribuição. */

let ano:number;
ano = 2025;
/* Primeiro definindo o tipo e depois o valor. */

let saudacao = 'Olá mundo';
/* saudacao = 11; Erro de atribuição, que foi feita por inferência de tipo, com o TS definindo um tipo baseado no valor da variável. */

console.log(saudacao);

let noitesDeUmVerao: any;
/* Variável que pode ter qualquer tipo, por isso noites de um verão qualquer. */

noitesDeUmVerao = false;

const anos: number | string = "2026";
/* Tipos de união, com essa variável podendo ser de um OU outro tipo, indicado pelo sinal |, também é possível adicionar mais de um tipo alternativo. */

let p: HTMLElement | null;
/* Também é possível adicionar null ou undefined como tipos de união, para representar valores opicionais. */
/* console.log(p); A variável é usada antes de ser atribuída. */

let nada:null;
/* nada = 'Tudo'; Erro de atribuição */

const coisas: (string | number)[] = ['Oi', 11, 'Tipos de união com arrays, com os tipos sendo colocados entre parênteses.'];

const objetoSimples: {
    prop1: string,
    prop2: boolean,
    prop3: number[]
} = {
    prop1: 'A',
    prop2: false,
    prop3: []
}

let objeto2: {
    numero: number
}
objeto2 = {
    numero: 1
}
/* Definição de objetos, primeiro definindo os tipos das propriedades e depois atribuindo os valores de todas. */

objetoSimples.prop1 = 'B';
console.log(objetoSimples.prop1);

type numeroArray = number | number[];
/* usando aliases de tipo para dar nome a um tipo ou uma união de tipos específica. Sendo apenas uma outra maneira de se referir aos tipos existentes. */
const dias: numeroArray = [1, 2];
const mes: numeroArray = 4;

/* const mes: numeroArray = 04; */
/* Literais octais não são permitidas, use a síntaxe 0o4. */
let zeroQuatro: number = 0o4;

type Humano = {
    nome: string,
    idade: number
}

type Usuario = {
    id: string | number
}
/* Tipos personalizados de objetos */

type HumanUser = Humano & Usuario;
/* Tipo de interseção, que combinam mais de um tipo em um, que caso esteja trabalhando com objetos, as intâncias desse tipo precisam ter todas as suas propriedades atribuídas a um valor. */

const Mar: HumanUser = {
    nome: 'Márcio',
    idade: 20,
    id: 'A'
}

console.log(Mar);

type Trabalhador = Humano & {
    cargo: string
}
/* Criando um tipo de interseção diretamente, estendendo um tipo personalizado, permitindo-nos criar tipos mais abrangentes. */

/* let caixa: Trabalhador = {
    cargo: 'Operador'
} Erro. Propriedades faltando. */

interface Jogos {
    titulo: string,
    lancamento: number
}

let sonic: Jogos = {
    titulo: 'Sonic the Hedgehog',
    lancamento: 1991
}
/* Anotações de tipo utilizando interfaces, para criação de objetos. Note que na criação de interfaces não é usado o = */

interface RPG extends Jogos {
    genero: string
}
/* Estendendo uma interface, para que suas instâncias da interface estendida herdem as mesmas propriedades da interface base. */

interface Pessoa {
    primeiroNome: string,
    nomeDoMeio?: string,
    /* A propriedade fica definida assim: nomeDoMeio: string | undefined */
    sobrenome: string
}
/* Definindo propriedades opcionais, que não precisam estar definidas nas instâncias de objetos que usam essa interface como tipo. */

type Cliente = {
    readonly id: string | number
    /* Propriedades que impedem modificações após a inicialização, mantendo seus valores constantes. */
}

let cli: Cliente = {
    id: 1
}
/* cli.id = 2; Erro. Propriedade de somente leitura. */