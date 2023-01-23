function setup() {
  createCanvas(400,400);
}

function draw() {
  //PIZZA!!!
  //Green Table
  background(0, 128, 0);
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
  circle (130, 150, 60)
  circle (120, 280, 60)
  circle (230, 190, 60)
  circle (200, 320, 60)
  circle (250, 80, 60)
  circle (290, 270, 60)
//olives 
fill (0, 0, 20)
ellipse (140, 70, 30, 20)
ellipse (310, 170, 20, 30)
ellipse (100, 230, 20, 30)
ellipse (80, 170, 30, 20)
ellipse (240, 120, 30, 20)
ellipse (210, 260, 30, 20)
ellipse (250, 320, 20, 30)
//peppers
fill (154,205,50)
triangle (180, 70, 190, 75, 170, 85)
triangle (250, 150, 260, 155, 265, 140)
triangle (170, 220, 180, 230, 175, 240)
triangle (100, 215, 110, 225, 105, 210)
triangle (320, 210, 310, 220, 305, 205)
 //lines cut
  line (200, 10, 200, 390)
  line (10, 200, 390, 200)
  line (65, 65, 200, 200)
  line (335, 335, 200, 200)
  line (200, 200, 335, 65)
  line (200, 200, 65, 335)
}