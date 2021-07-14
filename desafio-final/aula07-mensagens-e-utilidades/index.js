function onLoad() {
    const dependencias = {
        tela: Tela, // essas classes são globais, aqui deixamos bem definidos
        util: Util  // os caminhos das mesmas para não deixar como "global"
    }
    //inicializamos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
    
    
}
window.onload = onLoad