/*

Officer: 5533988
CaseNum: 701-3-88292917-5533988

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from jesus forslin.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They were wearing a black overcoat. I'll never forget their pale eyes. I distinctly remember that they were wearing a purple hat, I remember thinking that was quite unusual. They brobably weigh between 65 and 81 kg. They wore white glasses. I remember they had a ox tattoo. It's so hard to remember right now. It was very dark and I could barely see, They seemed to be between the age of 25 and 48 years old. They were fairly tall, I think between a height of 162 and 184 cm. The person I saw was male. It was very dark and I could barely see, I hope I never have to go through that again. 

*/

var allSuspects = [
	{
		"name": "DARBY JACQUELIN",
		"tattoo": "ox",
		"item": "purple hat",
		"coat": "black overcoat",
		"eyes": "pale",
		"weight": 75,
		"age": 39,
		"height": 172
	},
	{
		"name": "NELSON PORTOS",
		"tattoo": "chinese lettering",
		"item": "net weave shirt",
		"coat": "yellow poncho",
		"eyes": "grey",
		"weight": 80,
		"age": 29,
		"height": 178
	},
	{
		"name": "SUMMER GOODBURY",
		"tattoo": "dark black",
		"item": "pink scarf",
		"coat": "black hoodie",
		"eyes": "brown",
		"weight": 88,
		"age": 42,
		"height": 188
	},
	{
		"name": "TU PEGORD",
		"tattoo": "jellyfish",
		"item": "fur vest",
		"coat": "blue overcoat",
		"eyes": "blue",
		"weight": 88,
		"age": 37,
		"height": 175
	},
	{
		"name": "RANDEE WILLMAR",
		"tattoo": "dragon",
		"item": "red necktie",
		"coat": "red parka",
		"eyes": "green",
		"weight": 78,
		"age": 30,
		"height": 160
	},
	{
		"name": "KITTY NIEMELA",
		"tattoo": "neck",
		"item": "dotted necktie",
		"coat": "white fur coat",
		"eyes": "black",
		"weight": 74,
		"age": 33,
		"height": 176
	},
	{
		"name": "LINETTE SYMMES",
		"tattoo": "bull",
		"item": "pair of leather trousers",
		"coat": "green army coat",
		"eyes": "blue",
		"weight": 70,
		"age": 31,
		"height": 189
	}
];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(640, 480);
	textFont(myFont);
}

// Declare both your functions here
function traverseSuspects() {
	var sus
	var susLevel = 0
	for (var i = 0; i < allSuspects.length; i++) {
		if (testSuspect(allSuspects[i]) > susLevel) {
			susLevel = testSuspect(allSuspects[i])
			sus = allSuspects[i]
		}
	}

	return sus
}

function testSuspect(suspectObj) {
	var count = 0;
	if (suspectObj.coat == "black overcoat") {
		count++;
	}
	if (suspectObj.eyes == "pale") {
		count++;
	}
	if (suspectObj.item == "purple hat") {
		count++;
	}
	if (suspectObj.weight >= 65 && suspectObj.weight <= 81) {
		count++;
	}
	if (suspectObj.tattoo == "ox") {
		count++;
	}
	if (suspectObj.age >= 25 && suspectObj.age <= 48) {
		count++;
	}
	if (suspectObj.height >= 162 && suspectObj.height <= 184) {
		count++;
	}
	return count
}


function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	fill(255, 0, 0);
	text(traverseSuspects().name + " is guilty!", 60, 80);
}
