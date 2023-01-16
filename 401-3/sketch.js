/*

Officer: 5533988
CaseNum: 401-3-53258134-5533988

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When deadlyNightshade dips below 0.75 or methanol dips below 0.25, or on the other hand, chlorine goes above 0.68 and warfarin goes above 0.34, reduce antivenom by 0.05
	- If ricin dips below 0.4 and strychnine goes above 0.69, or on the other hand, lead goes above 0.27 and mercury goes above 0.56, increment antivenom by 0.02
	- If either ricin goes above 0.46, chlorine dips below 0.71, methanol goes above 0.61, or perhaps lead dips below 0.45, decrement calciumGluconate by 0.02
	- If either strychnine goes above 0.4, deadlyNightshade dips below 0.67, or perhaps mercury goes above 0.42, increment calciumGluconate by 0.01
	- If methanol dips below 0.71, or on the other hand, lead goes above 0.69 and warfarin dips below 0.61, decrease opioids by 0.04
	- When strychnine goes above 0.74, chlorine dips below 0.31, and also deadlyNightshade goes above 0.33, increment opioids by 0.03
	- When methanol goes above 0.3 or strychnine dips below 0.54, whilst at the same time, deadlyNightshade dips below 0.26, try decreasing aspirin by 0.01
	- When ricin dips below 0.33 or lead dips below 0.66, whilst at the same time, mercury goes above 0.61, increment aspirin by 0.05
	- If ricin dips below 0.57 and methanol goes above 0.64, or on the other hand, chlorine dips below 0.39 or lead dips below 0.26, decrement glucagon by 0.03
	- If either strychnine dips below 0.51, mercury goes above 0.5, or perhaps warfarin goes above 0.49, try increasing glucagon by 0.05


Your conditional statements should consider the following poisons:

	- deadlyNightshade
	- mercury
	- methanol
	- strychnine
	- ricin
	- warfarin
	- chlorine
	- lead


Your conditional statements should modify the following antidotes:

	- antivenom
	- calciumGluconate
	- opioids
	- aspirin
	- glucagon


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
var deadlyNightshade;
var mercury;
var methanol;
var strychnine;
var ricin;
var warfarin;
var chlorine;
var lead;


//Declare the antidote variables
var antivenom;
var calciumGluconate;
var opioids;
var aspirin;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	deadlyNightshade = 0.5;
	mercury = 0.5;
	methanol = 0.5;
	strychnine = 0.5;
	ricin = 0.5;
	warfarin = 0.5;
	chlorine = 0.5;
	lead = 0.5;
	antivenom = 0.5;
	calciumGluconate = 0.5;
	opioids = 0.5;
	aspirin = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 8; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	if (deadlyNightshade < 0.75 || methanol < 0.25 || chlorine > 0.68 && warfarin > 0.34) {
		antivenom -= 0.05;
	}

	if (ricin < 0.4 && strychnine > 0.69 || lead > 0.27 && mercury > 0.56) {
		antivenom += 0.02;
	}

	if (ricin > 0.46 || chlorine < 0.71 || methanol > 0.61 || lead < 0.45) {
		calciumGluconate -= 0.02;
	}

	if (strychnine > 0.4 || deadlyNightshade < 0.67 || mercury > 0.42) {
		calciumGluconate += 0.01;
	}

	if (methanol < 0.71 || lead > 0.69 && warfarin < 0.61) {
		opioids -= 0.04;
	}

	if (strychnine > 0.74 && chlorine < 0.31 && deadlyNightshade > 0.33) {
		opioids += 0.03;
	}

	if ((methanol > 0.3 || strychnine < 0.54) && deadlyNightshade < 0.26) {
		aspirin -= 0.01;
	}

	if ((ricin < 0.33 || lead < 0.66) && mercury > 0.61) {
		aspirin += 0.05;
	}

	if (ricin < 0.57 && methanol > 0.64 || chlorine < 0.39 || lead < 0.26) {
		glucagon -= 0.03;
	}

	if (strychnine < 0.51 || mercury > 0.5 || warfarin > 0.49) {
		glucagon += 0.05;
	}







	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	deadlyNightshade = nextValue(graphs[0], deadlyNightshade);
	mercury = nextValue(graphs[1], mercury);
	methanol = nextValue(graphs[2], methanol);
	strychnine = nextValue(graphs[3], strychnine);
	ricin = nextValue(graphs[4], ricin);
	warfarin = nextValue(graphs[5], warfarin);
	chlorine = nextValue(graphs[6], chlorine);
	lead = nextValue(graphs[7], lead);


	antivenom = constrain(antivenom, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);
	opioids = constrain(opioids, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	glucagon = constrain(glucagon, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for (var i = 0; i < graphs.length; i++) {
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('deadlyNightshade: ' + nf(deadlyNightshade, 1, 2), 20, 20);
	fill(colors[1]);
	text('mercury: ' + nf(mercury, 1, 2), 20, 40);
	fill(colors[2]);
	text('methanol: ' + nf(methanol, 1, 2), 20, 60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine, 1, 2), 20, 80);
	fill(colors[4]);
	text('ricin: ' + nf(ricin, 1, 2), 20, 100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin, 1, 2), 20, 120);
	fill(colors[6]);
	text('chlorine: ' + nf(chlorine, 1, 2), 20, 140);
	fill(colors[7]);
	text('lead: ' + nf(lead, 1, 2), 20, 160);


	//draw the antidotes bar chart
	drawBar(antivenom, 50, 'antivenom');
	drawBar(calciumGluconate, 200, 'calciumGluconate');
	drawBar(opioids, 350, 'opioids');
	drawBar(aspirin, 500, 'aspirin');
	drawBar(glucagon, 650, 'glucagon');


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
