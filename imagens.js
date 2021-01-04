let estrada;
let ator;

let carro1;
let carro2;
let carro3;


let trilhaSnd;
let pontoSnd;
let colidiuSnd;

function preload(){
  estrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carro4 = carro1;
  carro5 = carro2;
  carro6 = carro3;
  imgCarros = [carro1, carro2, carro3, carro4, carro5, carro6]
  
 trilhaSnd = loadSound("sons/trilha.mp3");
 colidiuSnd = loadSound("sons/colidiu.mp3");
 pontoSnd = loadSound("sons/pontos.wav");
}

