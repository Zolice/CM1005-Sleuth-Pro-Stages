/*

Officer: 5533988
CaseNum: 502-1-47045031-5533988

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var PaperA = [
	{ Bit0: "syndicate", Bit1: "plug", Bit2: "COBOL" },
	{ Bit0: "fence", Bit1: "a donation", Bit2: "bake" },
	{ Bit0: "meddle", Bit1: "sail", Bit2: "tug" },
	{ Bit0: "protect", Bit1: "meddle", Bit2: "charge" },
	{ Bit0: "bake", Bit1: "sneeze", Bit2: "stuff" },
	{ Bit0: "rejoice", Bit1: "bake", Bit2: "smile" },
	{ Bit0: "play", Bit1: "bake", Bit2: "sneeze" },
	{ Bit0: "plug", Bit1: "Governor Zuckerberg", Bit2: "romantic" },
	{ Bit0: "plug", Bit1: "meddle", Bit2: "play" },
	{ Bit0: "mend", Bit1: "consider", Bit2: "fence" }
];

var PaperB = [
	{ Bit0: "stuff", Bit1: "meddle", Bit2: "hurry" },
	{ Bit0: "Edsger", Bit1: "start", Bit2: "plug" },
	{ Bit0: "stuff", Bit1: "rejoice", Bit2: "stuff" },
	{ Bit0: "consider", Bit1: "hurry", Bit2: "rejoice" },
	{ Bit0: "fence", Bit1: "mend", Bit2: "sneeze" },
	{ Bit0: "capital", Bit1: "stuff", Bit2: "start" },
	{ Bit0: "tug", Bit1: "charge", Bit2: "protect" },
	{ Bit0: "stuff", Bit1: "Hopper’s", Bit2: "consider" },
	{ Bit0: "play", Bit1: "mend", Bit2: "delicate" },
	{ Bit0: "mend", Bit1: "she has", Bit2: "radiate" }
];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(1280, 800);

	// replace all redacted words with the correct values from the data structures above
	redactedText = "My dearest ++++++, Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about ++++++++ intervention. I suspect that +++++++ a ++++++++ interest at the +++++. I and the +++++++++ appreciate your many contributions over the years. However, this is a most ++++++++ matter which would require significant +++++++ for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps ++++++++++ to my forthcoming campaign would help. Yours sincerely, +++++++++++++++++++";
	redactedText = "My dearest " + PaperB[1].Bit0 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + PaperB[7].Bit1 + " intervention. I suspect that " + PaperB[9].Bit1 + " a " + PaperA[7].Bit2 + " interest at the " + PaperA[0].Bit2 + ". I and the " + PaperA[0].Bit0 + " appreciate your many contributions over the years. However, this is a most " +PaperB[8].Bit2 + " matter which would require significant " +PaperB[5].Bit0 +  " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + PaperA[1].Bit1 + " to my forthcoming campaign would help. Yours sincerely, " + PaperA[7].Bit1

}

function draw() {
	// you don't need to change this
	image(backgroundImg, 0, 0);
	stroke(0);
	strokeWeight(3);
	line(width / 2, 10, width / 2, height - 10);
	noStroke();
	textFont(myFont);
	textSize(14);
	text(redactedText, 30, 100, 580, 600);
	text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
