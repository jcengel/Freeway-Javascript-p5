//variaveis do Carro
let xCarros = [600,600,600, -100, -100, -100];
let yCarros = [40,96,150, 264, 210, 315];
let velCarros = [2, 2.5, 3.2,4, 2.2, 3];
let sCarros = [ 50 , 40];


function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], sCarros[0], sCarros[1]);
  }  
  //extras
 //  image(imgCarros[0], xCarros[3], yCarros[3], 50, 40)
//  image(carro3, xCarro2+300, 95, 50, 40)
      
}

function movimentoCarro(x){

  for(let i = 0; i < xCarros.length; i++){
  xCarros[i] += x * -velCarros[i]; 
} 

}

function resetRun(){
  
  for (let i = 0; i < imgCarros.length; i++){
    if(completeRun(xCarros[i])){
      xCarros[i] = 600;
      }
    velCarros[2] += 0.75;
    
    if (velCarros[2] > 6){
      velCarros[2] = 3;
      }
  }
}


function completeRun(xCarro){
  return xCarro < -100;
}