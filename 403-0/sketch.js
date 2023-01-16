/*

Officer: 5533988
CaseNum: 403-0-34347814-5533988

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading south on Leodorf Way.
I need you to sound the alarm if he crosses Reynolds Street.

Shiffman's position is signified by the mouse. To sound the alarm - draw a DarkGreen rectangle covering the entire map from Reynolds Street to the south.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
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
  if (mouseY >= 450) {
    fill(0, 100, 0)
    rect(0, 450, 2278, 510);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
