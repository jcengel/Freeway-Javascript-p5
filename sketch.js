let nivelDoJogo = 2;

function setup() {
    createCanvas(500, 400);
    trilhaSnd.loop();
}

function draw() {
  background(estrada);
  
  mostraPontos();
  marcaPonto();
  resetaPontos();
  mostraAtor();
  movimentoAtor();
 
  
  mostraCarro();  
  movimentoCarro(nivelDoJogo);
  resetRun();
  verificaColisao();
}




