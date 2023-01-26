/*
Officer: 5533988
CaseNum: 601-2-41635988-5533988

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, LawnGreen fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DeepSkyBlue stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 34 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- triangle() NB. Draw each triangle with the point roughly at its center.

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var fryLog = {
	LocationX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	LocationY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var crimeLog_Pt_X = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var crimeLog_Pt_Y = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var crimeLog_Victim_Details = ['LARRAINE PEGORD', 'JULIANA ADVERSANE', 'SUMMER CASIMERE', 'NICOLE ASHELY', 'MAJORIE JENI', 'GAYLA WILLMAR', 'TU DAVISWOOD', 'BRAD SILVEIRA', 'JACQUELINE DURANTS', 'MALINDA GOODBURY', 'DARBY MYRLE', 'ERMELINDA OORIN', 'LIANNE COURTWOOD', 'LESLEY MONKSFORD'];


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
	// code to draw the sightings
	for(let i = 0 ; i < fryLog.LocationX.length ; i++)
	{
		fill(124,252,0);
		noStroke()
		triangle(fryLog.LocationX[i], fryLog.LocationY[i] + 5, fryLog.LocationX[i] - 5, fryLog.LocationY[i] - 5, fryLog.LocationX[i] + 5, fryLog.LocationY[i] - 5);
	}

	// code to draw the crimes
	for(let i = 0 ; i < crimeLog_Pt_X.length ; i++)
	{
		stroke(0,191,255);
		noFill()
		ellipse(crimeLog_Pt_X[i], crimeLog_Pt_Y[i], 5, 5);
	}

	// check if Fry was near any of the crimes
	for(let i = 0 ; i < crimeLog_Pt_X.length ; i++)
	{
		for(let j = 0 ; j < fryLog.LocationX.length ; j++)
		{
			if(dist(crimeLog_Pt_X[i], crimeLog_Pt_Y[i], fryLog.LocationX[j], fryLog.LocationY[j]) < 34)
			{
				possibleMatches.push({crime:{x: crimeLog_Pt_X[i], y: crimeLog_Pt_Y[i], victimName: crimeLog_Victim_Details[i]}, suspect:{x: fryLog.LocationX[j], y: fryLog.LocationY[j]}});
			}
		}
	}



	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
