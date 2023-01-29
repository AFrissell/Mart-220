var x = 200;
var y = 200;
var x2 = 400;
var y2 = 400;
var x3 = 400;
var y3 = 400;
var x4 = 300;
var y4 = 300;
//pepperoni Size
pepperoniSize=50
//Movable Pep Original Position
var PepX= 30;
var PepY= 370;
//Text Size
var TextSize= 15;
//olive variables
var OliveWidth=20
var OliveHeight=30
//movable Olive variables
var OliveX=350
var OliveY=20
//random pepper movement 
var RandomPepper= 10+random(9)

//CREATE CANVAS
function setup() {
  createCanvas(400,400);

  //random shapes
  for (i=0; i<10; i++) {
    x=random(400);
    y=random(400);
    x2=random(400);
    y2=random(400);
    x3=random(400);
    y3=random(400);
    x4=random(400);
    y4=random(400);
  }
}

function draw() {
  //PIZZA!!!
  //Green Table
  background(0, 128, 0);
  //random circles
  fill (0,60,0)
  circle (x++, y++, 25);
  if (x>400) {x=random(0);}
  if (x>400) {y=random(400)}
  if (y>400) {x=random(0);}
  if (y>400) {y=random(400);}
  circle (x2++, y2++, 50);
  if (x2>400) {x2=random(0);}
  if (x2>400) {y2=random(400)}
  if (y2>400) {x2=random(0);}
  if (y2>400) {y2=random(400);}
  circle (x3--, y3--, 35);
  if (x3>400 || x3<0) {x3=random(400);}
  if (x3>400 || x3<0) {y3=random(400);}
  if (y3>400 || y3<0) {x3=random (400);}
  if (y3>400 || y3<0) {y3=random(400);}
  circle (x4--, y4--, 60);
  if (x4>400 || x4<0) {x4=random(400);}
  if (x4>400 || x4<0) {y4=random(400)}
  if (y4>400 || y4<0) {x4=random (400);}
  if (y4>400 || y4<0) {y4=random(400);}

  //crust
  fill (255,215,0)
  circle (200,200,380);
  //sauce
  fill (255,69,0)
  circle (200, 200, 340)
  //cheese 
  fill (255,250,205)
  circle (200, 200, 320)
  //pep
  fill(205,92,92)
  circle (130, 150, pepperoniSize)
  circle (120, 280, pepperoniSize)
  circle (230, 190, pepperoniSize)
  circle (200, 320, pepperoniSize)
  circle (250, 80, pepperoniSize)
  circle (290, 270, pepperoniSize)
//olives 
fill (0, 0, 20)
ellipse (140, 70, OliveWidth, OliveHeight)
ellipse (310, 170, OliveWidth, OliveHeight)
ellipse (100, 230, OliveWidth, OliveHeight)
ellipse (80, 170, OliveHeight, OliveWidth)
ellipse (240, 120, OliveHeight, OliveWidth)
ellipse (210, 260, OliveHeight, OliveWidth)
ellipse (250, 320, OliveWidth, OliveHeight)
//Olive Move
ellipse (OliveX, OliveY, OliveHeight, OliveWidth)
//peppers
fill (154,205,50)
triangle (180, 70, 190, 75, 170, 85)
triangle (250, 150, 260, 155, 265, 140)
triangle (170, 220, 180, 230, 175, 240)
triangle (100, 215, 110, 225, 105, 210)
triangle (320, 210, 310, 220, 305, 205)
//peperoni add
fill(205,92,92)
circle (PepX, PepY, pepperoniSize)

//signature
fill (200, 0, 0);
stroke(5);
textSize(TextSize);
text("Aubrey Frissell", 290, 390)
//Title
textSize (TextSize + 6)
text("Pizza Party!", 5, 20)

 //lines cut
  line (200, 10, 200, 390)
  line (10, 200, 390, 200)
  line (65, 65, 200, 200)
  line (335, 335, 200, 200)
  line (200, 200, 335, 65)
  line (200, 200, 65, 335)
  
}

function mouseClicked() {
PepX=mouseX;
PepY=mouseY;
}
//Move olive with keyboard
function keyPressed(){
  if (key=='a')
  { OliveX-=5; }
  else if (key=='d')
  {OliveX+=5}
  else if (key=='w')
  {OliveY-=5;}
  else if (key=='s')
  {OliveY+=5;}
}