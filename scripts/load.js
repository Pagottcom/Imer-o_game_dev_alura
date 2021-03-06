function preload(){
  imagemCenerio = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fita = loadJSON("fita/fita.json");
}