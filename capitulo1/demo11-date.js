//meses começam do zero! (janeiro é mes 0 no JS)
const dataAniversario = new Date(2021, 0, 20)
//console.log(dataAniversario.getTime() / 1000 / 60 / 60 / 24 / 365)

//a data '0' do JS é 1-1-1970, que é a 'década do Unix' 
const primeiraDataDoJS = new Date(0)
//console.log(primeiraDataDoJS)

//date() retorna a data/hora atual
const hoje = new Date()
//.toString() transforma a data em formato de string extensa
//console.log(hoje.toString())
//.toLocaleDateString() transforma a data em formato de string formatada de acordo a localização da máquina
//console.log(hoje.toLocaleDateString())

//formato global recomendado:
//console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5) //+ 5 dias depois de hoje 
console.log(hoje)
//com .setHours podemos definir/adicionar horas
//hoje.setHours(6, 30, 0)

//com a sintaxe `${}` pode-se criar strings e também executar códigos JS na mesma linha
console.log(`
    Dia: ${hoje.getDate()}
    Mês: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minutos: ${hoje.getMinutes()}
    segundos: ${hoje.getSeconds()}
    Milsegundos: ${hoje.getMilliseconds()}
`)

console.log(
    new Date(2020, 1, 20) > new Date(2000, 1, 1)
)
