class Piloto {
  //constructor é uma função que será chamada quando chamar essa classe
  constructor(
    nome,
    dataNascimento,
    tempoDeVoo,
    temPermissaoParaVoar
  ) {
    //this cria uma propriedade para uma classe específica
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.tempoDeVoo = tempoDeVoo;
    this.temPermissaoParaVoar;
  }
  //aqui temos uma função declarada dentro da classe, não sendo necessário 
  // colocar "function"
  pilotar() {
    console.log(`${this.nome} vai pilotar!!`)
  }
}

const piloto = new Piloto(
  'Zé urubu',
  new Date(1989, 2, 5),
  '8 anos',
  true
)

console.log(piloto)
piloto.pilotar()