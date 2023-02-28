/*

Officer: 5533988
CaseNum: 702-3-67978992-5533988

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a white car with a Licence_Plate of OGPPYC.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Detective_CarObject and the cars in
Traffic_List to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveCar() {
	/*
	This function should do the following: 
	 - increment Detective_CarObject's Kms_Driven property by its Gas_Val property 
	 - add a random amount between -0.03 and 0.03 to Detective_CarObject's EngineShudder_Amount property
	 - use the constrain function to constrain Detective_CarObject's EngineShudder_Amount property to values between 0.09 and 0.95
	 - call the cycleMotor function passing Detective_CarObject as an argument
	*/

	Detective_CarObject.Kms_Driven += Detective_CarObject.Gas_Val;
	Detective_CarObject.EngineShudder_Amount += random(-0.03, 0.03);
	Detective_CarObject.EngineShudder_Amount = constrain(Detective_CarObject.EngineShudder_Amount, 0.09, 0.95);
	cycleMotor(Detective_CarObject);
}


function changeLanes(targetCar) {
	/*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Coordinate_A and Lane_Coordinate_B to effect the change.
	 - finally you should return targetCar at the end of the function.
	 hint: You will need to modify the x property of targetCar.
	*/

	if (targetCar.x === Lane_Coordinate_A) {
		targetCar.x = Lane_Coordinate_B;
	}
	else {
		targetCar.x = Lane_Coordinate_A;
	}

	return targetCar;
}


function carAhead(Car_obj_A, Car_obj_B) {
	/*
	This function should do the following: 
	 - determine if Car_obj_A is in the same lane and less than 200px behind Car_obj_B.
	 - do this by comparing the two cars' Kms_Driven properties
	 - if these requirements are met then return true. Otherwise return false.
	*/

	if (Car_obj_A.x === Car_obj_B.x && Car_obj_A.Kms_Driven < Car_obj_B.Kms_Driven && Car_obj_B.Kms_Driven - Car_obj_A.Kms_Driven < 200) {
		return true;
	}
	else {
		return false;
	}
}


function checkVehicleIsParallel(CarObj_A, CarObj_B) {
	/*
	This function should do the following: 
	 - determine if CarObj_A is parallel with CarObj_B.
	 - if CarObj_A is found to be parallel to CarObj_B then return true.
	 - cars are considered parallel if the absolute difference between their Kms_Driven properties is less than 25 px and they have non-matching x properties	*/

	if (abs(CarObj_A.Kms_Driven - CarObj_B.Kms_Driven) < 25 && CarObj_A.x !== CarObj_B.x) {
		return true;
	}
	else {
		return false;
	}
}


function identifyCriminal() {
	/*
	This function should do the following: 
	 - Check cars passing parallel to Detective_CarObject to see if they match the Licence_Plate property in the criminal description.
	 - it does this by traversing Traffic_List and calling checkVehicleIsParallel for each car
.	 - if a positive result is returned then the Licence_Plate property of the found car is then checked against the criminal description.
	 - if a match is found then the car in question is assigned to the global variable criminal.
	*/

	Traffic_List.forEach((car) => {
		if (checkVehicleIsParallel(Detective_CarObject, car) && car.Licence_Plate === "OGPPYC") {
			criminal = car;
		}
	})
}


function pursueCriminal() {
	/*
	This function should do the following: 
	 - only operate if the Tailing_Criminal property of Detective_CarObject is true and the global variable criminal is assigned to an object.
	 - scale the Gas_Val property of Detective_CarObject by a factor of 1.001.
	 - use the min function to make sure that Detective_CarObject's Gas_Val property does not exceed 6.
	 - it should traverse Traffic_List calling carAhead for each car to detect any cars in front of Detective_CarObject.
	 - if a positive result is returned it should check to see if the Licence_Plate property of that car matches that of criminal.
	 - for a match, bookCriminal should be called, otherwise call changeLanes.
	*/

	if (Detective_CarObject.Tailing_Criminal && criminal) {
		Detective_CarObject.Gas_Val = min(Detective_CarObject.Gas_Val * 1.001, 6);

		Traffic_List.forEach((car, i) => {
			if (carAhead(Detective_CarObject, car)) {
				if (car.Licence_Plate === criminal.Licence_Plate) {
					bookCriminal(i);
				}
				else {
					changeLanes(Detective_CarObject);
				}
			}
		})
	}
}


function bookCriminal(vehicle) {
	/*
	This function should do the following: 
	 - set the isArrested property of the car at the index of vehicle to true.
	 - set the IsApprehending_Criminal property of Detective_CarObject to true.
	 - set the Gas_Val properties of both vehicles to zero.
	*/

	Traffic_List[vehicle].isArrested = true;
	Detective_CarObject.IsApprehending_Criminal = true;
	Detective_CarObject.Gas_Val = 0;
	Traffic_List[vehicle].Gas_Val = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Detective_CarObject;

var roadWidth;
var roadLeftEdge;
var Lane_Coordinate_A;
var Lane_Coordinate_B;
var carImages = {};
var criminal;

var Traffic_List = [
	{ x: 500, y: 0, Kms_Driven: -200, Car_Variety: 'blueCar', Licence_Plate: '1O6AD2', Gas_Val: 2, exhaust: [] }, { x: 300, y: 0, Kms_Driven: 200, Car_Variety: 'greenCar', Licence_Plate: 'J0PS9Z', Gas_Val: 2, exhaust: [] }, { x: 300, y: 0, Kms_Driven: 600, Car_Variety: 'blueCar', Licence_Plate: 'INZNPB', Gas_Val: 2, exhaust: [] }, { x: 300, y: 0, Kms_Driven: 1000, Car_Variety: 'blueCar', Licence_Plate: 'NHTDUH', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 1400, Car_Variety: 'whiteCar', Licence_Plate: 'RXVFAZ', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 1800, Car_Variety: 'redCar', Licence_Plate: 'CV0ZJ3', Gas_Val: 2, exhaust: [] }, { x: 300, y: 0, Kms_Driven: 2200, Car_Variety: 'whiteCar', Licence_Plate: 'PCQUAB', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 2600, Car_Variety: 'whiteCar', Licence_Plate: 'AF1YUK', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 3000, Car_Variety: 'redCar', Licence_Plate: '6HMM1Z', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 3400, Car_Variety: 'whiteCar', Licence_Plate: 'OGPPYC', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 3800, Car_Variety: 'blueCar', Licence_Plate: 'AULRLI', Gas_Val: 2, exhaust: [] }, { x: 300, y: 0, Kms_Driven: 4200, Car_Variety: 'blueCar', Licence_Plate: 'QU3UZH', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 4600, Car_Variety: 'redCar', Licence_Plate: 'MJPTFR', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 5000, Car_Variety: 'redCar', Licence_Plate: '1SX1JA', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 5400, Car_Variety: 'greenCar', Licence_Plate: '1Z4LK8', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 5800, Car_Variety: 'greenCar', Licence_Plate: '5N2HBR', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 6200, Car_Variety: 'redCar', Licence_Plate: 'YY2IKC', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 6600, Car_Variety: 'blueCar', Licence_Plate: 'TC01KY', Gas_Val: 2, exhaust: [] }, { x: 500, y: 0, Kms_Driven: 7000, Car_Variety: 'greenCar', Licence_Plate: 'VMQJY3', Gas_Val: 2, exhaust: [] }, { x: 300, y: 0, Kms_Driven: 7400, Car_Variety: 'blueCar', Licence_Plate: '5FJ8GO', Gas_Val: 2, exhaust: [] }
];



function preload() {

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for (var i = 0; i < carTypes.length; i++) {
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup() {
	createCanvas(800, 800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_Coordinate_A = 300;
	Lane_Coordinate_B = 500;

	Detective_CarObject =
	{
		x: roadLeftEdge + roadWidth / 4,
		y: 550,
		Kms_Driven: 0,
		Gas_Val: 3,
		EngineShudder_Amount: 0,
		Car_Variety: 'detective',
		Licence_Plate: '5L3UTH',
		IsApprehending_Criminal: false,
		Tailing_Criminal: false,
		exhaust: []
	}


}



function draw() {
	background(0);

	drawRoad();
	drawCars();

	if (criminal) {
		if (criminal.isArrested) {
			fill(255);

			text("criminal isArrested!", width / 2, height / 2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if (!Detective_CarObject.Tailing_Criminal && !Detective_CarObject.IsApprehending_Criminal) {
		driveCar();
		for (var i = 0; i < Traffic_List.length; i++) {
			var b2b = carAhead(Detective_CarObject, Traffic_List[i]);
			if (b2b) changeLanes(Detective_CarObject);
		}
		identifyCriminal();
		if (criminal) Detective_CarObject.Tailing_Criminal = true;
	}
	else if (!Detective_CarObject.IsApprehending_Criminal) {
		pursueCriminal();
		driveCar();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if (criminal) {
		if (!criminal.isArrested) {
			criminal.Gas_Val = 5;
			for (var i = 0; i < Traffic_List.length; i++) {
				var b2b = carAhead(criminal, Traffic_List[i]);
				if (b2b) {
					if (b2b.Licence_Plate != criminal.Licence_Plate) {
						changeLanes(criminal);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < Traffic_List.length; i++) {
		Traffic_List[i].Kms_Driven += Traffic_List[i].Gas_Val;
		Traffic_List[i].y = Detective_CarObject.y - Traffic_List[i].Kms_Driven + Detective_CarObject.Kms_Driven;

		if (criminal) {
			if (criminal.isArrested) {
				if (Traffic_List[i].x == Detective_CarObject.x) {
					if (Traffic_List[i].Kms_Driven < Detective_CarObject.Kms_Driven) {
						if (Traffic_List[i].Kms_Driven - Detective_CarObject.Kms_Driven < 200) {
							changeLanes(Traffic_List[i]);
						}
					}
				}
			}
		}

	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
	stroke(100);
	fill(50);
	rect(roadLeftEdge, 0, roadWidth, 800);
	stroke(255);

	for (var i = -1; i < 20; i++) {
		line(
			roadLeftEdge + roadWidth / 2, i * 100 + (Detective_CarObject.Kms_Driven % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (Detective_CarObject.Kms_Driven % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	drawExhaust(Detective_CarObject);
	image
		(
			carImages["detective"],
			Detective_CarObject.x - carImages["detective"].width / 2 + random(-Detective_CarObject.EngineShudder_Amount, Detective_CarObject.EngineShudder_Amount),
			Detective_CarObject.y + random(-Detective_CarObject.EngineShudder_Amount, Detective_CarObject.EngineShudder_Amount)
		);

	//draw all other cars

	for (var i = 0; i < Traffic_List.length; i++) {
		if (Traffic_List[i].y < height && Traffic_List[i].y > -height / 2) {
			image(
				carImages[Traffic_List[i].Car_Variety],
				Traffic_List[i].x - carImages[Traffic_List[i].Car_Variety].width / 2,
				Traffic_List[i].y
			);
			cycleMotor(Traffic_List[i]);

			drawExhaust(Traffic_List[i]);
		}
	}

}

function cycleMotor(car) {

	car.exhaust.push({ size: 2, x: car.x, y: car.y + carImages[car.Car_Variety].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.Gas_Val / 3);
		if (car.Car_Variety != "detective") car.exhaust[i].y += (Detective_CarObject.Gas_Val - car.Gas_Val);
		car.exhaust[i].x += random(-1, 1);
		car.exhaust[i].size += 0.5;

		if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
			car.exhaust.splice(i, 1);
		}
	}
}


function drawExhaust(car) {
	noStroke();
	for (var i = 0; i < car.exhaust.length; i++) {
		var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
		fill(125, alpha);
		ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);

	}
}
