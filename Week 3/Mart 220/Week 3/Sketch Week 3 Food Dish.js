var x = 200;
var y = 200;
var x2 = 500;
var y2 = 500;
var x3 = 500;
var y3 = 500;
var x4 = 300;
var y4 = 300;
//pepperoni Size
pepperoniSize=50
//Movable Pep Original Position
var PepX= 370;
var PepY= 350;
//Text Size
var TextSize= 15;
//olive variables
var OliveWidth=20;
var OliveHeight=30;
//movable Olive variables
var OliveX=370;
var OliveY=45;

//Cat Text Variables
var catTextSize=.1;
var catTextX=100;
var CatTextY=280

//Cat Text Timer
var timerCatValue = 20;
var timerStart;

//Declaring Image Variables
let spork;
let kingCat;
let moth;

//Moth Variables
var mothX=400;
var mothY=400;

//Text Call
let myFontTitle
let myFontName

//Find images
function preload() {
  spork = loadImage('../CodingImages/Spork.png');
  kingCat = loadImage('../CodingImages/KingCat.png');
  moth = loadImage('../CodingImages/AssetMoth.png');
  //Find Fonts
  myFontTitle = loadFont('../CodingFonts/groovyTitleText.ttf');
  myFontName = loadFont('../CodingFonts/writingText.ttf');
}

//CREATE CANVAS
function setup() {
  createCanvas(500,400);

  //random shapes
  for (i=0; i<10; i++) {
    x=random(500);
    y=random(400);
    x2=random(500);
    y2=random(400);
    x3=random(500);
    y3=random(400);
    x4=random(500);
    y4=random(400);
  }
  //CatTimer SetInterval
  setInterval(timeIt, 1000);
}

//END OF SETUP, START OF DRAW HERE!!!!

function draw() {
  
  //PIZZA!!!

  //Green Table
  background(0, 128, 0);
  //random circles
  fill (0,60,0)
  circle (x++, y++, 25);
  if (x>500) {x=random(0);}
  if (x>500) {y=random(500)}
  if (y>500) {x=random(0);}
  if (y>500) {y=random(500);}
  circle (x2++, y2++, 50);
  if (x2>500) {x2=random(0);}
  if (x2>500) {y2=random(500)}
  if (y2>500) {x2=random(0);}
  if (y2>500) {y2=random(500);}
  circle (x3--, y3--, 35);
  if (x3>500 || x3<-35) {x3=random(500);}
  if (x3>500 || x3<-35) {y3=random(500);}
  if (y3>500 || y3<-35) {x3=random (500);}
  if (y3>500 || y3<-35) {y3=random(500);}
  //Note: I traded the 0 for -35 and -40 so the circles would leave the screen before reappearing.
  circle (x4--, y4--, 60);
  if (x4>500 || x4<-60) {x4=random(500);}
  if (x4>500 || x4<-60) {y4=random(500)}
  if (y4>500 || y4<-60) {x4=random (500);}
  if (y4>500 || y4<-60) {y4=random(500);}
  //Cat Text: If you click, it appears.
  if (PepX<100 && PepY>220) {catTextSize=(10);}


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
textFont (myFontName)
text("Aubrey Frissell", 410, 390)
//Title
textFont (myFontTitle)
textSize (TextSize + 10)
text("College Pizza", 5, 30)

 //lines cut
  line (200, 10, 200, 390)
  line (10, 200, 390, 200)
  line (65, 65, 200, 200)
  line (335, 335, 200, 200)
  line (200, 200, 335, 65)
  line (200, 200, 65, 335);

image(spork,400,20, 80, 330);
image(kingCat, -25, 210, 140, 220)

//catText
textSize(catTextSize)
text("Pizza sure sounds good, huh? It'll be done in:", catTextX, CatTextY)
if (timerCatValue >= 10) {
  text('0:" + timerCatValue')
}
//timer draw cat
if (timerCatValue >= 10) {
  text("0:" + timerCatValue, catTextX, CatTextY+10);
}
if (timerCatValue < 10) {
  text('0:0' + timerCatValue, catTextX, CatTextY+10);
}
if (timerCatValue == 0) {
  text('DONE!!!!', catTextX, CatTextY+20);
}


 //moth try!!!!!!!!!!!!!!!!!!!!
 image(moth, mothX-=.5, mothY-=2, 200, 100)
 image
 if (mothX>=500 || mothX<=-400) {mothX=499}
 if (mothY>=400 || mothY<=-400) {mothY=399}
 

}
//END OF DRAW

//Cat Timer Draw
function timeIt() {
  if (timerCatValue > 0) {
    timerCatValue--;
    }
    else if (timerCatValue < 0)
    timerCatValue = 10
  }

//Mouse Click Pepperoni Add
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