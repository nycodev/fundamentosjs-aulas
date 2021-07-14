//aqui foi criado um objeto da forma mais tradicional.
const heroi = {
    nome: 'Wolverine',
    idade: 120,
    sexo: 'Masculino'
}

//console.log('nome: ', heroi.nome)
//console.log('idade: ', heroi['idade'])
//console.log('sexo: ', heroi.sexo)
//console.log('laraiê: ', heroi.laraie)

// aqui vamos inserir uma nova 'chave' dentro do objeto:
//heroi.id = 0001
//console.log(heroi)


//para pegar apenas as chaves de um objeto:
//console.log(Object.keys(heroi))

//pegar apenas os valores de um objeto:
//console.log(Object.values(heroi))

//juntar dois objetos 
const pessoa = {
    tamanho: '2 metros'
}
const novoObj = Object.assign(heroi, pessoa)
//para excluir uma chave de um objeto, podemos usar:
delete novoObj.sexo
console.log(novoObj)
