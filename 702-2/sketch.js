/*

Officer: 5533988
CaseNum: 702-2-51957643-5533988

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a white car with a NumberPlate of 94VJNO. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPIVehicle and the cars in
trafficObjects_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle() {
	/*
	This function should do the following: 
	 - increment SleuthPIVehicle's MilesAmount property by its GasVal property 
	 - add a random amount between -0.05 and 0.05 to SleuthPIVehicle's EngineShudderAmount property
	 - use the constrain function to constrain SleuthPIVehicle's EngineShudderAmount property to values between 0.09 and 1.12
	 - call the Turn_Engine function passing SleuthPIVehicle as an argument
	*/

	SleuthPIVehicle.MilesAmount += SleuthPIVehicle.GasVal;
	SleuthPIVehicle.EngineShudderAmount += random(-0.05, 0.05);
	SleuthPIVehicle.EngineShudderAmount = constrain(SleuthPIVehicle.EngineShudderAmount, 0.09, 1.12);
	Turn_Engine(SleuthPIVehicle);
}


function Switch_Lanes(target_vehicle) {
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoord_a and LaneCoord_b to effect the change.
	 hint: You will need to modify the XPos property of target_vehicle.
	*/

	if (target_vehicle.XPos == LaneCoord_a) {
		target_vehicle.XPos = LaneCoord_b;
	}
	else {
		target_vehicle.XPos = LaneCoord_a;
	}
}


function Vehicle_IsAhead(carObj_a, carObj_b) {
	/*
	This function should do the following: 
	 - determine if carObj_a is in the same lane and less than 200px behind carObj_b.
	 - do this by comparing the two cars' MilesAmount properties
	 - if these requirements are met then return true. Otherwise return false.
	*/

	if (carObj_a.XPos == carObj_b.XPos && carObj_a.MilesAmount < carObj_b.MilesAmount && abs(carObj_a.MilesAmount - carObj_b.MilesAmount) < 200) {
		return true;
	}
	else {
		return false;
	}
}


function Check_BySide(car) {
	/*
	This function should do the following: 
	 - traverse trafficObjects_list and determine if any of the cars are parallel with car.
	 - if a car is found to be parallel to car then return that car object.
	 - cars are considered parallel if the absolute difference between their MilesAmount properties is less than 25 px and they have non-matching XPos properties	*/

	for (var i = 0; i < trafficObjects_list.length; i++) {
		if (abs(trafficObjects_list[i].MilesAmount - car.MilesAmount) < 25 && trafficObjects_list[i].XPos != car.XPos) {
			return trafficObjects_list[i];
		}
	}
}


function Check_Criminal() {
	/*
	This function should do the following: 
	 - Check cars passing parallel to SleuthPIVehicle to see if they match the NumberPlate property in the criminal description.
	 - it does this by calling Check_BySide.
	 - if a positive result is returned then the NumberPlate property of the found car is then checked against the criminal description.
	 - if a match is found then the car in question is assigned to the global variable criminal.
	*/

	var car = Check_BySide(SleuthPIVehicle);
	if (car) {
		if (car.NumberPlate == "94VJNO") {
			criminal = car;
		}
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPIVehicle;

var roadWidth;
var roadLeftEdge;
var LaneCoord_a;
var LaneCoord_b;
var carImages = {};
var criminal;

var trafficObjects_list = [
	{ XPos: 500, YPos: 0, MilesAmount: -200, CarType: 'whiteCar', NumberPlate: 'XP5B4V', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 200, CarType: 'blueCar', NumberPlate: 'UM08B8', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 600, CarType: 'whiteCar', NumberPlate: 'GW8DMZ', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 1000, CarType: 'whiteCar', NumberPlate: 'G9N5XI', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 1400, CarType: 'blueCar', NumberPlate: 'NXYOS0', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 1800, CarType: 'whiteCar', NumberPlate: '94VJNO', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 2200, CarType: 'redCar', NumberPlate: 'CALO3Z', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 2600, CarType: 'whiteCar', NumberPlate: 'AMFEHB', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 3000, CarType: 'redCar', NumberPlate: '3AC5RN', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 3400, CarType: 'whiteCar', NumberPlate: 'EJUF6R', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 3800, CarType: 'redCar', NumberPlate: 'RRMY8Q', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 4200, CarType: 'blueCar', NumberPlate: 'JWM5YK', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 4600, CarType: 'blueCar', NumberPlate: 'VKZ5YW', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 5000, CarType: 'greenCar', NumberPlate: 'GN4ED5', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 5400, CarType: 'whiteCar', NumberPlate: 'KIU5TL', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 5800, CarType: 'blueCar', NumberPlate: 'WW5U6O', GasVal: 2, exhaust: [] }, { XPos: 500, YPos: 0, MilesAmount: 6200, CarType: 'greenCar', NumberPlate: 'PKQWW2', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 6600, CarType: 'redCar', NumberPlate: 'ZZZGK3', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 7000, CarType: 'whiteCar', NumberPlate: 'W99FZF', GasVal: 2, exhaust: [] }, { XPos: 300, YPos: 0, MilesAmount: 7400, CarType: 'redCar', NumberPlate: 'SBF0I3', GasVal: 2, exhaust: [] }
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
	LaneCoord_a = 300;
	LaneCoord_b = 500;

	SleuthPIVehicle =
	{
		XPos: roadLeftEdge + roadWidth / 4,
		YPos: 550,
		MilesAmount: 0,
		GasVal: 3,
		EngineShudderAmount: 0,
		CarType: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	if (criminal) {
		fill(255);

		text("criminal found !", width / 2, height / 2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	Move_Vehicle();
	for (var i = 0; i < trafficObjects_list.length; i++) {
		var b2b = Vehicle_IsAhead(SleuthPIVehicle, trafficObjects_list[i]);
		if (b2b) Switch_Lanes(SleuthPIVehicle);
	}
	Check_Criminal();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < trafficObjects_list.length; i++) {
		trafficObjects_list[i].MilesAmount += trafficObjects_list[i].GasVal;
		trafficObjects_list[i].YPos = SleuthPIVehicle.YPos - trafficObjects_list[i].MilesAmount + SleuthPIVehicle.MilesAmount;
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
			roadLeftEdge + roadWidth / 2, i * 100 + (SleuthPIVehicle.MilesAmount % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (SleuthPIVehicle.MilesAmount % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(SleuthPIVehicle);
	image
		(
			carImages["detective"],
			SleuthPIVehicle.XPos - carImages["detective"].width / 2 + random(-SleuthPIVehicle.EngineShudderAmount, SleuthPIVehicle.EngineShudderAmount),
			SleuthPIVehicle.YPos + random(-SleuthPIVehicle.EngineShudderAmount, SleuthPIVehicle.EngineShudderAmount)
		);

	//draw all other cars

	for (var i = 0; i < trafficObjects_list.length; i++) {
		if (trafficObjects_list[i].YPos < height && trafficObjects_list[i].YPos > -height / 2) {
			image(
				carImages[trafficObjects_list[i].CarType],
				trafficObjects_list[i].XPos - carImages[trafficObjects_list[i].CarType].width / 2,
				trafficObjects_list[i].YPos
			);
			Turn_Engine(trafficObjects_list[i]);

			drawExhaust(trafficObjects_list[i]);
		}
	}

}

function Turn_Engine(car) {

	car.exhaust.push({ size: 2, x: car.XPos, y: car.YPos + carImages[car.CarType].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.GasVal / 3);
		if (car.CarType != "detective") car.exhaust[i].y += (SleuthPIVehicle.GasVal - car.GasVal);
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
