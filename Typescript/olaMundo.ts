const palavra : string = "Jesus Cristo é o Senhor.";
console.log(palavra);

/* let ano:string = 2025; Erro */

let ano:number;
ano = 2025;

const anos: number | string = "2026";

let saudacao = 'Olá mundo';
/* saudacao = 11; Erro */
console.log(saudacao);

type numeroArray = number | number[];
const dias: numeroArray = [1, 2];
const mes: numeroArray = 4;

/* const mes: numeroArray = 04; */
/* Literais octais não são permitidas use a síntaxe 0o4. */

let zeroQuatro: number = 0o4;

type Humano = {
    nome: string,
    idade: number
}

type Usuario = {
    id: string | number
}

type HumanUser = Humano & Usuario;

const Mar: HumanUser = {
    nome: 'Márcio',
    idade: 20,
    id: 'A'
}

console.log(Mar);