var balloon;


function perload() {

balloon1image = loadAnimation('images/images/Hot Air Balloon-02.png,Hot Air Balloon-03.png,Hot Air Balloon-04.png');
milkimage = loadImage('images/images/Milk.png');
bgimage = loadImage('images/images/Hot Air Balloon-01.png');

}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

