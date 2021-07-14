// const textoPar = "par"
// const textoImpar = "ímpar"
// for (let index = 0; index <= 10; index++) {
//   const decisao = index % 2 === 0 ? textoPar : textoImpar
//   console.log(`O número ${index} é ${decisao}`)
// }

const pessoas = [
  {
    id: parseInt(Math.random() * 10),
    nome: 'Fumacker',
    superPoder: 'fumacento'
  },
  {
    id: Math.random(),
    nome: 'Martazinha',
    superPoder: 'engole batatas inteiras'
  }
]
for (let index = 0; index < pessoas.length; index++) {
  const item = pessoas[index]
  console.log(
  `
  id: ${item.id}
  nome: ${item.nome}
  super poder: ${item.superPoder}
  `
  )
}

//não precisa de contador 
for (const index in pessoas) {
  const item = pessoas[index]
  console.log('Nome ', item.nome)
}

//não precisa usar index
for (const item of pessoas) {
  console.log('Nome', item.nome)
}