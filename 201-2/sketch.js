/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: 5533988
CaseNum: 201-2-75415907-5533988

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. 
Sure enough you find a series of bullet holes peppered across the mirror. 
You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();
    beginShape();
    vertex(435, 70)
    vertex(526, 80)
    vertex(478, 153)
    vertex(573, 172)
    vertex(641, 191)
    vertex(608, 236)
    endShape();

    // write the code to join the bullet holes below



    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
