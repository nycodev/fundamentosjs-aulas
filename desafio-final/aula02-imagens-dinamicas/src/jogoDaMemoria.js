class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            {img: './files/cyclops.png', name: 'Cyclops'},
            {img: './files/hawk.png', name: 'Hawkeye'},
            {img: './files/spider.png', name: 'Spider'},
            {img: './files/thor.png', name: 'thor'},
        ]
    }
  //para usar o this, não podemos usar static!
  inicializar() {
    //vai pegar todas as funções da classe tela
    //coloca todos os heróis na tela
    this.tela.atualizarImagens(this.heroisIniciais)
   
}