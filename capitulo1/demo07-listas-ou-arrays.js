const tarefasDoDia = []
const tarefasLista = [
    'mexer no carro',
    'tirar o lixo',
    'estudar JS'
]

//console.log(tarefasLista[3])

//checar quantidade de itens no array:
//console.log(tarefasLista.length)

//adicionar um item no array
tarefasLista.push('jogar TOR')
//console.log(tarefasLista);

//remover ultimo item do array para uma variável:
//const ultimo = tarefasLista.pop()
//console.log(ultimo, tarefasLista)

//remover o primeiro item do array para uma variavel:
//const primeiro = tarefasLista.shift()
//console.log(primeiro, tarefasLista)

//remover um (ou mais) item(ns) específico(s) a partir de um indice
//console.log(tarefasLista[1])
//qual item de inicio // quantos remover
//tarefasLista.splice(1, 1)
//console.log(tarefasLista);

const itens = [
    2, 'notebook', 0.33
]

//console.log(typeof(itens))
//=object

//verificar o tipo do array do jeito certo:
//console.log(Array.isArray(itens))

//ordenar um array (também funciona com letras)
//const numeros = [3, 53, 22, 0]
//console.log(numeros.sort((a, b)=> {
//    return a-b;
//}))
//console.log(numeros)

//juntar dois arrays:
const novo = itens.concat([1,2,3])
console.log(novo)

//juntar itens de uma array em uma string: 
//console.log(itens.join(' , '))

//verificar o indice de um item no array:
//const index = itens.indexOf('notebook')
//console.log(index)
//para escrever o item
//console.log(itens[index])