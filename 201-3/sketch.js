/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5533988
CaseNum: 201-3-42459034-5533988

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload() {
    img = loadImage('scene.png');
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {

    image(img, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape()
    vertex(466, 209)
    vertex(258, 340)
    vertex(214, 389)
    vertex(284, 455)
    vertex(378, 433)
    vertex(517, 313)
    vertex(536, 366)
    vertex(619, 337)
    vertex(615, 313)
    vertex(561, 332)
    vertex(572, 268)
    vertex(575, 197)
    vertex(526, 152)
    vertex(470, 154)
    vertex(404, 57)
    vertex(377, 75)
    vertex(401, 136)
    vertex(466, 209)    
    endShape();


    //A helpful mouse pointer
    push();
    fill(0);
    noStroke();
    text(mouseX + "," + mouseY, mouseX, mouseY);
    pop();

}
