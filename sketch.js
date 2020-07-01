function setup() {
  createCanvas(windowWidth, windowWidth);
  
  somDoJogo.loop();
  frameRate(45);
  
  jogo = new Jogo();
  jogo.setup();
  
  telaInicial = new TelaInicial();
  
  cenas = {
    jogo:jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador("Iniciar", width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

