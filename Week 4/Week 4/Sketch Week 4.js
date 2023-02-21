//GLOBAL VARIABLES START HERE!!!!!

var character;
var idleAnimation = [];
var apples = [];
var characterObjects = [];
var j = 0;
var appleX;
var appleY;
var appleSize;
var appleColor;
var i = 0



//PRELOAD HERE: insert characters
//Note: x local, y local, w, h
function preload() {
  //These variables below I want to remain local
var x = 0;
var y = 0;
var w = 150;
var h = 150;
character= new imageClass('../Assets/Idle (1).png', x, y, w, h)
characterObjects [0] = character;
character= new imageClass('../Assets/Idle (2).png', x, y, w, h)
characterObjects [1] = character;
character= new imageClass('../Assets/Idle (3).png', x, y, w, h)
characterObjects [2] = character;
character= new imageClass('../Assets/Idle (4).png', x, y, w, h)
characterObjects [3] = character;
character= new imageClass('../Assets/Idle (5).png', x, y, w, h)
characterObjects [4] = character;
character= new imageClass('../Assets/Idle (6).png', x, y, w, h)
characterObjects [5] = character;
character= new imageClass('../Assets/Idle (7).png', x, y, w, h)
characterObjects [6] = character;
character= new imageClass('../Assets/Idle (8).png', x, y, w, h)
characterObjects [7] = character;
character= new imageClass('../Assets/Idle (9).png', x, y, w, h)
characterObjects [8] = character;
character= new imageClass('../Assets/Idle (10).png', x, y, w, h)
characterObjects [9] = character;
character= new imageClass('../Assets/Idle (11).png', x, y, w, h)
characterObjects [10] = character;
character= new imageClass('../Assets/Idle (12).png', x, y, w, h)
characterObjects [11] = character;
character= new imageClass('../Assets/Idle (13).png', x, y, w, h)
characterObjects [12] = character;
character= new imageClass('../Assets/Idle (14).png', x, y, w, h)
characterObjects [13] = character;
character= new imageClass('../Assets/Idle (15).png', x, y, w, h)
characterObjects [14] = character;
//for loop for arrays. go though, reset at length of array
for (var j = 0; j < characterObjects.length; j++) {
  idleAnimation[j] = characterObjects[j].getImage();
}
//setting max x: with of canvas, setting max y as height. 
var maxX=600;
var maxY=400;

//for loop, apples. 6 apples total, 3 red, 3 green.
for(var i=0; i<6; i++)
{
  if(i<3)
  {
    apples[i]=new apple(random(0,maxX), random(0,maxY), 30, "red")
  }
  else
  {
    apples[i]=new apple(random(0, maxX), random(0, maxY), 20, "green")
   }
  }
}



//SETUP FUNCTION START HERE!!!!!

function setup() {
  //create canvas
  createCanvas(600, 400);

  //Set timer
  setInterval(incrementIndex, 50);
}


//END OF SETUP, START OF DRAW HERE!!!!


function draw() {
background(240,248,255);
//for loop for drawing apples. 6 max
for(var i=0; i<6; i++)
{
  apples[i].draw();
}
//Draw animations, get values for width, height, x, and y.
idleAnimation[j].resize(characterObjects[j].getW(),characterObjects[j].getH()) 
image(idleAnimation[j], characterObjects[j].getX(), characterObjects[j].getY());

}
//functions
function incrementIndex() 
{
  //increment until end of index, then start over.
  j += 1;
  if (j >= idleAnimation.length) {
    j = 0;
  }
}


