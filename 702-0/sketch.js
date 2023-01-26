/*

Officer: 5533988
CaseNum: 702-0-85602735-5533988

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthPICar to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPICar's milesTravelled property by its gasAmount property 
	 - add a random amount between -0.09 and 0.09 to sleuthPICar's rumbleAmount property
	 - use the constrain function to constrain sleuthPICar's rumbleAmount property to values between 0.01 and 1.01
	 - call the driveCarMotor function passing sleuthPICar as an argument
	*/

	sleuthPICar.milesTravelled += sleuthPICar.gasAmount;
	sleuthPICar.rumbleAmount += random(-0.09, 0.09);
	sleuthPICar.rumbleAmount = constrain(sleuthPICar.rumbleAmount, 0.01, 1.01);
	driveCarMotor(sleuthPICar);


}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPICar;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthPICar = 
	{
		coordinateX: roadLeftEdge + roadWidth/4,
		coordinateY: 300,
		milesTravelled: 0,
		gasAmount: 3,
		rumbleAmount: 0,
		carModel: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	driveVehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPICar.milesTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPICar.milesTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPICar);
	image
	(
		carImages["detective"],
		sleuthPICar.coordinateX - carImages["detective"].width/2 + random(-sleuthPICar.rumbleAmount, sleuthPICar.rumbleAmount),
		sleuthPICar.coordinateY + random(-sleuthPICar.rumbleAmount, sleuthPICar.rumbleAmount)
	);

}

function driveCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.coordinateX, y: car.coordinateY + carImages[car.carModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasAmount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
