//criando uma classe:
class Heroi {
  //funções dentro da classe
  atacar() {
    console.log('Atacou!!')
  }
  defender() {
    console.log('Defendeu!!!')
  }
}
//com o new Heroi() instanciamos a classe propriamente dita
const heroi = new Heroi()
heroi.atacar()
heroi.defender()

//usando construtor:
class Heroi2 {
  //o constructor cria as propriedades da classe quando for chamada usando 
  //o 'new' 
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  atacar() {
    console.log(
      `${this.nome} atacou!!!`
    )
  }
}
const heroi2 = new Heroi2(
  `Flash`, 80
)
heroi2.atacar()

//
class Heroi3 {
  //aqui um exemplo de função 'helper', ou funções úteis
  //o static é usado para valores que não se alteram
  static obterAnoNascimento(idade) {
    return 2021 - idade
  }
}
const anoNascimento = heroi3.obterAnoNascimento(26)
console.log(
  `O ano de nascimento do heroi é ${anoNascimento}`
)