var box, player, cloud, circle;

var gameOver = false;
//Number of boxes is the number of impassable boxes that appear
//Walls that spawn randomly. Creates some interest. 
var numberOfBoxes= 4;
var walls = [];

//APPLE VARIABLES HERE
//AppleStartSpeed will determine the starting speed when an apple spawns. Launches randomly to bounce off the new

var AppleStartSpeed = 6;
var redApples;
var greenApples;
//NOTE: numberOfApples will be the number of apples of each type. So 5 apples will spawn 5 red, 5 green. 10 total.
var numberOfApples=6;

//Character variables. Lives, size (Recommend 200), character speed. 1 very slow, 5 very fast.
var playerLives = 2;
var playerSize = 200;
var charSpeed = 3;
var scoreToWin = 15;

//Change canvas dimensions. I believe everything *should* scale to this if changed. 
var canvasMaxX=800;
var canvasMaxY=500;

//Health Item Variables
var healthX;
var healthY;
var healthHealth = 1;
var numberClicks=0;
var backgroundSong;

//uni var for p “particle”
let particles = [];

function preload()
{

  //Create Player, lives, and score "bottom" (zero).
  player = createSprite(playerSize, playerSize);
  player.lives=playerLives;
  player.score=0;
//player.collider='kinematic';
//Load animations: idle (normal), walking, dead, jumping. 
  player.addAnimation("normal", "Assets/Idle000.png", "Assets/Idle014.png");
  player.addAnimation("walking", "Assets/Walk0001.png", "Assets/Walk0015.png");
  player.addAnimation("dead", "Assets/Dead0001.png", "Assets/Dead0015.png");
  player.addAnimation("jumping", "Assets/Jump0001.png", "Assets/Jump0015.png");
  //load sounds attempt
  soundFormats('mp3', 'ogg', 'wav');
  backgroundSong = loadSound('Assets/HopeSong.wav');
}

function setup() {
  createCanvas(canvasMaxX,canvasMaxY);  
  
  //This is the example code for creating sprites, for my reference. Create sprite, it will be a square,
  //and then via cloud (online) it will ass an image, in this case a gray circle I think. Since it doesn't 
  //have the functionality of the original example. 
  //cloud = createSprite(600, 200);
  //cloud.addAnimation("normal", "Assets/cloud_breathing0001.png", "Assets/cloud_breathing0009.png");
  
  //Below is the asset to add in the example cloud from the example code from p5play. Not used in my code, here 
  //to reference. 
  //player.addAnimation("round", "Assets/asterisk_circle0006.png", "Assets/asterisk_circle0008.png");
  
  //Using "groups" as a way to get around various issues. From p5play. Create red and green apple groups
  //Here, as well as their basic characteristics
  addWalls();
  redApples=new Group();
  noStroke;
  redApples.color='red';
  redApples.diameter=40;
  greenApples=new Group();
  noStroke;
  greenApples.color='green';
  greenApples.diameter=30;
  //for loop to scall the apples. i<numberOfApples. Universal variable, change on top. 
  for(var i=0;i<numberOfApples;i++)
  {
    spawnRedApple();
    spawnGreenApple();
  }
  healthX = random(0, canvasMaxX,)
  healthY = random(0, canvasMaxY)

}
  
function playBackgroundSound()
{
  backgroundSong.loop();
}

//Invisable wall barriers. 
function addWalls()
{
  for(var i=0;i<numberOfBoxes;i++)
  {
    box = createSprite(200, 200);
    box.collider = 'static';
    //box.addAnimation("normal", "Assets/box0001.png", "Assets/box0003.png");
    box.x=random(0,width);
    box.y=random(0,height);
    walls.push(box);
  }
}
//Function for spawning the RED, then GREEN apples. Used a new function from p5play "velocity". It looks
//intersting so I tried it out instead of the previous apple movement. Causes them to drift and loose speed
//upon impacts. Pretty neat!
function spawnRedApple()
{
  theApple=new redApples.Sprite();
  theApple.x=random(0,width);
  theApple.y=random(0,height);
  theApple.velocity.x=random(-AppleStartSpeed,AppleStartSpeed);
  theApple.velocity.y=random(-AppleStartSpeed,AppleStartSpeed);
}
//Green Apples Spawning function. When called, create new apple, betwen 0 andmaxX and maxY, Velocity
//here as well! Some randomness in it, for unpredictability. Var AppleStartSpeed (sorry not camel cap)
//AppleStartSpeed set to "6", change in global variables to speed up or slow down. Awesome!
function spawnGreenApple()
{

  theApple=new greenApples.Sprite();
  theApple.x=random(0,width);
  theApple.y=random(0,height);
  theApple.velocity.x=random(-AppleStartSpeed, AppleStartSpeed);
  theApple.velocity.y=random(-AppleStartSpeed,AppleStartSpeed);
}
//New Function: Health Item creation
function showHealthItem()
{
  fill(255, 255, 255)
  square(healthX, healthY, 30)
  fill(102, 153, 204);
  stroke(102, 153, 204)
  rect (healthX, healthY+10, 30, 10)
  rect (healthX+10, healthY, 10, 30)

}

//Called this "wrapping" because originally the plan was to make the apple reappear on the other side. 
//Changed course, used a bouncing off the walls, but with velocity instead of straightforward movement. 
//Velocoty reversed when it reaches edges of canvas. "width" and "height" are set by default, to fit canvas.
//! means NOT
function handleAppleWrapping()
{
  for(var i=0;i<redApples.length;i++)
  {
    if(!redApples[i])
    {
      return;
    }
    if (redApples[i].x<0)
    {
      redApples[i].velocity.x*=-1;
    }
    if (redApples[i].x>width)
    {
      redApples[i].velocity.x*=-1;
    }
    if (redApples[i].y>height)
    {
      redApples[i].velocity.y*=-1;
    }
    if (redApples[i].y<0)
    {
      redApples[i].velocity.y*=-1;
    }
  }
// Green apples. 
  for(var i=0;i<greenApples.length;i++)
  {
    if(!greenApples[i])
    {
      return;
    }
    if (greenApples[i].x<0)
    {
      greenApples[i].velocity.x*=-1;
    }
    if (greenApples[i].x>width)
    {
      greenApples[i].velocity.x*=-1;
    }
    if (greenApples[i].y>height)
    {
      greenApples[i].velocity.y*=-1;
    }
    if (greenApples[i].y<0)
    {
      greenApples[i].velocity.y*=-1;
    }
  }
}
//Display Lives
function drawLives()
{
  stroke (300)
  textSize(10);
  text("Lives: "+player.lives,10,10);
}
//Function to display score. 
function drawScore()
{
  stroke (300, 300, 300)
  textSize(10);
  text("Score: "+player.score,10,20);
}
//Collisions for RED apples. Remove the apple, timer, replace, increase core by 1. 
function handleRedAppleCollision(player, apple)
{
  apple.remove();
  setTimeout(spawnRedApple,1000);
  player.score++;
}
//When you lose or die. Lose display YOU LOSE upon 0 lives. If score is >10, then YOU WIN. 
//Related animations also play. Jumping win, dead animation if lose. For win, loop, for lose, do not. 
//Holds "dead" final frame. Yay! 
function handleVictoryOrLoss()
{
  textSize(100);
  if(player.lives<=0)
  {
    text("YOU LOSE!", 100, 100);
    fill (300, 300, 300)
    if (!gameOver) {
      player.changeAnimation("dead");
      player.animation.looping = false;
      gameOver=true;
    }

  }
  else
  {
    if (player.score>=scoreToWin)
    {
      stroke (300, 300, 300)
      fill (300, 300, 300)
      text("YOU WIN!",100,100);
      player.changeAnimation("jumping");
      gameOver=true;
    }
  }

}

//Collion for green apple using variables "player" "apple". Removes apple, Set timer, decrease life score
//by 1. 
function handleGreenAppleCollision(player,apple)
{
  apple.remove();
  setTimeout(spawnGreenApple,1000);
  player.lives--;
}
//DRAW STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
function draw() {
  background(173, 216, 230); 
   
  //Remember: "Wrapping" isn't a true wrap, but a bounce. Sorry, don't feel like changing name.
  handleAppleWrapping();
  
  player.velocity.x=0;
  player.velocity.y=0;
  player.animation.scale=0.25;
  var guyDir=1;
  //If not hame over, if score greater than 0, if going left, play walk animation, change direction and velocity.
  //Same premise with other directions. (KEYBOARD COMMANDS BELOW FOR ARROW KEYS)
  //Universal Variable charSpeed will determine speed of character. 
  if(gameOver==false)
  {
    player.changeAnimation("normal");
    if (player.lives > 0) {
      if (kb.pressing('left')) {
        player.changeAnimation("walking");
        player.velocity.x = -charSpeed;
        guyDir = -1;
      }

      if (kb.pressing('right')) {
        player.changeAnimation("walking");
        player.animation.scale.x *= 1;
        player.animation.offset.x = -100;
        player.velocity.x = +charSpeed;
        guyDir = 1;
      }
      if (kb.pressing('up')) {
        player.changeAnimation("walking");
        player.velocity.y = -charSpeed;
      }
      if (kb.pressing('down')) {
        player.changeAnimation("walking");
        player.velocity.y = +charSpeed;
      }
    }
    //Flip character
    if (guyDir == 1) {
      player.animation.scale.x *= 1;
      player.animation.offset.x = 100;
    }
    else {
      player.animation.scale.x *= -1;
      player.animation.offset.x = 100;
    }
  }
 
  player.rotation=0;
  
  //collide also returns a true/false but it can simply be used to
  //resolve collisions. 
  //If overlapping with box player will be placed 
  //in the closest non overlapping position
  for(var i=0;i<walls.length;i++)
  {
  player.collides(walls[i]);

  }
  player.overlaps(greenApples,handleGreenAppleCollision);
  player.overlaps(redApples,handleRedAppleCollision);
  
  //displace is the opposite of collide, the sprite in the parameter will
  //be pushed away but the sprite calling the function
  //player.displace(cloud);
    
  //DEBUG: This is so I can see things. Debug, and show the hitbox of character and circle. When you
  //hold down the mouse button. 
  player.debug = mouseIsPressed;
  circle.debug = mouseIsPressed;
  box.debug = mouseIsPressed;
  //cloud.debug = mouseIsPressed; (old)
   //Call functions here. Draw score, lives, sprites and victory/loss function
  drawScore();
  drawLives();
  drawSprites();
  handleVictoryOrLoss();
  //Show Health Item. Starts at 1, automatically shows. 
  if (healthHealth > 0) 
{
showHealthItem();
}
if (healthHealth!=0 && dist(player.x, player.y, healthX, healthY) <100 && kb.pressing('space'))
{
 //New particle pushed each time it cycles through draw. (a lot!)
 for(let i=0;i<40;i++)
 {
    let p = new Particle
    particles.push(p);

 }
healthHealth=0
}


 for (let i = 0; i < particles.length; i++) {
  particles[i].update();
  particles[i].show();
  if (particles[i].endParticle()){
particles.splice (i, 1);
  }
}
}
//END OF DRAW

//vx and vy velocity 
class Particle {

constructor() {
this.x = healthX + 15;
this.y = healthY + 5;
this.vx = random(-1, 1);
this.vy = random(-5, -1);
this.alpha = 255
}


//Update function for particles
update() {
this.x += this.vx
this.y += this.vy
this.alpha -= 5;
}
//show. Third value is the size of the circles. The diameter. 
show(){
  noStroke();
  fill (255, this.alpha);
  ellipse(this.x, this.y, 8)
}
//delete particle function
endParticle() {
  return this.alpha < 0;
}
}



//TODO: Add sound. Issue with sound: When linked, it creates an infinite loop and breaks the program.
//May attempt again, at least on final. But not enough time now and not in criteria. 
//ALSO add borders, for the character and a visual barrier for visual benefit. 
//ALSO could fix bug that makes character huge for plit second when start. Also, could maybe center that
//flip better. IF we continue with this. 


//Background Music Trigger
function keyPressed() {
  numberClicks += 1;
  if (numberClicks == 1){
  backgroundSong.loop();
  }
}