//variaveisRaquete
let xRaquete = 5
let yRaquete = 150
let baseRaquete = 10
let alturaRaquete = 90
rect(xRaquete,yRaquete,baseRaquete,altuteRaquete)
//variaveisdaBolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 30

//velocidadedaBolinha
let velocidadexBolinha = 5 
let velocidadeyBolinha = 5

function setup() {
 createCanvas(600, 400);
}

function draw() {
  background("black")
  mostraBolinha()
  movimentoBolinha()
  verificacaoColisaoBorda()
  mostraRaquete()
  movimentoRaquete()

}
  
  function movimentoRaquete() 
  if(keyIsDown(UP_ARROW))
    yRaquete -= 10
  if(keyIsDonw(DOWN_ARRO))
    yRaquete += 10 
  function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)  
  }
  function movimentoBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha 
  }
  function vericacaoColisaoBorda
  if(xBolinha +15 >width || xBolinha < 0)
    velocidadexBolinha *= -1 
  if(yBolinha +15 >height || yBolinha <0)
    velocidadeyBolinha *= -1 
}

