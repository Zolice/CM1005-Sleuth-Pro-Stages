/*

Officer: 5533988
CaseNum: 401-1-37302865-5533988

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If chlorine dips below 0.45 and snake_venom dips below 0.32, decrease calcium_chloride by 0.03
	- When cyanide goes above 0.47, raise calcium_chloride by 0.05
	- If amanitaMushrooms goes above 0.45, decrease glucagon by 0.05
	- If snake_venom goes above 0.4, increase glucagon by 0.01
	- If snake_venom goes above 0.64 or chlorine dips below 0.26, decrement antibodies by 0.03
	- When cyanide goes above 0.44, try increasing antibodies by 0.04
	- When amanitaMushrooms dips below 0.51 and cyanide dips below 0.6, reduce charcoal by 0.03
	- If chlorine goes above 0.54 and snake_venom dips below 0.27, try increasing charcoal by 0.05


Your conditional statements should consider the following poisons:

	- chlorine
	- snake_venom
	- cyanide
	- amanitaMushrooms


Your conditional statements should modify the following antidotes:

	- calcium_chloride
	- glucagon
	- antibodies
	- charcoal


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var snake_venom;
var cyanide;
var amanitaMushrooms;


//Declare the antidote variables
var calcium_chloride;
var glucagon;
var antibodies;
var charcoal;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	snake_venom = 0.5;
	cyanide = 0.5;
	amanitaMushrooms = 0.5;
	calcium_chloride = 0.5;
	glucagon = 0.5;
	antibodies = 0.5;
	charcoal = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	if(chlorine < 0.45 && snake_venom < 0.32)
	{
		calcium_chloride -= 0.03;
	}
	if(cyanide > 0.47)
	{
		calcium_chloride += 0.05;
	}
	if(amanitaMushrooms > 0.45)
	{
		glucagon -= 0.05;
	}
	if(snake_venom > 0.4)
	{
		glucagon += 0.01;
	}
	if(snake_venom > 0.64 || chlorine < 0.26)
	{
		antibodies -= 0.03;
	}
	if(cyanide > 0.44)
	{
		antibodies += 0.04;
	}
	if(amanitaMushrooms < 0.51 && cyanide < 0.6)
	{
		charcoal -= 0.03;
	}
	if(chlorine > 0.54 && snake_venom < 0.27)
	{
		charcoal += 0.05;
	}
	



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	snake_venom = nextValue(graphs[1],snake_venom);
	cyanide = nextValue(graphs[2],cyanide);
	amanitaMushrooms = nextValue(graphs[3],amanitaMushrooms);


	calcium_chloride = constrain(calcium_chloride, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	charcoal = constrain(charcoal, 0, 1);


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

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('chlorine: ' + nf(chlorine,1,2), 20,20);
	fill(colors[1]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,40);
	fill(colors[2]);
	text('cyanide: ' + nf(cyanide,1,2), 20,60);
	fill(colors[3]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(calcium_chloride,50,'calcium_chloride');
	drawBar(glucagon,200,'glucagon');
	drawBar(antibodies,350,'antibodies');
	drawBar(charcoal,500,'charcoal');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
