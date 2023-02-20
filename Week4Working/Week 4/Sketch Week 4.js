//VARIABLES START HERE!!!!!

var character;
var idleAnimation = [];
var characterObjects = [];
var i = 0;
var x = 0;



//PRELOAD HERE: insert characters

function preLoad() {
character= new imageClass('../Assets/Idle (1).png', 0, 0)
characterObjects [0] = character;
character= new imageClass('../Assets/Idle (2).png', 0, 0)
characterObjects [1] = character;
character= new imageClass('../Assets/Idle (3).png', 0, 0)
characterObjects [2] = character;
character= new imageClass('../Assets/Idle (4).png', 0, 0)
characterObjects [3] = character;
character= new imageClass('../Assets/Idle (5).png', 0, 0)
characterObjects [4] = character;
character= new imageClass('../Assets/Idle (6).png', 0, 0)
characterObjects [5] = character;
character= new imageClass('../Assets/Idle (7).png', 0, 0)
characterObjects [6] = character;
character= new imageClass('../Assets/Idle (8).png', 0, 0)
characterObjects [7] = character;
character= new imageClass('../Assets/Idle (9).png', 0, 0)
characterObjects [8] = character;
character= new imageClass('../Assets/Idle (10).png', 0, 0)
characterObjects [9] = character;
character= new imageClass('../Assets/Idle (11).png', 0, 0)
characterObjects [10] = character;
character= new imageClass('../Assets/Idle (12).png', 0, 0)
characterObjects [11] = character;
character= new imageClass('../Assets/Idle (13).png', 0, 0)
characterObjects [12] = character;
character= new imageClass('../Assets/Idle (14).png', 0, 0)
characterObjects [13] = character;
character= new imageClass('../Assets/Idle (15).png', 0, 0)
characterObjects [14] = character;

for (var i = 0; j < characterObjects.length; i++) {
  idleAnimation[i] = characterObjects[i].getImage();
}

}



//SETUP FUNCTION START HERE!!!!!

function setup() {
  //create canvas
  createCanvas(600, 400);
  //for loop Idle Animation

  //XALT for (var j = 0; j < idleAnimation.length; j++); 
  //XAlt person = loadImage(idleAnimation[j]);
  //XAlt2 animation [j] = person;


  //Set timer

  setInterval(incrementIndex, 50);
}


//END OF SETUP, START OF DRAW HERE!!!!


function draw() {
background(120);
//frame drawn here, based on array index
image(idleAnimation[i], characterObjects[i].getX(), characterObjects[i].getY());

}
//functions
function incrementIndex() 
{
  //increment index, then start over.
  i += 1;
  if (i >= idleAnimation.length) {
    i = 0;
  }
}


