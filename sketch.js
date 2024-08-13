function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
}
function draw() {
  circle(200,200,50);
}
function draw() {
  fill("red");
  circle(200,200,50);
}
let cor;

function setup() {
  createCanvas(400, 400);
  background("white");
}
function setup() {
  createCanvas(400, 400);
  background("white");
  cor = "blue";
}
function draw() {
  fill(cor);
  circle(200,200,50);
}
function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(0, 255, 0);
}
random(0, 255);
function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), 0, 0);
}
function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
}
function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
}
if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
}
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
}
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }
}
if(mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
}
  
if(mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
}
if(mouseY < posicaoVertical) {
    posicaoVertical--;
}
  
if(mouseY > posicaoVertical) {
    posicaoVertical++;
}
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }
  
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }
  
}
function setup() {
  createCanvas(400, 400);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}
if(mouseIsPressed){
    
}
if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
fill_______
___________
fill_______
___________
}

line(x1, y1, x2, 
function setup() {

createCanvas(200, 200);

background("white");

function draw() {

stroke("red");

line(50, 100, 150, 100);


square(x, y, s);

function setup() {

createCanvas(200, 200);

background("white");

}

function draw() {

stroke("blue");

square(50, 50, 100);

}

triangle(x1, y1, x2, y2, x3, y3);

function setup() {

createCanvas(200, 200);

background("white");

}

function draw() {

stroke("orange");

triangle(50, 150, 100, 50, 150, 150);

}
