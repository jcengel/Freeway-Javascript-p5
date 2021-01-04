//variaveis do ator
let xAtor = 90;
let yAtor = 366;
let collide = false;
let pontos = 0;

function mostraAtor(){
  image(ator, xAtor, yAtor, 30, 30) 
}

function movimentoAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    } if (keyIsDown(DOWN_ARROW)){
      if (podeMover()){
          yAtor += 3;
      }
    } if (keyIsDown(LEFT_ARROW)){
      xAtor -=1;
    } if(keyIsDown(RIGHT_ARROW)){
      xAtor +=1;
    } if (yAtor <= -40){
      resetaPosicao();
    }
}

function verificaColisao(){
  for( let i = 0; i < imgCarros.length; i++){
    collide = collideRectCircle(xCarros[i], yCarros[i], sCarros[0], sCarros[1], xAtor, yAtor, 15)
    if (collide){
      resetaPosicao();
      pontos--
      colidiuSnd.play();
    }
  }
}

function resetaPosicao(){
      yAtor = 366;
      xAtor = 90;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(pontos, width/5, 27);
}

function marcaPonto(){
  if (yAtor < 20){
     pontos++
     pontoSnd.play();
     resetaPosicao();
  }
}

function resetaPontos(){
  if(pontos < 0){
    pontos = 0;
  }
}

function podeMover(){
    return yAtor < 366;
}