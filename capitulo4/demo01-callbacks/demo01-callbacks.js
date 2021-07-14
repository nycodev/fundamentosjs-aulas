const fs = require('fs')
// fs.readFile('./Fl1.txt', (error, result) =>{
//       if(error) {
//           console.error('Deu pau no arquivo 1', error.stack)
//           return;
//       }

//       console.log('resposta', result.toString())
//       //ao ler um arquivo, aqui o node gerou um "buffer", que é um arquivo binário,
//       //que pode ser processado aos poucos, como se fosse um stream 
//       //nesse caso, foi usada a função toString() para transformar o conteúdo em texto
//       // de fato

// })


fs.readFile('./Fl1.txt', (errorFl1, resultFl1) => {
    if(errorFl1) {
        console.error('Deu pau no arquivo 1 ', errorFl1)
        return;
    }
    fs.readFile('./Fl2.txt', (errorFl2, resultFl2) => {
        if(errorFl2) {
            console.error('Deu pau no arquivo 2 ', errorFl2)
            return;
        }
        fs.readFile('./Fl3.txt', (errorFl3, resultFl3) => {
          if(errorFl3) {
              console.error('Deu pau no arquivo 3 ', errorFl3)
              return; 
          }

          const content = `${resultFl1}\n${resultFl2}\n${resultFl3}`
          fs.writeFile('./final.txt', content, (errorWrite, resultWrite) => {
              if(errorWrite) {
                  console.error('Deu pau na gravação', errorWrite)
                  return;
              }
              console.log('arquivo salvo com sucesso!')
          })
        })
    })
})