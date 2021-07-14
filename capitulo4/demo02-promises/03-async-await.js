const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function questionAsync(text) {
  return new Promise((resolve, reject) => {
    terminal.question(`${text}\n`, msg => {
      !!msg ? resolve(msg) : reject(new Error('Cannot proceed with an empty field'))
    })
  })
}

async function badge(){
  try {
    const name = await questionAsync("What's your name?")
    const company = await questionAsync("What company do you work at?")
    const role = await questionAsync("What's your role at it?")
      console.log(`
                  ||    ${name}    ||
                  ||    ${company}    ||
                  ||    ${role}    ||
                  `)

  } catch (error) {
    console.log("Something went wrong ->", error.stack)
  }
  finally {
    terminal.close()
  }
}

badge()