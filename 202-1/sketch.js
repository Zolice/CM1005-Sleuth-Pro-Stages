/*

Officer: 5533988
CaseNum: 202-1-75309924-5533988

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Pale Violet Red filled text with a Navy outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(526,451);
	textFont(letterFont);
	textSize(26);
}

function draw()
{
	background(255);

	fill(244,164,96);
	stroke(46,139,87);
	//text("you", 236,104);
	fill(100,149,237);
	stroke(75,0,130);
	//text("swift", 116,224);
	fill(30,144,255);
	stroke(128,0,128);
	//text("around", 169,78);
	fill(173,255,47);
	stroke(255,165,0);
	//text("night", 8,135);
	fill(238,130,238);
	stroke(46,139,87);
	//text("can", 127,135);
	fill(139,0,139);
	stroke(220,20,60);
	//text("longer", 151,192);
	fill(34,139,34);
	stroke(34,139,34);
	//text("kis", 70,104);
	fill(0,128,128);
	stroke(255,140,0);
	//text("at", 234,164);
	fill(32,178,170);
	stroke(255,0,0);
	//text("x", 50,328);
	fill(127,255,212);
	stroke(50,205,50);
	//text("have", 234,192);
	fill(173,255,47);
	stroke(0,0,205);
	//text("in", 45,164);
	fill(127,255,0);
	stroke(220,20,60);
	//text("miss", 54,78);
	fill(0,0,205);
	stroke(165,42,42);
	//text("r", 164,224);
	fill(0,128,0);
	stroke(25,25,112);
	//text("spring,", 91,164);
	fill(127,255,0);
	stroke(0,128,0);
	//text("months", 366,78);
	fill(127,255,212);
	stroke(139,0,139);
	//text("only", 196,135);
	fill(0,0,255);
	stroke(218,165,32);
	//text("much", 111,192);
	fill(128,128,0);
	stroke(139,69,19);
	//text("this", 340,192);
	fill(144,238,144);
	stroke(255,0,0);
	//text("my", 280,104);
	fill(255,215,0);
	stroke(178,34,34);
	//text("fe", 436,164);
	fill(255,0,255);
	stroke(0,100,0);
	//text("etur", 171,224);
	fill(218,165,32);
	stroke(75,0,130);
	//text("ed", 428,135);
	fill(219,112,147);
	stroke(255,165,0);
	//text("yours,", 69,276);
	fill(165,42,42);
	stroke(199,21,133);
	//text("to", 272,192);
	fill(124,252,0);
	stroke(184,134,11);
	//text("How", 6,78);
	fill(178,34,34);
	stroke(255,215,0);
	//text("els", 452,164);
	fill(218,112,214);
	stroke(0,250,154);
	//text("in", 264,104);
	fill(106,90,205);
	stroke(25,25,112);
	//text("you", 141,78);
	fill(32,178,170);
	stroke(0,128,0);
	//text("many", 325,78);
	fill(0,250,154);
	stroke(128,0,128);
	//text("will", 326,135);
	fill(144,238,144);
	stroke(32,178,170);
	//text("this", 321,164);
	fill(25,25,112);
	stroke(255,0,0);
	//text("?", 121,104);
	fill(255,105,180);
	stroke(255,140,0);
	//text("and", 84,135);
	fill(154,205,50);
	stroke(255,215,0);
	//text("do", 198,192);
	fill(255,215,0);
	stroke(148,0,211);
	//text("at", 432,104);
	fill(152,251,152);
	stroke(0,128,0);
	//text("since", 459,78);
	fill(107,142,35);
	stroke(255,255,0);
	//text("sed", 90,104);
	fill(127,255,0);
	stroke(127,255,0);
	//text("desolate.", 8,192);
	fill(128,0,128);
	stroke(199,21,133);
	//text("My", 6,26);
	fill(107,142,35);
	stroke(0,0,205);
	//text("side,", 282,164);
	fill(173,255,47);
	stroke(107,142,35);
	//text("thout", 162,164);
	fill(147,112,219);
	stroke(210,105,30);
	//text("I'm", 438,192);
	fill(176,224,230);
	stroke(34,139,34);
	//text("I", 220,192);
	fill(128,0,0);
	stroke(0,255,127);
	//text("my", 256,164);
	fill(64,224,208);
	stroke(0,139,139);
	//text("I", 40,78);
	stroke(128,0,0);
	//text("it", 442,78);
	fill(148,0,211);
	stroke(199,21,133);
	//text("n.", 200,224);
	fill(250,128,114);
	stroke(127,255,0);
	//text("of", 228,135);
	fill(128,128,0);
	stroke(0,139,139);
	//text("wi", 145,164);
	fill(0,128,0);
	stroke(255,215,0);
	//text("unit", 404,135);
	fill(165,42,42);
	stroke(178,34,34);
	//text("having", 93,78);
	fill(154,205,50);
	stroke(165,42,42);
	//text("long", 149,104);
	fill(128,0,0);
	stroke(32,178,170);
	//text("How", 291,78);
	fill(100,149,237);
	stroke(128,128,0);
	//text("sky,", 48,135);
	fill(128,0,128);
	stroke(0,0,205);
	//text("the", 454,104);
	fill(25,25,112);
	stroke(124,252,0);
	//text("you.", 250,135);
	fill(0,206,209);
	stroke(0,250,154);
	//text("arms.", 306,104);
	fill(240,230,140);
	stroke(255,215,0);
	//text("orever", 17,276);
	fill(0,0,139);
	stroke(153,50,204);
	//text("I", 351,104);
	fill(233,150,122);
	stroke(0,0,255);
	//text("again", 450,135);
	fill(255,0,255);
	stroke(32,178,170);
	//text("Bob,", 84,26);
	fill(186,85,211);
	stroke(46,139,87);
	//text("I", 135,104);
	fill(222,184,135);
	stroke(128,0,128);
	//text("up", 411,104);
	fill(153,50,204);
	stroke(139,0,0);
	//text("we", 8,104);
	fill(178,34,34);
	stroke(32,178,170);
	//text("the", 61,164);
	fill(135,206,235);
	stroke(0,191,255);
	//text("on", 60,224);
	fill(139,69,19);
	stroke(255,0,0);
	//text("How", 77,192);
	fill(255,215,0);
	stroke(128,128,0);
	//text("Daisy", 6,328);
	fill(127,255,0);
	stroke(0,255,255);
	//text("stare", 365,104);
	fill(219,112,147);
	stroke(0,0,128);
	text("is", 424,78);
	fill(64,224,208);
	stroke(32,178,170);
	//text("think", 156,135);
	fill(238,130,238);
	stroke(0,100,0);
	//text("be", 383,135);
	fill(0,191,255);
	stroke(0,255,255);
	//text("I", 113,135);
	fill(219,112,147);
	stroke(255,255,0);
	//text("banking", 6,224);
	stroke(0,0,128);
	text("small", 355,164);
	text("the", 219,78);
	text("place", 249,78);
	fill(0,191,255);
	stroke(107,142,35);
	//text("we", 355,135);
	fill(219,112,147);
	stroke(0,0,128);
	text("store", 294,192);
	text("town", 396,164);
	fill(25,25,112);
	//text("?", 424,192);
	fill(0,0,128);
	stroke(0,128,128);
	//text("F", 6,276);
	fill(219,112,147);
	stroke(218,165,32);
	//text("Even", 6,164);
	fill(0,100,0);
	stroke(0,0,255);
	//text("your", 81,224);
	fill(255,69,0);
	stroke(255,215,0);
	//text("darling", 34,26);
	fill(238,130,238);
	stroke(0,255,127);
	//text("last", 36,104);
	fill(178,34,34);
	stroke(32,178,170);
	//text("When", 281,135);
	fill(64,224,208);
	stroke(153,50,204);
	//text("you", 206,164);
	fill(0,255,127);
	stroke(0,139,139);
	//text("to", 181,104);
	fill(64,224,208);
	stroke(255,0,0);
	//text("?", 490,135);
	fill(220,20,60);
	stroke(139,0,0);
	//text("longing", 374,192);
	fill(64,224,208);
	stroke(165,42,42);
	//text("hold", 203,104);



}
