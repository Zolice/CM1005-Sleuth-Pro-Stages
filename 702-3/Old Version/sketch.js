/*

Officer: 5533988
CaseNum: 702-3-60642792-5533988

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a green car with a licence_plate of VA6TUX.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthPI_carObject and the cars in
Vehicles_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveCar() {
	/*
	This function should do the following: 
	 - increment sleuthPI_carObject's kms_amt property by its gas_amt property 
	 - add a random amount between -0.02 and 0.02 to sleuthPI_carObject's engineRumble_value property
	 - use the constrain function to constrain sleuthPI_carObject's engineRumble_value property to values between 0.09 and 1.16
	 - call the RunCarEngine function passing sleuthPI_carObject as an argument
	*/

	sleuthPI_carObject.kms_amt += sleuthPI_carObject.gas_amt;
	sleuthPI_carObject.engineRumble_value += random(-0.02, 0.02);
	sleuthPI_carObject.engineRumble_value = constrain(sleuthPI_carObject.engineRumble_value, 0.09, 1.16);
	RunCarEngine(sleuthPI_carObject);
}


function SwapLanes(vehicle) {
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePos_A and LanePos_B to effect the change.
	 - finally you should return vehicle at the end of the function.
	 hint: You will need to modify the coordinate_x property of vehicle.
	*/

	if (vehicle.coordinate_x == LanePos_A) {
		vehicle.coordinate_x = LanePos_B;
	}
	else {
		vehicle.coordinate_x = LanePos_A;
	}
	return vehicle;
}


function SearchCarIsAhead(carObj) {
	/*
	This function should do the following: 
	 - determine if carObj is in the same lane and less than 200px behind any of the cars in Vehicles_Array.
	 - do this by traversing Vehicles_Array and comparing each car's kms_amt property to that of carObj.
	 - use the licence_plate property of each car to ignore cars that match carObj.
	 - if you find a car that matches these requirements then return the index representing the car's position in Vehicles_Array. Otherwise return false.
	*/

	for (var i = 0; i < Vehicles_Array.length; i++) {
		if (Vehicles_Array[i].licence_plate != carObj.licence_plate &&
			Vehicles_Array[i].coordinate_x == carObj.coordinate_x &&
			Vehicles_Array[i].kms_amt > carObj.kms_amt &&
			Vehicles_Array[i].kms_amt - carObj.kms_amt < 200) {
			return i;
		}
	}
	return false;
}


function CheckIsAtSide(targetVehicle) {
	/*
	This function should do the following: 
	 - determine if targetVehicle is parallel with sleuthPI_carObject.
	 - if targetVehicle is found to be parallel to sleuthPI_carObject then return true.
	 - cars are considered parallel if the absolute difference between their kms_amt properties is less than 25 px and they have non-matching coordinate_x properties	*/

	if (abs(targetVehicle.kms_amt - sleuthPI_carObject.kms_amt) < 25 && targetVehicle.coordinate_x != sleuthPI_carObject.coordinate_x) {
		return true;
	}
	else {
		return false;
	}
}


function SpotAssailant() {
	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuthPI_carObject to see if they match the licence_plate property in the assailant description.
	 - it does this by traversing Vehicles_Array and calling CheckIsAtSide for each car
.	 - if a positive result is returned then the licence_plate property of the found car is then checked against the assailant description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/

	for (var i = 0; i < Vehicles_Array.length; i++) {
		if (CheckIsAtSide(Vehicles_Array[i])) {
			if (Vehicles_Array[i].licence_plate == "VA6TUX") {
				return Vehicles_Array[i];
			}
		}
	}
	return false;
}


function ChaseAssailant() {
	/*
	This function should do the following: 
	 - scale the gas_amt property of sleuthPI_carObject by a factor of 1.001.
	 - use the min function to make sure that sleuthPI_carObject's gas_amt property does not exceed 6.
	 - it should call SearchCarIsAhead to detect any cars in front of sleuthPI_carObject.
	 - if a positive result is returned it should check to see if the licence_plate property of that car matches that of assailant.
	 - for a match, StopAssailant should be called, otherwise call SwapLanes.
	*/

	sleuthPI_carObject.gas_amt = min(sleuthPI_carObject.gas_amt * 1.001, 6);
	var index = SearchCarIsAhead(sleuthPI_carObject)
	if(index) {
		var carAhead = Vehicles_Array[index];
		if (carAhead.licence_plate == assailant.licence_plate) {
			StopAssailant(carAhead);
		}
		else {
			SwapLanes(sleuthPI_carObject);
		}
	}
}


function StopAssailant(targetVehicle) {
	/*
	This function should do the following: 
	 - set the isDetained property of targetVehicle to true.
	 - set the arresting_assailant property of sleuthPI_carObject to true.
	 - set the gas_amt properties of both vehicles to zero.
	*/

	targetVehicle.isDetained = true;
	sleuthPI_carObject.arresting_assailant = true;
	targetVehicle.gas_amt = 0;
	sleuthPI_carObject.gas_amt = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_carObject;

var roadWidth;
var roadLeftEdge;
var LanePos_A;
var LanePos_B;
var carImages = {};
var assailant;

var Vehicles_Array = [
	{ coordinate_x: 500, coordinate_y: 0, kms_amt: -200, car_type: 'blueCar', licence_plate: '3F6NLE', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 200, car_type: 'blueCar', licence_plate: 'JXBUUS', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 600, car_type: 'blueCar', licence_plate: '9O75DF', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 1000, car_type: 'whiteCar', licence_plate: 'WG5QBH', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 1400, car_type: 'greenCar', licence_plate: 'OZ76J4', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 1800, car_type: 'greenCar', licence_plate: 'QJQOVI', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 2200, car_type: 'redCar', licence_plate: 'LLYMIZ', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 2600, car_type: 'greenCar', licence_plate: 'VA6TUX', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 3000, car_type: 'greenCar', licence_plate: '17HLN9', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 3400, car_type: 'greenCar', licence_plate: 'EY7O27', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 3800, car_type: 'whiteCar', licence_plate: 'CNUO57', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 4200, car_type: 'redCar', licence_plate: '3KTH39', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 4600, car_type: 'whiteCar', licence_plate: 'VO7IEH', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 5000, car_type: 'blueCar', licence_plate: 'X1U6GX', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 5400, car_type: 'greenCar', licence_plate: 'WOGVXG', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 5800, car_type: 'redCar', licence_plate: '57DJTF', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 6200, car_type: 'blueCar', licence_plate: 'UIZ78Y', gas_amt: 2, exhaust: [] }, { coordinate_x: 300, coordinate_y: 0, kms_amt: 6600, car_type: 'greenCar', licence_plate: 'ST7J5K', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 7000, car_type: 'whiteCar', licence_plate: 'WU3XGL', gas_amt: 2, exhaust: [] }, { coordinate_x: 500, coordinate_y: 0, kms_amt: 7400, car_type: 'redCar', licence_plate: 'UE6FUH', gas_amt: 2, exhaust: [] }
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
	LanePos_A = 300;
	LanePos_B = 500;

	sleuthPI_carObject =
	{
		coordinate_x: roadLeftEdge + roadWidth / 4,
		coordinate_y: 550,
		kms_amt: 0,
		gas_amt: 3,
		engineRumble_value: 0,
		car_type: 'detective',
		licence_plate: '5L3UTH',
		arresting_assailant: false,
		chasing_assailant: false,
		exhaust: []
	}


}



function draw() {
	background(0);

	drawRoad();
	drawCars();

	if (assailant) {
		if (assailant.isDetained) {
			fill(255);

			text("assailant isDetained!", width / 2, height / 2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if (!sleuthPI_carObject.chasing_assailant && !sleuthPI_carObject.arresting_assailant) {
		DriveCar();
		var b2b = SearchCarIsAhead(sleuthPI_carObject);
		if (b2b) SwapLanes(sleuthPI_carObject);
		var a = SpotAssailant();
		if (a != false) assailant = a;
		if (assailant) sleuthPI_carObject.chasing_assailant = true;
	}
	else if (!sleuthPI_carObject.arresting_assailant) {
		ChaseAssailant();
		DriveCar();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if (assailant) {
		if (!assailant.isDetained) {
			assailant.gas_amt = 5;
			var b2b = SearchCarIsAhead(assailant);
			if (b2b) {
				if (b2b.licence_plate != assailant.licence_plate) {
					SwapLanes(assailant);
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < Vehicles_Array.length; i++) {
		Vehicles_Array[i].kms_amt += Vehicles_Array[i].gas_amt;
		Vehicles_Array[i].coordinate_y = sleuthPI_carObject.coordinate_y - Vehicles_Array[i].kms_amt + sleuthPI_carObject.kms_amt;

		if (assailant) {
			if (assailant.isDetained) {
				if (Vehicles_Array[i].coordinate_x == sleuthPI_carObject.coordinate_x) {
					if (Vehicles_Array[i].kms_amt < sleuthPI_carObject.kms_amt) {
						if (Vehicles_Array[i].kms_amt - sleuthPI_carObject.kms_amt < 200) {
							SwapLanes(Vehicles_Array[i]);
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
			roadLeftEdge + roadWidth / 2, i * 100 + (sleuthPI_carObject.kms_amt % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (sleuthPI_carObject.kms_amt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	drawExhaust(sleuthPI_carObject);
	image
		(
			carImages["detective"],
			sleuthPI_carObject.coordinate_x - carImages["detective"].width / 2 + random(-sleuthPI_carObject.engineRumble_value, sleuthPI_carObject.engineRumble_value),
			sleuthPI_carObject.coordinate_y + random(-sleuthPI_carObject.engineRumble_value, sleuthPI_carObject.engineRumble_value)
		);

	//draw all other cars

	for (var i = 0; i < Vehicles_Array.length; i++) {
		if (Vehicles_Array[i].coordinate_y < height && Vehicles_Array[i].coordinate_y > -height / 2) {
			image(
				carImages[Vehicles_Array[i].car_type],
				Vehicles_Array[i].coordinate_x - carImages[Vehicles_Array[i].car_type].width / 2,
				Vehicles_Array[i].coordinate_y
			);
			RunCarEngine(Vehicles_Array[i]);

			drawExhaust(Vehicles_Array[i]);
		}
	}

}

function RunCarEngine(car) {

	car.exhaust.push({ size: 2, x: car.coordinate_x, y: car.coordinate_y + carImages[car.car_type].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.gas_amt / 3);
		if (car.car_type != "detective") car.exhaust[i].y += (sleuthPI_carObject.gas_amt - car.gas_amt);
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
