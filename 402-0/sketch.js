/*
402 - The case of the Why Gang ruby heist
Stage 1 - Matz

Officer: 5533988
CaseNum: 402-0-55063481-5533988

The criminal gang going by the name ‘Why’ has raided the Gates Jewel Repository and gotten away with a sizeable stash of Rubies. The Console City police gave chase but the gang scattered across the city, and so it’s up to us to apprehend them. The first of the gang to catch is Matz. He’s a fast runner but he’s weighed down by Rubies. Your speedy legs should be up to the job.

- In the draw function write if statements which use the road you are currently on to set your direction.
- The currentRoad variable stores the road that you are currently on. 
- Valid directions are "north", "east", "south" and "west". 

I've written the first if statement to get you started but the rest is up to you kid!

- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	else if
	==

*/


var currentRoad;
var direction;
var mapImage;
var overlayImage;

var det = {
	speedX: 0,
	speedY: 0,
	locationX: 73,
	locationY: 73,
	currentStreet: 'Packard Avenue',
	image: './det.png'
};

function preload() {
	perp.image = loadImage(perp.image);
	det.image = loadImage(det.image);
	mapImage = loadImage("./map.png");
	overlayImage = loadImage("./overlay.png")
}

function setup() {
	createCanvas(1024, 768);
	currentRoadObj = getCurrentRoad();

}


function draw() {
	///////////////////ADD YOUR CODE HERE///////////////////
	if (currentRoad == "Packard Avenue") {
		direction = "east";
	}
	if (currentRoad == "Crowther Road") {
		direction = "south";
	}
	if (currentRoad == "Raskin Street") {
		direction = "west";
	}
	if (currentRoad == "Berners-lee Street") {
		direction = "south";
	}
	if (currentRoad == "Gates Avenue") {
		direction = "east";
	}


	///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

	background(50);

	currentRoadObj = getCurrentRoad();
	updateDirection();

	if (perp.caught === 0) {
		det.locationX += det.speedX;
		det.locationY += det.speedY;
	}

	//draw the images of the map perp and the detective
	image(mapImage, 0, 0);
	image(overlayImage, 0, 0);
	image(perp.image, perp.locationX - roadWidth, perp.locationY - roadWidth, roadWidth * 2, roadWidth * 2);

	push();
	translate(det.locationX, det.locationY);
	if (det.speedX != 0) rotate((det.speedX - 1.5) * PI);
	else if (det.speedY < 0) rotate(PI);
	image(det.image, -roadWidth, -roadWidth, roadWidth * 2, roadWidth * 2);
	pop();

	push();
	textAlign(CENTER);
	textSize(32);
	noStroke();

	//the perp has been caught
	if (dist(det.locationX, det.locationY, perp.locationX, perp.locationY) < 3) {
		//display message to the player
		fill(0, 220, 0);
		text("Just in the nick of time! \nYou caught " + perp.name, width / 2, height / 2);
		perp.caught = 1;
	}

	//not on any roads, therefore the game is lost.
	if (currentRoadObj == null || (det.speedX == 0 && det.speedY == 0)) {
		fill(255, 0, 0);
		text("You let " + perp.name + " get away.\n Better luck next time.", width / 2, height / 2);
		perp.caught = -1;
	}

	pop();

	hud();

}

function hud() {
	push();
	fill(250);
	noStroke();
	textAlign(LEFT, TOP);
	text("detective location - x: " + det.locationX + " y: " + det.locationY + "\tstreet: " + currentRoad, 5, 5);
	pop();
}

function updateDirection() {
	if (direction != undefined) {
		direction = direction.toLowerCase();

		if (direction == "north") {
			det.speedX = 0;
			det.speedY = -1;
		}
		else if (direction == "south") {
			det.speedX = 0;
			det.speedY = 1;
		}
		else if (direction == "west") {
			det.speedX = -1;
			det.speedY = 0;
		}
		else if (direction == "east") {
			det.speedX = 1;
			det.speedY = 0;
		}
		else {
			det.speedX = 0;
			det.speedY = 0;
		}
	}
}

function getCurrentRoad() {
	var road = null;
	for (var i = 0; i < roads.length; i++) {
		if (mapImage.get(det.locationX, det.locationY)[0] == roads[i].strokeC) {
			road = roads[i];
		}
	}

	if (road && currentRoad != road.name) {
		currentRoad = road.name;
		det.locationX = road.start.x;
		det.locationY = road.start.y;
	}

	return road;
}

var roadWidth = 25;

var roads = [
	{
		start:
		{
			x: 73,
			y: 72
		},
		end:
		{
			x: 826,
			y: 72
		},
		name: 'Packard Avenue',
		strokeC: 170
	},
	{
		start:
		{
			x: 826,
			y: 72
		},
		end:
		{
			x: 826,
			y: 384
		},
		name: 'Crowther Road',
		strokeC: 171
	},
	{
		start:
		{
			x: 826,
			y: 384
		},
		end:
		{
			x: 261,
			y: 384
		},
		name: 'Raskin Street',
		strokeC: 172
	},
	{
		start:
		{
			x: 261,
			y: 384
		},
		end:
		{
			x: 261,
			y: 633
		},
		name: 'Berners-lee Street',
		strokeC: 173
	},
	{
		start:
		{
			x: 261,
			y: 633
		},
		end:
		{
			x: 763,
			y: 633
		},
		name: 'Gates Avenue',
		strokeC: 174
	}];
var perp = {
	caught: 0,
	name: 'Matz',
	image: './perp.png',
	locationX: 763,
	locationY: 634
};