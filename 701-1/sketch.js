/*

Officer: 5533988
CaseNum: 701-1-92151587-5533988

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

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

I remember walking down the street and then I saw them. I'm not quite sure. They wore black glasses. They were carrying a orange tote bag. I think they were more than 165 cm tall. They definately weigh less than 85 Kg. The person I saw was male. It was very dark and I could barely see, I remember they had a sword tattoo. That's all I know officer. 

*/

var witnessStatement = "I remember walking down the street and then I saw them. I'm not quite sure. They wore black glasses. They were carrying a orange tote bag. I think they were more than 165 cm tall. They definately weigh less than 85 Kg. The person I saw was male. It was very dark and I could barely see, I remember they had a sword tattoo. That's all I know officer. "

var usualSuspects = [
	{
		"name": "PIERRE PORTOS",
		"tattoo": "sword",
		"accessory": "orange tote bag",
		"gender": "male",
		"height": 172,
		"weight": 80
	},
	{
		"name": "KITTY MOHWAWK",
		"tattoo": "jellyfish",
		"accessory": "glass bottle",
		"gender": "male",
		"height": 178,
		"weight": 73
	},
	{
		"name": "DARBY CROME",
		"tattoo": "bull",
		"accessory": "big black envelope",
		"gender": "male",
		"height": 165,
		"weight": 100
	},
	{
		"name": "LARRAINE ZETLAND",
		"tattoo": "dragon",
		"accessory": "plastic box",
		"gender": "female",
		"height": 185,
		"weight": 68
	},
	{
		"name": "NELSON GOODBURY",
		"tattoo": "anchor",
		"accessory": "red backpack",
		"gender": "female",
		"height": 175,
		"weight": 71
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
function checkSuspectTraits(suspectObj) {
	var susLevel = 0;
	if (witnessStatement.includes(suspectObj.tattoo)) {
		susLevel++;
	}
	if (witnessStatement.includes(suspectObj.accessory)) {
		susLevel++;
	}
	if (witnessStatement.includes(suspectObj.gender)) {
		susLevel++;
	}
	if (suspectObj.height > 165) {
		susLevel++;
	}
	if (suspectObj.weight < 85) {
		susLevel++;
	}
	if (susLevel == 5) {
		return true;
	} else {
		return false;
	}
}




function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	for (let i = 0; i < usualSuspects.length; i++) {
		if (checkSuspectTraits(usualSuspects[i]) == true) {
			fill(255, 0, 0);
			text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
		} else {
			fill(0, 155, 0);
			text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20);
		}
	}
}
