/*

Officer: 5533988
CaseNum: 202-3-67035289-5533988

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Light Sea Green filled text with a Dark Violet outline in Ballpointprint font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(673,649);
	textSize(38);
}

function draw()
{
	background(255);

	push();
	fill(139,0,0);
	stroke(255,69,0);
	textFont(Melissa);
	//text("you", 163,243);
	pop();
	fill(173,255,47);
	stroke(0,255,127);
	textFont(Ballpointprint);
	//text("I", 404,325);
	fill(0,255,127);
	stroke(148,0,211);
	textFont(RonsFont);
	//text("If", 313,325);
	fill(154,205,50);
	stroke(32,178,170);
	textFont(Melissa);
	//text("r", 100,154);
	fill(255,165,0);
	stroke(34,139,34);
	textFont(RonsFont);
	//text("I'm", 333,154);
	push();
	fill(218,165,32);
	stroke(255,140,0);
	textFont(Ballpointprint);
	//text("sometimes.", 399,370);
	pop();
	stroke(32,178,170);
	textFont(Ballpointprint);
	//text("Are", 91,243);
	fill(75,0,130);
	stroke(139,0,0);
	textFont(Diggity);
	//text("cash.", 24,370);
	fill(139,0,0);
	stroke(128,0,128);
	textFont(Melissa);
	//text("?", 312,154);
	fill(30,144,255);
	stroke(75,0,130);
	textFont(Diggity);
	//text("our", 44,154);
	push();
	fill(148,0,211);
	stroke(184,134,11);
	textFont(Melissa);
	//text("Is", 11,154);
	pop();
	stroke(32,178,170);
	textFont(Melissa);
	//text("Bob,", 174,38);
	fill(139,0,139);
	//text("can", 217,201);
	fill(135,206,250);
	stroke(0,250,154);
	textFont(RonsFont);
	//text("no", 107,114);
	fill(255,255,0);
	stroke(220,20,60);
	//text("so", 222,370);
	fill(0,255,127);
	stroke(165,42,42);
	textFont(Ballpointprint);
	//text("can", 450,325);
	fill(233,150,122);
	textFont(RonsFont);
	//text("I", 9,114);
	fill(123,104,238);
	stroke(127,255,0);
	textFont(Diggity);
	//text("The", 362,201);
	fill(178,34,34);
	stroke(255,165,0);
	//text("longer", 154,114);
	fill(106,90,205);
	stroke(210,105,30);
	textFont(Ballpointprint);
	//text("and", 313,282);
	fill(238,232,170);
	stroke(50,205,50);
	//text("not", 403,154);
	fill(0,0,255);
	stroke(124,252,0);
	textFont(RonsFont);
	//text("You", 97,370);
	push();
	fill(123,104,238);
	stroke(32,178,170);
	textFont(Melissa);
	//text("lence.", 29,243);
	pop();
	stroke(128,0,128);
	textFont(Diggity);
	//text("break", 227,282);
	fill(0,191,255);
	stroke(154,205,50);
	textFont(Ballpointprint);
	//text("these", 337,114);
	push();
	fill(127,255,212);
	stroke(255,255,0);
	textFont(Melissa);
	//text("so,", 363,325);
	pop();
	fill(148,0,211);
	textFont(Diggity);
	//text("yours,", 149,446);
	fill(72,209,204);
	stroke(255,0,0);
	//text("My", 9,38);
	push();
	fill(238,130,238);
	stroke(220,20,60);
	//text("sort", 380,282);
	pop();
	fill(30,144,255);
	stroke(255,255,0);
	textFont(RonsFont);
	//text("darling", 55,38);
	fill(218,165,32);
	stroke(128,0,128);
	textFont(Melissa);
	//text("Are", 604,282);
	fill(0,0,205);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("much", 14,201);
	fill(139,69,19);
	stroke(184,134,11);
	textFont(Melissa);
	//text("elat", 110,154);
	fill(160,82,45);
	stroke(46,139,87);
	textFont(RonsFont);
	//text("Daisy", 16,522);
	fill(186,85,211);
	stroke(0,0,205);
	//text("me", 293,243);
	fill(233,150,122);
	stroke(220,20,60);
	//text("how", 510,154);
	push();
	fill(148,0,211);
	stroke(199,21,133);
	//text("for", 140,282);
	pop();
	stroke(178,34,34);
	textFont(Melissa);
	//text("inual", 482,114);
	fill(240,230,140);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("Fo", 21,446);
	fill(255,105,180);
	stroke(107,142,35);
	textFont(Diggity);
	//text("away", 58,282);
	fill(186,85,211);
	stroke(25,25,112);
	//text("short", 72,325);
	fill(0,100,0);
	stroke(0,0,139);
	textFont(Ballpointprint);
	//text("ed", 339,370);
	fill(25,25,112);
	stroke(165,42,42);
	textFont(Melissa);
	//text("si", 12,243);
	fill(0,0,139);
	stroke(46,139,87);
	textFont(RonsFont);
	//text("rever", 48,446);
	fill(127,255,0);
	stroke(25,25,112);
	//text("x", 103,522);
	fill(34,139,34);
	stroke(0,100,0);
	textFont(Diggity);
	//text("should", 556,243);
	fill(173,216,230);
	stroke(184,134,11);
	//text("you", 16,325);
	fill(124,252,0);
	stroke(0,255,127);
	textFont(Melissa);
	//text("this", 448,282);
	fill(106,90,205);
	stroke(255,140,0);
	//text("cont", 436,114);
	fill(255,140,0);
	stroke(124,252,0);
	//text("I", 197,201);
	fill(255,69,0);
	stroke(255,165,0);
	textFont(Diggity);
	//text("money", 196,325);
	fill(199,21,133);
	stroke(184,134,11);
	textFont(Melissa);
	//text("avoiding", 205,243);
	fill(218,165,32);
	stroke(124,252,0);
	textFont(Diggity);
	//text("?", 284,325);
	fill(32,178,170);
	stroke(220,20,60);
	//text("of", 153,325);
	fill(0,255,127);
	stroke(0,128,0);
	textFont(Melissa);
	//text("ionship", 148,154);
	fill(244,164,96);
	stroke(50,205,50);
	textFont(Ballpointprint);
	//text("we", 497,243);
	fill(240,230,140);
	stroke(0,0,139);
	//text("out.", 544,282);
	fill(50,205,50);
	stroke(0,250,154);
	//text("send", 510,325);
	fill(0,128,128);
	stroke(154,205,50);
	textFont(Melissa);
	//text("a", 206,282);
	fill(0,100,0);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("delays.", 531,114);
	fill(255,99,71);
	stroke(0,128,128);
	//text("go", 15,282);
	fill(218,165,32);
	stroke(107,142,35);
	//text("can", 42,114);
	fill(127,255,212);
	textFont(Melissa);
	//text("sure", 458,154);
	fill(0,100,0);
	stroke(128,0,0);
	//text("?", 350,243);
	fill(0,139,139);
	stroke(139,69,19);
	textFont(Diggity);
	//text("secrets,", 422,201);
	fill(165,42,42);
	stroke(128,0,0);
	textFont(RonsFont);
	//text("more", 103,201);
	fill(218,112,214);
	stroke(139,69,19);
	textFont(Ballpointprint);
	//text("all", 497,282);
	fill(32,178,170);
	stroke(148,0,211);
	text("ignore", 236,114);
	text("guard", 267,370);
	text("take", 261,201);
	fill(34,139,34);
	stroke(107,142,35);
	//text("Perhaps", 371,243);
	fill(32,178,170);
	stroke(148,0,211);
	text("the", 534,201);
	fill(240,230,140);
	stroke(124,252,0);
	textFont(Melissa);
	//text("?", 341,201);
	fill(138,43,226);
	stroke(0,191,255);
	textFont(Diggity);
	//text("are", 164,370);
	fill(32,178,170);
	stroke(148,0,211);
	textFont(Ballpointprint);
	text("safe", 226,154);



}
