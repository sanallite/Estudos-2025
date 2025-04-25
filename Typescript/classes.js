/* Estudando classes em TypeScript, no arquivo .js compilado é possível ver as definições feitas a moda antiga, com as funções construtoras e os métodos sendo definidos na propriedade prototype, que é a forma como as classes são criadas internamente pelo Javascript. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nome = nome,
            this.idade = idade;
    }
    /* Métodos abstratos não podem ter uma implementação, apenas a estrutura. */
    Pessoa.prototype.anoNascimento = function () {
        var hoje = new Date();
        var ano = hoje.getFullYear();
        return ano - this.idade;
        /* No caso essa função dá o resultado incorreto se você ainda não fez aniverśario esse ano. Uma implentação completa precisaria verificar o mês de nascimento, que estaria numa pripriedade da classe. */
    };
    return Pessoa;
}());
/* const eu = new Pessoa(); Erro: Não é possível criar uma instância de uma classe abstrata. */
var Eu = /** @class */ (function (_super) {
    __extends(Eu, _super);
    function Eu(nome, idade) {
        var _this = _super.call(this, nome, idade) || this;
        /* Usando o construtor da superclasse (Pessoa), com o construtor da subclasse (Eu) devendo receber os parâmetros necessários. */
        _this.destaque = true;
        return _this;
    }
    Eu.prototype.falar = function (mensagem) {
        return mensagem;
    };
    return Eu;
}(Pessoa));
var marcio = new Eu('Márcio', 25);
console.log(marcio.falar('Feliz aniversário Liz!'));
console.log(marcio.anoNascimento());
console.log(marcio);
