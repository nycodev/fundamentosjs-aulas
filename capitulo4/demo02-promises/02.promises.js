const readline = require ('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function questionAsync(text) {
  return new Promise((resolve, reject) => {
    terminal.question(`${text}\n`, resolve)
  })
}

let name = ""
let phone = ""
let word = ""

Promise.resolve()
        .then(() => questionAsync("What's your name?"))
        .then(resName => {
            if(!resName) throw new Error("Cannot proceed with empty field!")
            name = resName
        })
        .then(() => questionAsync("What's your phone?"))
        .then(resPhone => {
            if(!resPhone) throw new Error("Cannot proceed with empty field!")
            phone = resPhone
        })
        .then(() => questionAsync("Give me a word: "))
        .then(resWord => {
            if(!resWord) throw new Error("Cannot proceed with empty field!")
            word = resWord
        })
        .then(() => {
          console.log(
            `
            Name:${name},
            Phone:${phone},
            Word:${word}
            `)
        })
        .catch(error => {
            console.error("Something went wrong :'(", error.stack)
        })
        .finally(() => terminal.close())