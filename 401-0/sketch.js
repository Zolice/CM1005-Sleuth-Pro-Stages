/*

Officer: 5533988
CaseNum: 401-0-87180009-5533988

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- If hemlock dips below 0.66, decrease methylene by 0.05
	- When Nerve_Gas dips below 0.3, increment methylene by 0.05
	- If hemlock dips below 0.45, decrease protamine by 0.02
	- If Nerve_Gas goes above 0.39, increase protamine by 0.03
	- If amanitaMushrooms goes above 0.6, try decreasing ethanol by 0.03
	- When Nerve_Gas dips below 0.7, increment ethanol by 0.01


Your conditional statements should consider the following poisons:

	- amanitaMushrooms
	- Nerve_Gas
	- hemlock


Your conditional statements should modify the following antidotes:

	- methylene
	- protamine
	- ethanol


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var amanitaMushrooms;
var Nerve_Gas;
var hemlock;


//Declare the antidote variables
var methylene;
var protamine;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	amanitaMushrooms = 0.5;
	Nerve_Gas = 0.5;
	hemlock = 0.5;
	methylene = 0.5;
	protamine = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	if(hemlock < 0.66){
		methylene -= 0.05;
	}
	if(Nerve_Gas < 0.3){
		methylene += 0.05;
	}
	if(hemlock < 0.45){
		protamine -= 0.02;
	}
	if(Nerve_Gas > 0.39){
		protamine += 0.03;
	}
	if(amanitaMushrooms > 0.6){
		ethanol -= 0.03;
	}
	if(Nerve_Gas < 0.7){
		ethanol += 0.01;
	}
	



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	amanitaMushrooms = nextValue(graphs[0],amanitaMushrooms);
	Nerve_Gas = nextValue(graphs[1],Nerve_Gas);
	hemlock = nextValue(graphs[2],hemlock);


	methylene = constrain(methylene, 0, 1);
	protamine = constrain(protamine, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


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
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,20);
	fill(colors[1]);
	text('Nerve_Gas: ' + nf(Nerve_Gas,1,2), 20,40);
	fill(colors[2]);
	text('hemlock: ' + nf(hemlock,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(protamine,200,'protamine');
	drawBar(ethanol,350,'ethanol');


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
