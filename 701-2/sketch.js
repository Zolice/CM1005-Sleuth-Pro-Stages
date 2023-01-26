/*

Officer: 5533988
CaseNum: 701-2-31778240-5533988

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from juliana maubert. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It's hard to say. It's so hard to remember right now. I'll never forget their brown eyes. They were fairly tall, I think between a height of 162 and 190 cm. They brobably weigh between 64 and 79 kg. They had ginger hair. I distinctly remember that they were wearing a dotted necktie, I remember thinking that was quite unusual. I remember they had a jellyfish tattoo. They wore light tan glasses. They seemed to be between the age of 34 and 56 years old. That's all I can remember about them. 

*/

var witnessStatement = "I remember walking down the street and then I saw them. It's hard to say. It's so hard to remember right now. I'll never forget their brown eyes. They were fairly tall, I think between a height of 162 and 190 cm. They brobably weigh between 64 and 79 kg. They had ginger hair. I distinctly remember that they were wearing a dotted necktie, I remember thinking that was quite unusual. I remember they had a jellyfish tattoo. They wore light tan glasses. They seemed to be between the age of 34 and 56 years old. That's all I can remember about them. "

var allSuspects = [
	{
		"name": "NELSON DEAUVILLE",
		"eyes": "green",
		"hair": "no",
		"glasses": "thin metallic",
		"item": "orange socks",
		"height": 174,
		"age": 41,
		"weight": 69
	},
	{
		"name": "GAYLA OORIN",
		"eyes": "brown",
		"hair": "shaved",
		"glasses": "white",
		"item": "purple hat",
		"height": 187,
		"age": 30,
		"weight": 71
	},
	{
		"name": "PIERRE JACQUELIN",
		"eyes": "pale",
		"hair": "white",
		"glasses": "cheap plastic",
		"item": "red necktie",
		"height": 171,
		"age": 36,
		"weight": 86
	},
	{
		"name": "RANDEE MAUBERT",
		"eyes": "pale",
		"hair": "dark brown",
		"glasses": "dark brown",
		"item": "fur vest",
		"height": 169,
		"age": 35,
		"weight": 75
	},
	{
		"name": "SUMMER DURANTS",
		"eyes": "brown",
		"hair": "ginger",
		"glasses": "light tan",
		"item": "dotted necktie",
		"height": 163,
		"age": 52,
		"weight": 67
	},
	{
		"name": "ERMELINDA WARMAN",
		"eyes": "black",
		"hair": "red",
		"glasses": "very thick",
		"item": "net weave shirt",
		"height": 172,
		"age": 46,
		"weight": 70
	},
	{
		"name": "LIANNE SILVEIRA",
		"eyes": "grey",
		"hair": "short black",
		"glasses": "black",
		"item": "pink scarf",
		"height": 161,
		"age": 51,
		"weight": 77
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

// Declare your function here

function testProperties(suspectObj) {
	let matchingProperties = 0;
	if (suspectObj.eyes === "brown") {
		matchingProperties++;
	}
	if (suspectObj.hair === "ginger") {
		matchingProperties++;
	}
	if (suspectObj.glasses === "light tan") {
		matchingProperties++;
	}
	if (suspectObj.item === "dotted necktie") {
		matchingProperties++;
	}
	if (suspectObj.height >= 162 && suspectObj.height <= 190) {
		matchingProperties++;
	}
	if (suspectObj.weight >= 64 && suspectObj.weight <= 79) {
		matchingProperties++;
	}
	if (suspectObj.age >= 34 && suspectObj.age <= 56) {
		matchingProperties++;
	}
	return matchingProperties;
}


function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	for (let i = 0; i < allSuspects.length; i++) {
		let matchingProperties = testProperties(allSuspects[i]);
		fill(50 * matchingProperties, 250 - (50 * matchingProperties), 0);
		text("found " + matchingProperties + " matching properties for " + allSuspects[i].name, 60, 60 + i * 20);
	}
}
