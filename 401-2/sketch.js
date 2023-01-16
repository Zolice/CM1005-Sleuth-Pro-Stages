/*

Officer: 5533988
CaseNum: 401-2-22430157-5533988

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When nerve_gas dips below 0.54 or snakeVenom dips below 0.31, reduce glucagon by 0.01
	- If polonium dips below 0.48, or on the other hand, mercury goes above 0.37 and SpiderVenom goes above 0.36, increase glucagon by 0.03
	- If mercury goes above 0.64 or polonium goes above 0.66, whilst at the same time, SpiderVenom dips below 0.54, decrease antitoxin by 0.03
	- If nerve_gas goes above 0.38 or snakeVenom dips below 0.57, whilst at the same time, hemlock goes above 0.47, try increasing antitoxin by 0.03
	- If hemlock dips below 0.45, or on the other hand, snakeVenom goes above 0.54 and mercury dips below 0.38, try decreasing sulphates by 0.01
	- If SpiderVenom dips below 0.48 or nerve_gas goes above 0.43, increase sulphates by 0.01
	- When polonium dips below 0.65 or nerve_gas goes above 0.51, reduce hydrochloric_acid by 0.01
	- If mercury goes above 0.7 or hemlock dips below 0.57, increase hydrochloric_acid by 0.03


Your conditional statements should consider the following poisons:

	- polonium
	- snakeVenom
	- hemlock
	- nerve_gas
	- SpiderVenom
	- mercury


Your conditional statements should modify the following antidotes:

	- glucagon
	- antitoxin
	- sulphates
	- hydrochloric_acid


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var polonium;
var snakeVenom;
var hemlock;
var nerve_gas;
var SpiderVenom;
var mercury;


//Declare the antidote variables
var glucagon;
var antitoxin;
var sulphates;
var hydrochloric_acid;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	polonium = 0.5;
	snakeVenom = 0.5;
	hemlock = 0.5;
	nerve_gas = 0.5;
	SpiderVenom = 0.5;
	mercury = 0.5;
	glucagon = 0.5;
	antitoxin = 0.5;
	sulphates = 0.5;
	hydrochloric_acid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 6; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	if (nerve_gas < 0.54 || snakeVenom < 0.31) {
		glucagon -= 0.01;
	}
	if (polonium < 0.48 || mercury > 0.37 && SpiderVenom > 0.36) {
		glucagon += 0.03;
	}
	if ((mercury > 0.64 || polonium > 0.66) && SpiderVenom < 0.54) {
		antitoxin -= 0.03;
	}
	if ((nerve_gas > 0.38 || snakeVenom < 0.57) && hemlock > 0.47) {
		antitoxin += 0.03;
	}
	if (hemlock < 0.45 || snakeVenom > 0.54 && mercury < 0.38) {
		sulphates -= 0.01;
	}
	if (SpiderVenom < 0.48 || nerve_gas > 0.43) {
		sulphates += 0.01;
	}
	if (polonium < 0.65 || nerve_gas > 0.51) {
		hydrochloric_acid -= 0.01;
	}
	if (mercury > 0.7 || hemlock < 0.57) {
		hydrochloric_acid += 0.03;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	polonium = nextValue(graphs[0], polonium);
	snakeVenom = nextValue(graphs[1], snakeVenom);
	hemlock = nextValue(graphs[2], hemlock);
	nerve_gas = nextValue(graphs[3], nerve_gas);
	SpiderVenom = nextValue(graphs[4], SpiderVenom);
	mercury = nextValue(graphs[5], mercury);


	glucagon = constrain(glucagon, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);

	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255)
	];

	for (var i = 0; i < graphs.length; i++) {
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('polonium: ' + nf(polonium, 1, 2), 20, 20);
	fill(colors[1]);
	text('snakeVenom: ' + nf(snakeVenom, 1, 2), 20, 40);
	fill(colors[2]);
	text('hemlock: ' + nf(hemlock, 1, 2), 20, 60);
	fill(colors[3]);
	text('nerve_gas: ' + nf(nerve_gas, 1, 2), 20, 80);
	fill(colors[4]);
	text('SpiderVenom: ' + nf(SpiderVenom, 1, 2), 20, 100);
	fill(colors[5]);
	text('mercury: ' + nf(mercury, 1, 2), 20, 120);


	//draw the antidotes bar chart
	drawBar(glucagon, 50, 'glucagon');
	drawBar(antitoxin, 200, 'antitoxin');
	drawBar(sulphates, 350, 'sulphates');
	drawBar(hydrochloric_acid, 500, 'hydrochloric_acid');


}

function nextValue(graph, val) {
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03, 0.03);

	val += delta;
	if (val > 1 || val < 0) {
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph) {
	//draws an array as a graph
	beginShape();
	for (var i = 0; i < graph.length; i++) {
		vertex(width * i / 512, height * 0.5 - graph[i] * height / 3)
	}
	endShape();
}


function drawBar(val, x, name) {
	//draws the bars for bar chart
	noStroke();
	fill(0, 100, 100);
	var mh = height * 0.4 - 50;
	rect(x, (height - 50) - val * mh, 100, val * mh);
	fill(255);
	text(name + ": " + val, x, height - 20);
}
