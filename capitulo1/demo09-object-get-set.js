//usa-se _ antes de uma varíavel quando se quer criar uma variável 'privada' (isso é uma convenção entre programadores,
//para ninguém acessá-las por fora)
const pessoa = {
    _nome: '',
    _idade: 20,
    //get é usado para interceptar o valor 
    get nome () {
        return this._nome
    },
    //set é usado para "tratar" o valor interceptado e devolvê-lo no get
    set nome(valor) {
        this._nome = valor.toUpperCase()

    },
    //aqui temos um exemplo de função que dá retorno de valor booleano (essa função é auto declarada
    //e chamada dentro dessa estrutura)
    get podeDirigir() {
        return this._idade > 18
    },
    get idade() {
        return this._idade
    },
    set idade(valor) {
        this._idade = valor
    }
}
pessoa.nome = 'zezin'
console.log(pessoa.nome)
pessoa.idade = 20


if (pessoa.podeDirigir === true) {
    console.log('Pode dirigir')
} else {
    console.log('Não pode dirigir')
}
console.log('idade: ', pessoa.idade)
