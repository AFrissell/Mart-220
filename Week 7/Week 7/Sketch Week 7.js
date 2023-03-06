//GLOBAL VARIABLES START HERE!!!!!

var character;
//Decleration of idle animation array, apple array, and character object array. 
var idleAnimation = [];
var walkingAnimation = [];
var apples = [];
var characterObjects = [];
var characterWalkingObjects = [];
var j = 0;
var appleX;
var appleY;
var appleSize;
var appleColor;
var i = 0
var score=0;

var txt;

var characterX=100;
var characterY=100;
var characterIsWalking=0;

var maxX=600;
var maxY=400;
var idleAnimFilePaths ;
var goodAppleSound;
var badAppleSound;

var backgroundMusic;
var numberClicks = 0;
//PRELOAD HERE: insert characters" Idle animation and also walk. Then preload sounds for apples eaten and theme
//TODO: Themesong triggered by key press. 
function preload() {

  idleAnimFilePaths = loadStrings("idle.txt")
  walkingAnimFilePaths = loadStrings("walk.txt")
  soundFormats('mp3');
  badAppleSound=loadSound('Assets5/badApple.mp3');
  goodAppleSound=loadSound('Assets5/goodApple.mp3');
  backgroundMusic=loadSound('Assets5/HopeSong.wav');
  fontTitle = loadFont('Assets5/Sweets Smile.ttf')
}



//SETUP FUNCTION START HERE!!!!!

function setup() {

  //create canvas
  createCanvas(maxX, maxY);

  //Set timer
  setInterval(incrementIndex, 50);
  //These variables below I want to remain local. Control panel for character variables 
  var x = 0;
  var y = 0;
  var w = 150;
  var h = 150;
  console.log(idleAnimFilePaths)

  for (var i = 0; i < idleAnimFilePaths.length; i++) {
    character = new imageClass('Assets5/' + idleAnimFilePaths[i], x, y, w, h)
    characterObjects[i] = character;
  }

  console.log(characterObjects)


  for (var i = 0; i < walkingAnimFilePaths.length; i++) {
    character = new imageClass('Assets5/' + walkingAnimFilePaths[i], x, y, w, h)
    characterWalkingObjects[i] = character;
  }

  //for loop for idle animation array. j starts at 0, and as long as it is less than the array, it will
  //increase by 1 and display.
  for (var j = 0; j < characterObjects.length; j++) {
    idleAnimation[j] = characterObjects[j].getImage();
    walkingAnimation[j] = characterWalkingObjects[j].getImage();
  }
  //setting max x: with of canvas, setting max y as height. 

  //for loop, apples. 6 apples total, 3 red, 3 green.
  for (var i = 0; i < 6; i++) {
    if (i < 3) {
      apples[i] = new apple(random(0, maxX), random(0, maxY), 30, "red")
    }
    else {
      apples[i] = new apple(random(0, maxX), random(0, maxY), 20, "green")
    }
  }
}

//END OF SETUP, START OF DRAW HERE!!!!


function draw() {
background(240,248,255);
//scoreboard
textSize(10)
text("Score: " + score,10,20);
textSize(20);
textFont(fontTitle);
text("Apple Crunch!", maxX / 2 - 50 , 30)
fill (32,178,170);
rect(0, 5, 5, maxY);
rect (0, 0, maxX, 5);
//Width plus height 
rect (0, maxY-5, maxX, 5);
rect (maxX - 5, 0, 5, maxY);
//for loop for drawing apples. 6 max. Also, 
for(var i=0; i<apples.length; i++)
{
  if(apples[i])
  {
    apples[i].draw();
    apples[i].update();
  }
}
//Walking: Assign direction and speed. charSpeed determines speen. 1 is slow, 5 is zoomin'. 3 balanced. 
  characterIsWalking=0;

  var guyDir = 1;
  var charSpeed=  3;

if(keyIsDown(LEFT_ARROW))
{
  var guyDir=-1;
  characterX -= charSpeed;
  characterIsWalking=1;
}
if(keyIsDown(RIGHT_ARROW))
{
  characterX += charSpeed;
  characterIsWalking=1;
  
}
if(keyIsDown(UP_ARROW))
{
  characterY -= charSpeed;
  characterIsWalking=1;
}
if(keyIsDown(DOWN_ARROW))
{
  characterY += charSpeed;
  characterIsWalking=1;
}
//set boundaries for character
if (characterX <= 0)
{characterX=1}
if (characterY <= 0)
{characterY=0}
if (characterX > maxX)
  {characterX = maxX}
  if (characterY > maxY)
  {characterY = maxY};



//Draw animations, get values for width, height, x, and y. 
//Have character flip: More complicated than anticipated, kept flippung all the way across the canvas.
//Had to CENTER it and work from there because the images had weird dimensions. move 
idleAnimation[j].resize(characterObjects[j].getW(),characterObjects[j].getH()) 
walkingAnimation[j].resize(characterObjects[j].getW(),characterObjects[j].getH()) 
imageMode(CENTER);
push();
scale(guyDir,1);
translate(40,0);
//if chzracter is NOT walking, then cycle through idle frames. Otherwise, cycle though the walk instead. 
if(!characterIsWalking)
{
  image(idleAnimation[j], (characterObjects[j].getX()+(characterX*guyDir)), characterObjects[j].getY()+characterY);
}
else
{
  image(walkingAnimation[j], (characterObjects[j].getX()+(characterX*guyDir)), characterObjects[j].getY()+characterY);

}
pop();
//circle(characterX,characterY,50) SHOWS WHERE NEW 'ORGIN' IS. Pop ends.

handleAppleCollision(characterX,characterY);

}

//functions
function incrementIndex() 
{
  //j is adding 1 each loop, until end of index, then starts over and is reset to 0

  j += 1;
  if (j >= idleAnimation.length) {
    j = 0;
  }
}


//Collisions: I used distance from the character. Within 50 pixels, the apple vanishes (splice) and the sound plays. 
//It will then be replaced on a timer useing setTimeout, and will spawn three red and three green to
//meet the maximum of 6. _x and _y are connected to characterX and character Y at end of draw. 
function handleAppleCollision(_x,_y)
{
  for(var i=0;i<apples.length;i++)
  {
    if(dist(apples[i].x,apples[i].y,_x,_y)<50)
    {
      if(apples[i].appleColor=="red")
      {
        setTimeout(spawnRedApple,1000);
        goodAppleSound.play();
        score++;
      }
      else
      {
        setTimeout(spawnGreenApple,1000);
        badAppleSound.play();
        score--;
      }
      apples.splice(i,1);
      return;
      //return apples[i];
    }
  }
  return null;
}
//defining functions for spawning red and green apples. Push a new apple (add to array) between 0 and 
//max x and max y. 
function spawnRedApple()
{
  apples.push(new apple(random(0,maxX), random(0,maxY), 30, "red"))

}


function spawnGreenApple()
{
  apples.push(new apple(random(0,maxX), random(0,maxY), 20, "green"))

}      
//Background Music Trigger
function keyPressed() {
  if (numberClicks == 1){
  backgroundMusic.loop();
  }
  numberClicks += 1
}