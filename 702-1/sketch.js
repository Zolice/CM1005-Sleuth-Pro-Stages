/*

Officer: 5533988
CaseNum: 702-1-82370055-5533988

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthPI_vehicleObject and the cars in
CarObjectsArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle() {
	/*
	This function should do the following: 
	 - increment sleuthPI_vehicleObject's distance_amt property by its accel_amt property 
	 - add a random amount between -0.05 and 0.05 to sleuthPI_vehicleObject's rumble_val property
	 - use the constrain function to constrain sleuthPI_vehicleObject's rumble_val property to values between 0.02 and 0.92
	 - call the Turn_CarEngine function passing sleuthPI_vehicleObject as an argument
	*/

	sleuthPI_vehicleObject.distance_amt += sleuthPI_vehicleObject.accel_amt;
	sleuthPI_vehicleObject.rumble_val += random(-0.05, 0.05);
	sleuthPI_vehicleObject.rumble_val = constrain(sleuthPI_vehicleObject.rumble_val, 0.02, 0.92);
	Turn_CarEngine(sleuthPI_vehicleObject);
}


function Cross_Lanes(carObj) {
	/*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_posA and Lane_posB to effect the change.
	 - finally you should return carObj at the end of the function.
	 hint: You will need to modify the position_x property of carObj.
	*/

	if (carObj.position_x == Lane_posA) {
		carObj.position_x = Lane_posB;
	}
	else {
		carObj.position_x = Lane_posA;
	}
	return carObj
}


function Check_Infront(car) {
	/*
	This function should do the following: 
	 - determine if car is in the same lane and less than 200px behind any of the cars in CarObjectsArray.
	 - do this by traversing CarObjectsArray and comparing each car's distance_amt property to that of car.
	 - if you find a car that matches these requirements then return the number_plate property for the car. Otherwise return false.
	*/

	for (var i = 0; i < CarObjectsArray.length; i++) {
		if (car.position_x == CarObjectsArray[i].position_x && (CarObjectsArray[i].distance_amt - car.distance_amt) < 200 && (CarObjectsArray[i].distance_amt - car.distance_amt) > 0) {
			return CarObjectsArray[i].number_plate;
		}
	}
	return false;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_vehicleObject;

var roadWidth;
var roadLeftEdge;
var Lane_posA;
var Lane_posB;
var carImages = {};

var CarObjectsArray = [
	{ position_x: 500, position_y: 0, distance_amt: -200, car_type: 'redCar', number_plate: 'XEW9V4', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 200, car_type: 'greenCar', number_plate: '1VJ0OZ', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 600, car_type: 'redCar', number_plate: 'E8UYCL', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 1000, car_type: 'redCar', number_plate: 'X2J3FV', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 1400, car_type: 'whiteCar', number_plate: 'DZ9Q2E', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 1800, car_type: 'greenCar', number_plate: 'H133CL', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 2200, car_type: 'greenCar', number_plate: 'OBPFHJ', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 2600, car_type: 'blueCar', number_plate: '43JU26', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 3000, car_type: 'whiteCar', number_plate: 'OMF8UG', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 3400, car_type: 'redCar', number_plate: 'WICBZY', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 3800, car_type: 'blueCar', number_plate: 'TFY5MX', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 4200, car_type: 'whiteCar', number_plate: 'VFOPPL', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 4600, car_type: 'greenCar', number_plate: 'L2A8EN', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 5000, car_type: 'whiteCar', number_plate: 'TB0JI2', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 5400, car_type: 'blueCar', number_plate: 'MAQIDZ', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 5800, car_type: 'redCar', number_plate: 'FB1BZ9', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 6200, car_type: 'redCar', number_plate: '55EEYQ', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 6600, car_type: 'blueCar', number_plate: '07431D', accel_amt: 2, exhaust: [] }, { position_x: 300, position_y: 0, distance_amt: 7000, car_type: 'greenCar', number_plate: 'D7CDCY', accel_amt: 2, exhaust: [] }, { position_x: 500, position_y: 0, distance_amt: 7400, car_type: 'blueCar', number_plate: '52SM8G', accel_amt: 2, exhaust: [] }
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

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_posA = 300;
	Lane_posB = 500;

	sleuthPI_vehicleObject =
	{
		position_x: roadLeftEdge + roadWidth / 4,
		position_y: 550,
		distance_amt: 0,
		accel_amt: 3,
		rumble_val: 0,
		car_type: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Drive_Vehicle();
	var b2b = Check_Infront(sleuthPI_vehicleObject);
	if (b2b) Cross_Lanes(sleuthPI_vehicleObject);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < CarObjectsArray.length; i++) {
		CarObjectsArray[i].distance_amt += CarObjectsArray[i].accel_amt;
		CarObjectsArray[i].position_y = sleuthPI_vehicleObject.position_y - CarObjectsArray[i].distance_amt + sleuthPI_vehicleObject.distance_amt;
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
			roadLeftEdge + roadWidth / 2, i * 100 + (sleuthPI_vehicleObject.distance_amt % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (sleuthPI_vehicleObject.distance_amt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(sleuthPI_vehicleObject);
	image
		(
			carImages["detective"],
			sleuthPI_vehicleObject.position_x - carImages["detective"].width / 2 + random(-sleuthPI_vehicleObject.rumble_val, sleuthPI_vehicleObject.rumble_val),
			sleuthPI_vehicleObject.position_y + random(-sleuthPI_vehicleObject.rumble_val, sleuthPI_vehicleObject.rumble_val)
		);

	//draw all other cars

	for (var i = 0; i < CarObjectsArray.length; i++) {
		if (CarObjectsArray[i].position_y < height && CarObjectsArray[i].position_y > -height / 2) {
			image(
				carImages[CarObjectsArray[i].car_type],
				CarObjectsArray[i].position_x - carImages[CarObjectsArray[i].car_type].width / 2,
				CarObjectsArray[i].position_y
			);
			Turn_CarEngine(CarObjectsArray[i]);

			drawExhaust(CarObjectsArray[i]);
		}
	}

}

function Turn_CarEngine(car) {

	car.exhaust.push({ size: 2, x: car.position_x, y: car.position_y + carImages[car.car_type].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.accel_amt / 3);
		if (car.car_type != "detective") car.exhaust[i].y += (sleuthPI_vehicleObject.accel_amt - car.accel_amt);
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
