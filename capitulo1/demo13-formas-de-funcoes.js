//formas de declarar funções:
//decalarando
function minhaFuncao1(parametro1) {
  return `aee`
}
//criando dentro de uma variável
const minhaFuncao2 = function (parametro1) {
  return `aeee ${parametro1}`
}
//arrow function
const minhaFuncao3 = (parametro1) => {
  return `aeee ${parametr1}`
}
//arrow function - se houver apenas um parâmetro, não é preciso parênteses
//nesse caso não é preciso nem mesmo o return e as chaves
const minhaFuncao4 = parametro1 => `aee ${parametro1}`

//dentro de objetos com arrow function:
const obj1 = {
  minhaFuncao: parametro1 => `aee ${parametro1}`
}
//para chamar a função nesse caso, usa-se:
obj1.minhaFuncao('test')
//de outra forma dentro de objetos: 
const obj2 = {
  minhaFuncao(parametro1) {
    return `aeee ${parametro1}`
  }
}

console.log(obj2.minhaFuncao(23))