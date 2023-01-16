/*

Officer: 5533988
CaseNum: 101-2-18905943-5533988

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Saddle Brown filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Sienna filled
rectangle around him.

Identify the man in the striped top by drawing a Dark Blue filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	noStroke();
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...
	fill(139, 69, 19, 50);
	rect(1070, 223, 260, 520)

	fill(160, 82, 45, 50);
	rect(1012, 223, 386, 425);
	fill(0, 0, 139, 50);
	rect(141, 210, 181 ,482);




	//A helpful mouse pointer
	push();
	fill(0);
	noStroke();
	text(mouseX + "," + mouseY, mouseX, mouseY);
	pop();

}
