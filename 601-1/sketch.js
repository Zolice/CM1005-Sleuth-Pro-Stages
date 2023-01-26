/*
Officer: 5533988
CaseNum: 601-1-29084360-5533988

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Red stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, LimeGreen fill ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var CaseyLog = [ 
  { Coord_X : 639, Coord_Y : 288},
  { Coord_X : 681, Coord_Y : 286},
  { Coord_X : 712, Coord_Y : 293},
  { Coord_X : 756, Coord_Y : 310},
  { Coord_X : 715, Coord_Y : 368},
  { Coord_X : 701, Coord_Y : 425},
  { Coord_X : 753, Coord_Y : 436},
  { Coord_X : 815, Coord_Y : 468},
  { Coord_X : 795, Coord_Y : 506},
  { Coord_X : 788, Coord_Y : 497},
  { Coord_X : 781, Coord_Y : 486},
  { Coord_X : 768, Coord_Y : 489},
  { Coord_X : 750, Coord_Y : 500},
  { Coord_X : 732, Coord_Y : 506},
  { Coord_X : 714, Coord_Y : 514},
  { Coord_X : 695, Coord_Y : 531},
  { Coord_X : 693, Coord_Y : 552},
  { Coord_X : 654, Coord_Y : 523},
  { Coord_X : 624, Coord_Y : 500},
  { Coord_X : 594, Coord_Y : 484},
  { Coord_X : 555, Coord_Y : 474} 
];


//Recent crime records.

var RobberyRecorded_CoordinateX = [403, 402, 427, 646, 639, 830, 809, 844, 802, 683, 552, 629, 712, 783, 415, 561, 562, 751, 680, 626, 701, 838, 322, 468, 625];
var RobberyRecorded_CoordinateY = [401, 360, 403, 284, 264, 434, 443, 496, 350, 413, 464, 498, 562, 603, 225, 282, 392, 283, 359, 436, 455, 565, 508, 556, 737];


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
  
  for (var i = 0; i < CaseyLog.length; i++) {
    stroke(255, 0, 0);
    noFill()
    rect(CaseyLog[i].Coord_X, CaseyLog[i].Coord_Y, 5, 5);
  }
  
  for (var i = 0; i < RobberyRecorded_CoordinateX.length; i++) {
    fill(50, 205, 50);
    noStroke()
    ellipse(RobberyRecorded_CoordinateX[i], RobberyRecorded_CoordinateY[i], 5, 5);
  }



}

//We are not using the draw function this time
