/*

Officer: 5533988
CaseNum: 502-2-37199197-5533988

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var A_paper = {
	redacted_0: [ "clip", "meddle", "stuff"], 
	redacted_1: [ "succeed", "charge", "hurry"], 
	redacted_2: [ "Edsger", "meddle", "sail"], 
	redacted_3: [ "hit", "charge", "charge"], 
	redacted_4: [ "protect", "consider", "hurry"], 
	redacted_5: [ "$200,000", "mend", "radiate"], 
	redacted_6: [ "consider", "hurry", "radiate"], 
	redacted_7: [ "syndicate", "succeed", "Governor Zuckerberg"], 
	redacted_8: [ "sail", "fence", "consider"], 
	redacted_9: [ "protect", "campaign", "start"]
};

var B_paper = {
	redacted_0: [ "meddle", "mend", "tug"], 
	redacted_1: [ "consider", "fence", "smile"], 
	redacted_2: [ "start", "play", "mend"], 
	redacted_3: [ "protect", "bake", "mend"], 
	redacted_4: [ "sail", "stuff", "mend"], 
	redacted_5: [ "clip", "fence", "smile"], 
	redacted_6: [ "ALGOL", "meddle", "a donation"], 
	redacted_7: [ "stuff", "consider", "start"], 
	redacted_8: [ "sail", "sneeze", "consider"], 
	redacted_9: [ "hurry", "Hopper", "start"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "Dear +++++++++++++++++++, I am sure that something could be worked out in terms of ++++++++++ for your ++++++++. How does ++++++++ sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. ++++++ needs to be out of the picture. She’s caused enough trouble. Get the +++++++++ to organise the +++ but I’d prefer it you don’t mention me or +++++. I owe them enough favours already. Your old friend, ++++++";

  redactedText = "Dear " + A_paper.redacted_7[2] + ", I am sure that something could be worked out in terms of " + B_paper.redacted_6[2] + " for your " + A_paper.redacted_9[1] + ". How does " + A_paper.redacted_5[0] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + B_paper.redacted_9[1] + " needs to be out of the picture. She’s caused enough trouble. Get the " + A_paper.redacted_7[0] + " to organise the " + A_paper.redacted_3[0] + " but I’d prefer it you don’t mention me or " + B_paper.redacted_6[0] + ". I owe them enough favours already. Your old friend, " + A_paper.redacted_2[0]
  

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
