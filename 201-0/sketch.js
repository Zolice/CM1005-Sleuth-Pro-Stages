/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 5533988
CaseNum: 201-0-63480484-5533988

Judge Hopper has gone missing and we’ve been booked to investigate. This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. You will need to use different values for the width and height arguments.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  ellipse ()

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

    ellipse(720, 241, 29, 116)
    ellipse(255, 229, 101, 116)
    ellipse(567, 356, 155, 97)
    ellipse(568, 243, 84, 102)

    // write the code to draw around the evidence below




    //A helpful mouse pointer
    push();
    fill(0);
    noStroke();
    text(mouseX + "," + mouseY, mouseX, mouseY);
    pop();

}
