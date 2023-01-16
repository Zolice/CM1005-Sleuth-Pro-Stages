/*

Officer: 5533988
CaseNum: 501-1-48406690-5533988

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the itemImg variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    itemImg = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for(var i = 0; i < 12; i++){
        image(itemImg, 729 + i * 32.5, 298 + i * 35);
    }
    for(var i = 0; i < 18; i++){
        image(itemImg, 1262 - i * 42.7, 416 + i * 16.7);
    }

}
