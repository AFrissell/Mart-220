//For this assignment, I wanted to keep it simple (due to a time shortage, as I
//would like to stay caught up. As such, it is simple, and I focused a lot on
//organizing my code. You can see below.)


//GLOBAL VARIABLES. here you can quickly change sizes and speeds.

//Sizes
var boxSize = 55;
var sphereRadius = 45;
var coneRadius = 40;
var cylinderRadius = 15;
var torusRadius = 20;

//Speeds
var boxRotationSpeed = 0.01;
var sphereRotationSpeed = 0.02;
var coneRotationSpeed = 0.05;
var cylinderRotationSpeed = 0.02;
var torusRotationSpeed = 0.04;


//Preload. Simply loading textures and the font here. 
function preload() {
  img = loadImage('Assets/texture1.jpeg');
  img2 = loadImage('Assets/texture2.jpeg');
  img3 = loadImage('Assets/texture3.jpeg');
  img4 = loadImage('Assets/texture4.jpeg');
  img5 = loadImage('Assets/texture5.jpeg');
  title = loadImage('Assets/titleText.png');
}

//Setup, create canvas, texture mode. Very simple setup.
function setup() {
  createCanvas(600, 400, WEBGL);
}

//DRAW STARTS HERE. First, set up background and lights. Then simply each shape.
//Start with push() end with pull();. plane([width], [height], [detailX], [detailY])
function draw() {
  background(1, 2, 30);
  lights();
  
  //Title and name here. Could not use text() function, so my workaround is to add a
  //.png file with the desired text, name and title. 
  push();
  translate(0, 25);
  texture(title);
  plane(160, 60);
  pop();

  //Here is an experimental thing I wanted to try for fun. Making the lighting effected
  //by mouse location. When you move the mouse, the direction of the lighting changes, so
  //you can play around with moon phases and have some extra fun. To expand on this, I could
  //Lower the lighting in the scene, and have the light produced from mouse location stronger and
  //clearer. Could "change" the forward/backward z value with a up arrow and down. Possible for future project? 
  //Very simple simulation of moon phases would be easy. 
  var dirX = (mouseX / width - 0.5) * 2;
  var dirY = (mouseY / height - 0.5) * 2;
  
  //BOX HERE. frameCount * speed sets speed. Adjustable in Global Variables up top.
  //Chose a crumpled paper texture. "translate" sets the position, moving it from 0,0,0.
  push();
  translate(-150, -50, 0);
  rotateX(frameCount * boxRotationSpeed);
  rotateY(frameCount * boxRotationSpeed);
  rotateZ(frameCount * boxRotationSpeed);
  directionalLight(107,142,35, -dirX, -dirY, -1)
  texture(img2);
  box(boxSize);
  pop();
  
  //SPHERE HERE. Chose a moon texture, which looks neat, I think.
  push();
  translate(0, -50, 0);
  rotateY(frameCount * sphereRotationSpeed);
  directionalLight(300,300,300, -dirX, -dirY, -1)
  texture(img4);
  sphere(sphereRadius);
  pop();
  
  //CONE HERE, chose an odd quilt texture. The bottom warps images. "noStroke" rids shapes
  //of their strokes. 
  noStroke();
  push();
  translate(150, -50, 0);
  rotateX(frameCount * coneRotationSpeed);
  rotateY(frameCount * coneRotationSpeed);
  rotateZ(frameCount * coneRotationSpeed);
  directionalLight(300,300,300, -dirX, -dirY, -1)
  texture(img);
  cone(coneRadius, boxSize);
  pop();
  
  //CYLINDER HERE. Chose a label of a coke can, wondered how well it would wrap.
  //It did relatively well honestly. A Soup Can might fit even better though.
  push();
  translate(-75, 100, 0);
  rotateX(frameCount * cylinderRotationSpeed);
  rotateY(frameCount * cylinderRotationSpeed);

  directionalLight(100,20,300, -dirX, -dirY, -1)
  texture(img5);
  cylinder(cylinderRadius, boxSize);
  pop();
  
  //TORUS HERE. Chose the OTHER side of the odd quilt texture, looks pretty cool 
  //in my opinion. The seam down the middle looks great with the seams of the 
  //quilt. I wonder if a patchwork fabric texture style would be a cool thing
  //to experiment with in the future with my own 3D models. 
  push();
  translate(75, 100, 0);
  rotateX(frameCount * torusRotationSpeed);
  rotateY(frameCount * torusRotationSpeed);
  rotateZ(frameCount * torusRotationSpeed);
  directionalLight(72,61,139, -dirX, -dirY, -1)
  shininess(20);
  texture(img3);
  torus(torusRadius, cylinderRadius);
  pop();

  //Could NOT get text() function to work. Workaround .png
  //textSize(32);
  //stroke(50);
  //fill (100, 100, 100)
  //textFont(myFont);
  //text('Items in Space', 100, 100);
}