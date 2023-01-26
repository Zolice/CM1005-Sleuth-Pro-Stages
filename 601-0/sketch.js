/*
Officer: 5533988
CaseNum: 601-0-29791345-5533988

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing Navy stroke vertexes at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- beginShape(), endShape(), vertex()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var CriminalSighted = [ 
  { pos_x : 127, pos_y : 175},
  { pos_x : 156, pos_y : 158},
  { pos_x : 179, pos_y : 192},
  { pos_x : 200, pos_y : 154},
  { pos_x : 220, pos_y : 133},
  { pos_x : 228, pos_y : 168},
  { pos_x : 249, pos_y : 149},
  { pos_x : 269, pos_y : 139},
  { pos_x : 292, pos_y : 168},
  { pos_x : 321, pos_y : 133},
  { pos_x : 354, pos_y : 159},
  { pos_x : 390, pos_y : 144},
  { pos_x : 396, pos_y : 225},
  { pos_x : 429, pos_y : 228},
  { pos_x : 456, pos_y : 230},
  { pos_x : 467, pos_y : 277},
  { pos_x : 483, pos_y : 267},
  { pos_x : 531, pos_y : 291},
  { pos_x : 547, pos_y : 278},
  { pos_x : 571, pos_y : 274},
  { pos_x : 589, pos_y : 318},
  { pos_x : 637, pos_y : 280} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{

	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();

	image(countyMap, 0,0);

	//add your code below here
  beginShape();
  for (var i = 0; i < CriminalSighted.length; i++)
  {
    stroke(0, 0, 128);
    vertex(CriminalSighted[i].pos_x, CriminalSighted[i].pos_y);
  }
  endShape();
  
}

//We are not using the draw function this time
