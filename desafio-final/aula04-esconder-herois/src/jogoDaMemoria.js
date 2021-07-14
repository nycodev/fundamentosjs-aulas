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
        this.iconePadrao = "./files/back.png"
        this.heroisEscondidos = []
    }
  //para usar o this, não podemos usar static!
  inicializar() {
    //vai pegar todas as funções da classe tela
    //coloca todos os heróis na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    //força a tela a usar o THIS de jogoDaMemoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
  }
 
  embaralhar() {
    const copias = this.heroisIniciais
    //para duplicar os itens :
    .concat(this.heroisIniciais)
    //entrar em cada item e criar um id aleatório
    .map(item => {
          return Object.assign({}, item, {id:Math.random() / 0.5})
    })    
    //ordenar aleatoriamente
    .sort(() => Math.random() - 0.5)
    this.tela.atualizarImagens(copias)
    //vamos esperar 1 segundo para atualizar a tela 
    setTimeout(() => {
        this.esconderHerois(copias)
    }, 1000); 
 }

 esconderHerois(herois) {
   //vamos trocar a imagem de todos os heróis existentes 
   //pelo icone padrão
   //como fizemos no construtor, vamos extrair apenas o que queremos 
   //usando a sintaxe ({ chave: 1}) estamos falando eque vamos retornar 
   //o que tiver dentro dos parenteses 
   //quando não usamos o ":"  (exemplo do id), o JS entende que o nome 
   //é o mesmo valor. Ex.  id:id, vira id
   const heroisOcultos = herois.map(({ nome, id})=> ({
     id,
     nome,
     img: this.iconePadrao
   }))
   //atualizamos a tela com os heróis ocultos
   this.tela.atualizarImagens(heroisOcultos)
   //guardamos os heróis ocultos para trabalhar com eles depois
   this.heroisOcultos = heroisOcultos
 }

  jogar() {
    this.embaralhar()
 }
}