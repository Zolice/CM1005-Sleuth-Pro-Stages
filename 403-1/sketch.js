/*

Officer: 5533988
CaseNum: 403-1-44629149-5533988

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Norbert's Weiner Stand.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 63 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 63 pixels of Norbert's Weiner Stand - 
draw a OrangeRed ellipse with a radius of 63 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
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

  if (mouseX >= 513 && mouseX <= 642 && mouseY >= 247 && mouseY <= 376) {
    fill(255, 69, 0);
    ellipse(577, 311, 126, 126);
  }
  566, 301, 589, 323


  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
