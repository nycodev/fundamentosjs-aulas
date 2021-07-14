 //converter um trecho de string em codigo executavel por exemplo

//fazer o map em um Array

let context = {
    bola: 'redonda',
    teste: ['23', '34']
}


let string1 = "context.teste.map" + "(items=>"+ "{return items})\n"
let string2 = "let result = '23' \n"
let string3 = "context.teste.map"+ "(items=>{result += items})\n"
eval(string1)
eval(string2)
eval(string3)
console.log(result)



