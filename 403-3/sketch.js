/*

Officer: 5533988
CaseNum: 403-3-25466741-5533988

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Leodorf Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 73 meters from Norbert's Burrito Stall then alert local police by drawing a MediumBlue circle around it with a radius of 73 pixels.
- if Shiffman is in Gates Bank then the neighbourhood watch must be notified by drawing a DodgerBlue rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a RoyalBlue rectangle covering the area between Gates Avenue, Ada Avenue, Leodorf Way and Packard Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload() {
  img = loadImage('map.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  //Write your code below here ...
  if (dist(mouseX, mouseY, 755, 335) <= 73) {
    fill(0, 0, 205);
    ellipse(755, 335, 73 * 2, 73 * 2);
  }

  else if (mouseX > 1435 && mouseX < 1528 && mouseY > 748 && mouseY < 835) {
    fill(30, 144, 255);
    rect(1435, 748, 93, 87)
  }

  else {
    fill(65, 105, 225);
    rect(0, 635, 1024, 40);
    rect(0, 244, 1024, 40);
    rect(97, 0, 40, height);
    rect(1708, 0, 40, height);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);


  // a helpful mouse coordinate pointer
  fill(255);
  noStroke();
  text(`${mouseX},${mouseY}`, mouseX, mouseY);

}
