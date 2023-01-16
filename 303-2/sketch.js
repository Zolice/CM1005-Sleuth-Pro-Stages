/*

Officer: 5533988
CaseNum: 303-2-56050845-5533988

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make Cryptic_box_value0 equal to the value of mouseX
	- Use the 'min' function to prevent Cryptic_box_value0 from going above 9

	When the mouse button is pressed:
	- Decrement Cryptic_box_value1 by 2
	- Use the 'constrain' function to prevent Cryptic_box_value1 from falling below 4 and going above 16

	When the mouse button is pressed:
	- Make Cryptic_box_value2 equal to the value of mouseY
	- Use the 'max' function to prevent Cryptic_box_value2 from falling below 1

	Whilst the mouse is moving:
	- Decrement Cryptic_box_value3 by 1
	- Use the 'constrain' function to prevent Cryptic_box_value3 from falling below 1 and going above 12

	Whilst the mouse is moving:
	- Make Cryptic_box_value4 equal to the value of mouseY
	- Use the 'max' function to prevent Cryptic_box_value4 from falling below 13



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Cryptic_box_value0;
var Cryptic_box_value1;
var Cryptic_box_value2;
var Cryptic_box_value3;
var Cryptic_box_value4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Cryptic_box_value0 = 0;
	Cryptic_box_value1 = 0;
	Cryptic_box_value2 = 0;
	Cryptic_box_value3 = 0;
	Cryptic_box_value4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseMoved() {
	Cryptic_box_value0 = mouseX;
	Cryptic_box_value0 = min(Cryptic_box_value0, 9);
	Cryptic_box_value3 -= 1;
	Cryptic_box_value3 = constrain(Cryptic_box_value3, 1, 12);
	Cryptic_box_value4 = mouseY;
	Cryptic_box_value4 = max(Cryptic_box_value4, 13);
}

function mousePressed() {
	Cryptic_box_value1 -= 2;
	Cryptic_box_value1 = constrain(Cryptic_box_value1, 4, 16);
	Cryptic_box_value2 = mouseY;
	Cryptic_box_value2 = max(Cryptic_box_value2, 1);
}
///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Cryptic_box_value0, 12);
	pop();

	push();
	translate(120,380);
	drawDial(140,Cryptic_box_value1, 19);
	pop();

	push();
	translate(280,170);
	drawDial(140,Cryptic_box_value2, 17);
	pop();

	push();
	translate(280,380);
	drawDial(140,Cryptic_box_value3, 16);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Cryptic_box_value4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
