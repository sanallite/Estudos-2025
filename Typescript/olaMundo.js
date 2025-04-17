var palavra = "Jesus Cristo é o Senhor.";
/* Síntaxe de criação de variáveis com anotação de tipo. */
console.log(palavra);
/* let ano:string = 2025; Erro de atribuição. */
var ano;
ano = 2025;
/* Primeiro definindo o tipo e depois o valor. */
var saudacao = 'Olá mundo';
/* saudacao = 11; Erro de atribuição, que foi feita por inferência de tipo, com o TS definindo um tipo baseado no valor da variável. */
console.log(saudacao);
var noitesDeUmVerao;
/* Variável que pode ter qualquer tipo, por isso noites de um verão qualquer. */
noitesDeUmVerao = false;
var anos = "2026";
/* Tipos de união, com essa variável podendo ser de um OU outro tipo, indicado pelo sinal |, também é possível adicionar mais de um tipo alternativo. */
var p;
/* Também é possível adicionar null ou undefined como tipos de união, para representar valores opicionais. */
/* console.log(p); A variável é usada antes de ser atribuída. */
var nada;
/* nada = 'Tudo'; Erro de atribuição */
var coisas = ['Oi', 11, 'Tipos de união com arrays, com os tipos sendo colocados entre parênteses.'];
var objetoSimples = {
    prop1: 'A',
    prop2: false,
    prop3: []
};
var objeto2;
objeto2 = {
    numero: 1
};
/* Definição de objetos, primeiro definindo os tipos das propriedades e depois atribuindo os valores de todas. */
objetoSimples.prop1 = 'B';
console.log(objetoSimples.prop1);
var dias = [1, 2];
var mes = 4;
/* const mes: numeroArray = 04; */
/* Literais octais não são permitidas use a síntaxe 0o4. */
var zeroQuatro = 4;
var Mar = {
    nome: 'Márcio',
    idade: 20,
    id: 'A'
};
console.log(Mar);
