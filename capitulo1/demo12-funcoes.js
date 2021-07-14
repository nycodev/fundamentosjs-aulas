//estrutura básica de função
function nomeDaFuncao(parametro1) {
    //bloco de código
}

function queDiaEHoje() {
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
}
queDiaEHoje()

//funções passando parâmetros
//function soma(valor1, valor2) {
//    console.log(`A soma de ${valor1} + ${valor2} é: `, valor1 + valor2)
//}
//soma(10, 20)
//soma(87, 87)

//funções podem retornar valores
function soma(valor1, valor2) {
    return valor1 + valor2
}
const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
console.log('resultado: ', resultado)

function multiplicar(valor1, valor2) {
    //essa variável 'resultado' declarada aqui dentro da função, só existe 
    //no escopo dessa função, não existindo de forma global (a outra variável
    //de mesmo nome sim é global)
    const resultado = valor1 * valor2
    return resultado
}
console.log('O resultado da multiplicação é : ', multiplicar(300, 40))

///////
const funcionario1 = {
    nome: 'Zé fulano',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Maria Teobalda',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

//forma suja e não eficiente de fazer o cálculo:
//*const descontoFuncionario1 =
/**    funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)

const descontoFuncionario2 =
    funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)

console.log(
    `Funcionario1: ${descontoFuncionario1}
    Funcionario2 : ${descontoFuncionario2}`
) */

//forma eficiente de fazer o cálculo:
function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(
    `
    Salario de ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salario de ${funcionario2.nome}: ${funcionario2.salarioLiquido}
    `
)