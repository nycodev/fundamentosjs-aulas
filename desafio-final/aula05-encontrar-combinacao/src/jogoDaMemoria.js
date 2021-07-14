class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            {img: './files/cyclops.png', nome: 'Cyclops'},
            {img: './files/hawk.png', nome: 'Hawkeye'},
            {img: './files/spider.png', nome: 'Spider'},
            {img: './files/thor.png', nome: 'thor'},
        ]
        this.iconePadrao = "./files/back.png"
        this.heroisEscondidos = []
        this.heroisSelecionados= [] 
    }
  //para usar o this, não podemos usar static!
  inicializar() {
    //vai pegar todas as funções da classe tela
    //coloca todos os heróis na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    //força a tela a usar o THIS de jogoDaMemoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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
verificarSelecao(id, nome) {
    const item =  { id, nome }
    //vamos verificar a quantidade de  herois selecionados 
    //e tomar ação se escolheu certo ou errado 
    const heroisSelecionados = this.heroisSelecionados.length
    switch(heroisSelecionados) {
      case 0 :
        // adiciona a escolha na lista, esperando pela próxima clicada
        this.heroisSelecionados.push(item)
        break;
      case 1 :
        //se a quantidade de escolhidos for 1, significa que o usuário
        // só pode escolher mais 1, então vamos obter o primeiro item da lista
        const [opcao1] = this.heroisSelecionados
        //zerar itens para não selecionar mais de dois 
        this.heroisSelecionados = []
        //conferimos se o nome e o id das cartas batem conforme 
        //o esperado
        if(opcao1.nome === item.nome &&
        //aqui verificamos se são ID's diferentes para o usuário não 
        //conseguir "acertar" clicando duas vezes na mesma carta
        opcao1.id !== item.id
        ) {
          alert('combinação correta!\n' + item.nome)
          //para a execução
          return;
        }

        alert('combinação incorreta!')
        //fim do switch case
        break;

    }

}
  jogar() {
    this.embaralhar()
 }
}