//Univeral variables-Switched to "let" this week. Idk the difference between "let"
//and "var" tbh. 
let objects = [];
let reverse = false;
let charObject;
let charAngle = 0;
let charDirection = 1;
//Declare textures
let canTexture;
let charTexture;
let coneTexture;
let cubeTexture;
let titleTexture;

//PRELOAD HERE: Load in custom model and textures. Finally, text texture for the plane.
function preload() {
  charObject = loadModel('Assets/char.obj');

  charTexture = loadImage('Assets/charTexture.jpg');
  canTexture = loadImage('Assets/canTexture.jpeg');
  cubeTexture = loadImage('Assets/cubeTexture.png');
  sphereTexture = loadImage('Assets/sphereTexture.jpeg');
  coneTexture = loadImage('Assets/coneTexture.jpg');

  titleTexture = loadImage('Assets/textTitleName.png')
}
//SETUP START HERE. Declare qualities of each object. Here you can change size, 
//distance from center, angle, etc. Angle increment changes how quickly it spins. (Keep it low and slow)
//Worth noting: Speed will automatically change with distance from center. Closer, slower orbit. Farther faster.
function setup() {
  createCanvas(800, 600, WEBGL);

  // Create the cone object
  let coneObj = {
    type: 'cone',
    size: 50,
    distance: 100,
    angle: 0,
    angleIncrement: 0.01,
  };

  // Create the sphere object
  let sphereObj = {
    type: 'sphere',
    size: 50,
    distance: 150,
    angle: PI / 2,
    angleIncrement: 0.01
  };

  // Create the cylinder object... I tried to make it really shiny, but couldn't 
  let cylinderObj = {
    type: 'cylinder',
    size: 50,
    distance: 125,
    angle: PI,
    shininess: 300,
    angleIncrement: 0.01,
    material: {
      specularColor: color(255, 255, 255),
      emissiveColor: color(0, 0, 0)
    }
  };

  // Create the box object
  let boxObj = {
    type: 'box',
    size: 50,
    distance: 200,
    angle: 3 * PI / 2,
    angleIncrement: 0.01
  };

  //Objects all together in array. Add via "push"
  objects.push(coneObj);
  objects.push(sphereObj);
  objects.push(cylinderObj);
  objects.push(boxObj);

  //Lighting here. LOW ambient, HIGH point, creates high contrast image. Allows gray
  //blob to look like a statue of my fella
  ambientLight(50);
  pointLight(255, 255, 255, 0, 0, 0);
}
//Function for clicking and getting objects to reverse. If the mouse is clicked, it will
//reverse. Angle increment negated, changing orbit to opposite direction. 
function mouseClicked() {
  reverse = !reverse;
  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    obj.angleIncrement *= -1;
  }
}
//DRAW START HERE. 
function draw() {
  background(0);

  //Here I connect point light to where the mouse is on the canvas. This is what makes it
  //work best, based on the trick I found online. Ponint light (color, color, color, x, y, z).
  //x and y of point light changes, z stays the same. Could be fun to make z go front and back w/ 
  //arrow keys. 
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  pointLight(255, 255, 255, dx, dy, 500);

  //This creates our main fella in the center. Could NOT get textures to sync, had to make him a stone statue.
  //Scale changes the size. 
  push();
  noStroke();
  texture(charTexture);
  rotateY(radians(charAngle));
  rotateX(radians(180));
  rotateY(radians(180));
  scale(75);
  model(charObject);
  pop();

  //This allows the character to shift back and fourth between a reasonable angle, so that it stays facing the cam.
  charAngle += charDirection * 0.15;
  if (charAngle >= 35) {
    charDirection = -1;
  } else if (charAngle <= -35) {
    charDirection = 1;
  }

  //For loop that draws the objects from thge array, cycling through ut and drawing them all. 
  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];

    push();
    noStroke();
    fill(0);

    //Here thge object moves. Found this trick for orbit, using Math. cos(angle), etc. Very cool,
    //sin and cosin are good for finding the location of where the objects should be on the coordinate
    //plane. Would LIKE toi review this more so I could understand it even better, but I got it working for 
    //These objects. 
    let angle = obj.angle;
    translate(obj.distance * Math.cos(angle), 0, obj.distance * Math.sin(angle));

    //This is where the objects rotate, so you can see more sides.
    rotateY(angle);
    rotateX(angle);

    //Here is where we actually draw each object. This is where we also add TEXTURES, in DRAW. Kind of a funky way
    //to do it, at least to me, but I like how organized it feels. Here you can change SIZE and TEXTURE.
    switch (obj.type) {
      case 'cone':
        texture(coneTexture);
        cone(20, 80);
        break;
      case 'sphere':
        texture(sphereTexture);
        sphere(obj.size);
        break;
      case 'cylinder':
        texture(canTexture);
        cylinder(25, 85);
        break;
      case 'box':
        texture(cubeTexture);
        box(obj.size);
        break;

    }
    pop();

    //The objects angles will slowly (increment) tilt as they go. object angles. 
    obj.angle += obj.angleIncrement;
  }
   //Finally, here is the plane for the title. Plane (w, h), use translate to shift down.
   push();
   noStroke();
   translate(0, 100, 100)
   texture (titleTexture)
   plane (200, 80)
   pop();
}
