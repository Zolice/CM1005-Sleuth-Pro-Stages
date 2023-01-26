/*

Officer: 5533988
CaseNum: 701-0-76459360-5533988

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist hang silveira and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It was so scary! The person I saw was male. They wore black glasses. I distinctly remember that they were wearing a net weave shirt, I remember thinking that was quite unusual. It's hard to say. Can I go home now Sir? 

*/

var suspectList = [
	{
		"name": "JESUS WILLMAR",
		"item": "orange socks",
		"gender": "male",
		"glasses": "cheap plastic"
	},
	{
		"name": "TU CASIMERE",
		"item": "dotted necktie",
		"gender": "male",
		"glasses": "thin metallic"
	},
	{
		"name": "JAUNITA PORTOS",
		"item": "net weave shirt",
		"gender": "male",
		"glasses": "black"
	}
];

var myFont;
var backgroundImg;
var witnessStatement = "It all started when I was exiting the store. That's when I noticed them. It was so scary! The person I saw was male. They wore black glasses. I distinctly remember that they were wearing a net weave shirt, I remember thinking that was quite unusual. It's hard to say. Can I go home now Sir?"

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(640, 480);
	textFont(myFont);
}

// Declare your function here
function checkSuspectTraits(suspectObj) {
	var susLevel = 0
	// if (witnessStatement.includes(suspectObj.name))
		// susLevel += 1
	if (witnessStatement.includes(suspectObj.item))
		susLevel += 1
	if (witnessStatement.includes(suspectObj.gender))
		susLevel += 1
	if (witnessStatement.includes(suspectObj.glasses))
		susLevel += 1

	if (susLevel == 3)
		return true

	return false
}




function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	for (let i = 0; i < suspectList.length; i++) {
		if (checkSuspectTraits(suspectList[i]) == true) {
			fill(255, 0, 0);
			text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
		} else {
			fill(0, 155, 0);
			text(suspectList[i].name + " is not guilty", 60, 60 + i * 20);
		}
	}
}
