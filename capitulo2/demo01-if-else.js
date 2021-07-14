let sabeVirarMortal = true;
let temForcaSuficiente = false;

//obter valores do terminal 
const args = process.argv
const saldo =  args[args.length -1]

if (isNaN(saldo)) {
  console.log("valor invalido!!")
  return;
}
console.log('args', args)
console.log('saldo', saldo)

let tipoCliente = "premium"
if(saldo<9) {
  tipoCliente = "basic"
}
else if (saldo>=10 && saldo <20){
  tipoCliente = "gold"
}
else {
  tipoCliente = null
}

// null, undefined, vazio, 0 === false!

if (!tipoCliente) {
  tipoCliente = "indefinido"
}

console.log("tipoDoCliente", tipoCliente)

//só pra relembrar:
const operadorOu = 1 > 2 || 2 < 1
const operadorE = 1=== 1 && 2!==2
const operadorNot = !(1==1)

// usando "ternários" <- não faço idéia se é isso mesmo o termo 
const idade = 10
const resultado = idade >= 18 ?
                        "pode dirigir" :
                        "não pode dirigir!!"
console.log("resultado", resultado)

