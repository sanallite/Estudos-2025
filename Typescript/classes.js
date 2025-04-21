/* Estudando classes em TypeScript, no arquivo .js compilado é possível ver as definições feitas a moda antiga, com as funções construtoras e os métodos sendo definidos na propriedade prototype. */
var Escola = /** @class */ (function () {
    /* É preciso definir o tipo das propriedades, que nesse caso estão recebendo seus valores da função construtora. E já que numeroEstudantes é um parâmetro opicional, seu tipo deve estar de acordo. */
    function Escola(nome, cidade, numeroEstudantes) {
        this.nome = nome;
        this.cidade = cidade;
        this.numeroEstudantes = numeroEstudantes;
    }
    Escola.prototype.aula = function (materia) {
        console.log("Hora de estudar ".concat(materia));
    };
    Escola.prototype.recreio = function () {
        console.log('Hora de comer, ou brincar!');
    };
    return Escola;
}());
var cep = new Escola('Colégio Estadual do Paraná', 'Curitiba');
cep.recreio();
cep.aula('Matemática');
/* O linter do VSCode identifica que já foi usando o identificador Cliente em outro arquivo, para definir um tipo. */
var Cliente = /** @class */ (function () {
    /* Definindo o status de visíbilidade das propriedades e também dos métodos. No JavaScript todas as propriedades são públicas. */
    function Cliente(nome, id, endereco) {
        this.id = id,
            this.nome = nome,
            this.endereco = endereco;
    }
    Cliente.prototype.comprar = function () {
        return "Compra realizada! Ser\u00E1 entregue em: ".concat(this.endereco, ".");
        /* Como endereço é uma propriedade protegida, seu valor só pode ser acessado em métodos ou propriedades dessa classe ou de uma subclasse que a estende. */
    };
    return Cliente;
}());
var miyu = new Cliente('Miyu', 444, 'Rua das Flores');
/* console.log(miyu.id); Erro, propriedade somente acessível na classe. */
/* miyu.endereco Erro, propriedade somente acessível em sua classe ou nas subclasses dela. */
console.log(miyu.comprar());
