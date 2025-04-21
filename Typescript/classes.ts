/* Estudando classes em TypeScript, no arquivo .js compilado é possível ver as definições feitas a moda antiga, com as funções construtoras e os métodos sendo definidos na propriedade prototype. */

class Escola {
    nome: string
    cidade: string
    numeroEstudantes: number | undefined;
    /* É preciso definir o tipo das propriedades, que nesse caso estão recebendo seus valores da função construtora. E já que numeroEstudantes é um parâmetro opicional, seu tipo deve estar de acordo. */

    constructor(nome: string, cidade: string, numeroEstudantes?: number) {
        this.nome = nome;
        this.cidade = cidade;
        this.numeroEstudantes = numeroEstudantes;
    }

    aula(materia: string): void {
        console.log(`Hora de estudar ${materia}`);
    }

    recreio(): void {
        console.log('Hora de comer, ou brincar!');
    }
}

const cep = new Escola('Colégio Estadual do Paraná', 'Curitiba');
cep.recreio();
cep.aula('Matemática');

/* O linter do VSCode identifica que já foi usando o identificador Cliente em outro arquivo, para definir um tipo. */
class Cliente {
    public nome: string
    private id: number
    protected endereco: string
    /* Definindo o status de visíbilidade das propriedades e também dos métodos. No JavaScript todas as propriedades são públicas. */

    constructor(nome: string, id: number, endereco: string) {
        this.id = id,
        this.nome = nome,
        this.endereco = endereco
    }

    public comprar(): string {
        return `Compra realizada! Será entregue em: ${this.endereco}.`
        /* Como endereço é uma propriedade protegida, seu valor só pode ser acessado em métodos ou propriedades dessa classe ou de uma subclasse que a estende. */
    }
}

const miyu = new Cliente('Miyu', 444, 'Rua das Flores');
/* console.log(miyu.id); Erro, propriedade somente acessível na classe. */
/* miyu.endereco Erro, propriedade somente acessível em sua classe ou nas subclasses dela. */

console.log(miyu.comprar());