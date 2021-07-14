function onLoad() {
    const dependencias = {
        tela: Tela // a classe Tela é global. parece que os dois pontos funcionam como igual
    }
    //inicializamos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
    
    
}
window.onload = onLoad