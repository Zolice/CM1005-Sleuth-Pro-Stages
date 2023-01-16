/*

Officer: 5533988
CaseNum: 101-3-88373835-5533988

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Maroon filled rectangle with a Dark Violet outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Turquoise filled
rectangle with a Pale Violet Red outline around him.

Identify the man reading the newspaper by drawing a Dark Orange filled rectangle
with a Magenta outline around him.

Identify the woman with the dog by drawing a Yellow filled rectangle with a
Cyan outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	strokeWeight(2);
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...
	fill(128, 0, 0, 50)
	stroke(148, 0, 211)
	rect(15, 238, 265, 570)

	fill(64, 224, 208, 50)
	stroke(219, 112, 147)
	rect(791, 510, 258, 341)

	fill(255, 140, 0, 50)
	stroke(255, 0, 255)
	rect(1306, 325, 180, 353)

	fill(255, 255, 0, 50)
	stroke(0, 255, 255)
	rect(541, 292, 219, 479)




	//A helpful mouse pointer
	push();
	fill(0);
	noStroke();
	text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();


}
