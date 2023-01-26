/*

Officer: 5533988
CaseNum: 502-3-95811341-5533988

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var Excerpt_A = [
	{
		Bit_0: ["succeed", "rejoice", "bake", "sail"],
		Bit_1: ["mend", "succeed", "plug", "protect"],
		Bit_2: ["hurry", "rejoice", "sneeze", "radiate"]
	},
	{
		Bit_0: ["fence", "start", "hurry", "fence"],
		Bit_1: ["sail", "stuff", "start", "protect"],
		Bit_2: ["protect", "Edsger", "play", "rejoice"]
	},
	{
		Bit_0: ["protect", "rejoice", "play", "sneeze"],
		Bit_1: ["radiate", "clip", "fence", "consider"],
		Bit_2: ["donation", "meddle", "smile", "start"]
	},
	{
		Bit_0: ["bake", "protect", "protect", "smile"],
		Bit_1: ["hurry", "meddle", "smile", "smile"],
		Bit_2: ["sneeze", "tug", "meddle", "succeed"]
	},
	{
		Bit_0: ["sneeze", "start", "smile", "COBOL"],
		Bit_1: ["tug", "tug", "plug", "play"],
		Bit_2: ["succeed", "plug", "ALGOL", "sail"]
	}];

var Excerpt_B = [
	{
		Bit_0: ["mend", "consider", "stuff", "clip"],
		Bit_1: ["consider", "succeed", "rejoice", "rejoice"],
		Bit_2: ["bake", "sail", "Governor Zuckerberg", "sail"]
	},
	{
		Bit_0: ["syndicate", "sneeze", "$200,000", "bake"],
		Bit_1: ["bake", "start", "smile", "meddle"],
		Bit_2: ["sail", "you", "hurry", "succeed"]
	},
	{
		Bit_0: ["sneeze", "play", "meddle", "clip"],
		Bit_1: ["consider", "plug", "protect", "protect"],
		Bit_2: ["clip", "plug", "sail", "plug"]
	},
	{
		Bit_0: ["clip", "play", "ALGOL fish wholesalers", "meddle"],
		Bit_1: ["charge", "radiate", "charge", "protect"],
		Bit_2: ["mend", "tug", "play", "charge"]
	},
	{
		Bit_0: ["consider", "stuff", "rejoice", "clip"],
		Bit_1: ["fence", "protect", "bake", "bake"],
		Bit_2: ["sail", "succeed", "start", "development"]
	}];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(1280, 800);

	// replace all redacted words with the correct values from the data structures above
	redactedText = "My dearest ++++++, I have just received your very generous ++++++++ of ++++++++. Thank you. This will be invaluable to our campaign. +++++ is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of +++ or ++++++++++++++++++++++ to the +++++++++. Your new +++++++++++ at the +++++ can now proceed without impediment. Yours sincerely, +++++++++++++++++++";
	redactedText = "My dearest " + Excerpt_A[1].Bit_2[1] + ", I have just received your very generous " + Excerpt_A[2].Bit_2[0] + " of " + Excerpt_B[1].Bit_0[2] + ". Thank you. This will be invaluable to our campaign. " + Excerpt_A[4].Bit_2[2] + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + Excerpt_B[1].Bit_2[1] + " or " + Excerpt_B[3].Bit_0[2] + " to the " + Excerpt_B[1].Bit_0[0] + ". Your new " + Excerpt_B[4].Bit_2[3] + " at the " + Excerpt_A[4].Bit_0[3] + " can now proceed without impediment. Yours sincerely, " + Excerpt_B[0].Bit_2[2];

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
	text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
