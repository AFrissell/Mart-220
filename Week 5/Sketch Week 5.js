//GLOBAL VARIABLES START HERE!!!!!

var character;
//Decleration of arrays
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

var txt;

var characterX=100;
var characterY=100;
var characterIsWalking=0;

//maxX and maxY should match canvas width and height. 600x400.
var maxX=600;
var maxY=400;
var idleAnimFilePaths ;
//added x and y as a global var to get rid of annoying dev tool error. Not neccessary though.
var x = 0
var y = 0

//PRELOAD HERE: Two sets of images listed on two different files, idle.txt and walk.txt, preloaded here. 

function preload() {

  idleAnimFilePaths = loadStrings("idle.txt")
  walkingAnimFilePaths = loadStrings("walk.txt")
}


//SETUP FUNCTION START HERE!!!!!

function setup() {
  //create canvas
  createCanvas(600, 400);

  //Set timer
  setInterval(incrementIndex, 50);
  //These variables below I want to remain local. Control panel for character variables 
  var x = 0;
  var y = 0;
  var w = 150;
  var h = 150;
  console.log(idleAnimFilePaths)
//For loop cycling through idle then walk animations. x, y, w, h above are local, and changing them will 
//change starting location and size. 
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

  //For loop, apples. 6 apples total, 3 red, 3 green. Sadly this only works for the starting spawn, and they
  //respawn as red. 
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
background(240,255,248);
//for loop for drawing apples. 6 max
for(var i=0; i<apples.length; i++)
{
  if(apples[i])
  {
    apples[i].draw();
  }
}
  characterIsWalking=0;

  //var guyDir=1;

if(keyIsDown(LEFT_ARROW))
{
  //var guyDir=-1;
  characterX--;
  characterIsWalking=1;
}
if(keyIsDown(RIGHT_ARROW))
{
  characterX++;
  characterIsWalking=1;
  
}
if(keyIsDown(UP_ARROW))
{
  characterY--;
  characterIsWalking=1;
}
if(keyIsDown(DOWN_ARROW))
{
  characterY++;
  characterIsWalking=1;
}
//Note: I added var guyDir above as a part of the attempt to flip the character. 


//Draw animations, get values for width, height, x, and y.
idleAnimation[j].resize(characterObjects[j].getW(),characterObjects[j].getH()) 
walkingAnimation[j].resize(characterObjects[j].getW(),characterObjects[j].getH()) 
if(!characterIsWalking)
{
  image(idleAnimation[j], characterObjects[j].getX()+characterX, characterObjects[j].getY()+characterY);
}
else
{
  image(walkingAnimation[j], characterObjects[j].getX()+characterX, characterObjects[j].getY()+characterY);

}
//-Below I cancelled out this circle, which is used to recenter the "origin" from the top left of the 
//...character to the center. But it is preserved so I can see where it is later. 

//circle(characterX+50,characterY+75,50)

handleAppleCollision(characterX+50,characterY+75);

}

//functions
function incrementIndex() 
{
  //j is adding 1 each loop, until end of index, then starts over and is reset to 0. 

  j += 1;
  if (j >= idleAnimation.length) {
    j = 0;
  }

  //BELOW: -Add character flip: (WORKING). Push to start transformation "chain" and pop ends it and restarts it to default.
//... Must also activate the guyDir under keyboard direction area. 

//   push();
// scale(guyDir,1);
// if(!characterIsWalking)
// {
//   image(idleAnimation[j], (characterObjects[j].getX()+characterX)guyDir, characterObjects[j].getY()+characterY);
// }
// else
// {
//   image(walkingAnimation[j], (characterObjects[j].getX()+characterX)guyDir, characterObjects[j].getY()+characterY);

// }
// pop();
 }


//Function for the collision with apples. If i is less than the length of the apple array, it will increase
//..by 1. apples.splice removes from the array. It reappears after a short time using setTimeout. Altnernative
//..timer from setInterval. Only calls it once, "5000" milisecond from now. 5 seconds. 
function handleAppleCollision(_x,_y)
{
  for(var i=0;i<apples.length;i++)
  {
    if(dist(apples[i].x,apples[i].y,_x,_y)<50)
    {
      apples.splice(i,1);
      setTimeout(spawnApple,5000);
      return;
      //return apples[i];
    }
  }
  return null;
}

//This will make the apples appear. They will randomly generate in
//maxX and maxY, the range of the canvas. They will reaapear as red. Maybe could create a for loop to
//make 3 red and 3 green on canvas at any given time. Will do if asked. 
function spawnApple()
{
  apples.push(new apple(random(0,maxX), random(0,maxY), 30, "red"))

}