//modelo genérico de conversão de uma callback em uma promise
const readFile = caminho => 
  new Promise((resolve, reject) => {
    fs.readFile(caminho, (error, res) => {
      error? reject(error) : resolve(res)
    })
  })