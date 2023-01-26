/*
Officer: 5533988
CaseNum: 601-3-53175938-5533988

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Magenta fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DeepSkyBlue fill rectangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 30 pixels of any of the crimes within no more than 3 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var CaseyData = [
  { PtX: 518, PtY: 471, recordedDay: 12 },
  { PtX: 486, PtY: 508, recordedDay: 12 },
  { PtX: 475, PtY: 566, recordedDay: 13 },
  { PtX: 376, PtY: 554, recordedDay: 13 },
  { PtX: 316, PtY: 559, recordedDay: 13 },
  { PtX: 265, PtY: 614, recordedDay: 14 },
  { PtX: 253, PtY: 609, recordedDay: 14 },
  { PtX: 240, PtY: 604, recordedDay: 14 },
  { PtX: 220, PtY: 597, recordedDay: 15 },
  { PtX: 178, PtY: 600, recordedDay: 15 },
  { PtX: 199, PtY: 604, recordedDay: 17 },
  { PtX: 146, PtY: 582, recordedDay: 18 },
  { PtX: 115, PtY: 551, recordedDay: 20 },
  { PtX: 67, PtY: 495, recordedDay: 21 },
  { PtX: 39, PtY: 493, recordedDay: 22 },
  { PtX: 68, PtY: 461, recordedDay: 24 }
];


//Recent crime records.

var AttackLog = [
  { PtX: 438, PtY: 420, date: 11, FatalityName: 'JESSIA PORTOS' },
  { PtX: 408, PtY: 451, date: 11, FatalityName: 'JESUS FORSLIN' },
  { PtX: 408, PtY: 377, date: 13, FatalityName: 'KITTY THAXTER' },
  { PtX: 642, PtY: 289, date: 16, FatalityName: 'LIANNE COURTWOOD' },
  { PtX: 623, PtY: 279, date: 16, FatalityName: 'ERMELINDA OORIN' },
  { PtX: 95, PtY: 488, date: 17, FatalityName: 'LARRAINE PEGORD' },
  { PtX: 75, PtY: 522, date: 18, FatalityName: 'MAJORIE JENI' },
  { PtX: 269, PtY: 597, date: 26, FatalityName: 'LESLEY MONKSFORD' },
  { PtX: 389, PtY: 554, date: 28, FatalityName: 'PIERRE DORCEY' },
  { PtX: 484, PtY: 549, date: 2, FatalityName: 'JACQUELINE DURANTS' },
  { PtX: 496, PtY: 484, date: 9, FatalityName: 'BRIDGET BROADVIEW' },
  { PtX: 546, PtY: 463, date: 14, FatalityName: 'JAUNITA JOYER' },
  { PtX: 538, PtY: 359, date: 12, FatalityName: 'DARBY MYRLE' },
  { PtX: 702, PtY: 412, date: 17, FatalityName: 'TU DAVISWOOD' },
  { PtX: 817, PtY: 474, date: 18, FatalityName: 'DEEDEE PHINNEY' }
];


function preload() {
  countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();
  image(countyMap, 0, 0);

  //add your code below here

  for (let i = 0; i < CaseyData.length; i++) {
    fill(255, 0, 255);
    noStroke()
    triangle(CaseyData[i].PtX, CaseyData[i].PtY + 5, CaseyData[i].PtX - 5, CaseyData[i].PtY - 5, CaseyData[i].PtX + 5, CaseyData[i].PtY - 5);
  }

  for (let i = 0; i < AttackLog.length; i++) {
    fill(0, 191, 255);
    noStroke()
    rect(AttackLog[i].PtX, AttackLog[i].PtY, 5, 5);
  }

  for (let i = 0; i < CaseyData.length; i++) {
    for (let j = 0; j < AttackLog.length; j++) {
      if (dist(CaseyData[i].PtX, CaseyData[i].PtY, AttackLog[j].PtX, AttackLog[j].PtY) < 30 && abs(CaseyData[i].recordedDay - AttackLog[j].date) <= 3) {
        var suspectData = {
          x: CaseyData[i].PtX,
          y: CaseyData[i].PtY
        }
        var crimeData = {
          x: AttackLog[j].PtX,
          y: AttackLog[j].PtY,
          victimName: AttackLog[j].FatalityName
        }

        
        possibleMatches.push({
          suspect: suspectData,
          crime: crimeData
        });
      }
    }
  }


  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

    noStroke();
    fill(127);
    text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
  }
}

//We are not using the draw function this time
