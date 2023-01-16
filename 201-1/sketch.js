/*
201 - The case of Judge Hopper
Stage 2 - Hopper’s House

Officer: 5533988
CaseNum: 201-1-72801927-5533988

On entering the house you’re immediately confronted by a trail of blood spatters leading up to the master bedroom. It’s clear that Judge Hopper was abducted from here. What’s more, the clues splayed across the bed sheets indicate a private life a little more exciting than a district judge would admit in public. Somehow these clues connect, you just need to join them together.

Use the triangle command to join the blood spatters on the clues and make the connection. HINT: You should only need a single triangle for this.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  triangle ()

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

    triangle(730, 150, 982, 333, 850, 504)

    // write the code to connect the blood splatters below


    
    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();
}
