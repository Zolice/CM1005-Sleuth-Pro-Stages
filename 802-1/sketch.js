/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 5533988
CaseNum: 802-1-66420017-5533988

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called shuffle_seed.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 0 and 72.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call shuffle_seed in setup.
- Call Shuffle deck using the return value from shuffle_seed as the argument.

*/

var cards = [{ type: 'Spades', no: 'A' }, { type: 'Spades', no: '2' }, { type: 'Spades', no: '3' }, { type: 'Spades', no: '4' }, { type: 'Spades', no: '5' }, { type: 'Spades', no: '6' }, { type: 'Spades', no: '7' }, { type: 'Spades', no: '8' }, { type: 'Spades', no: '9' }, { type: 'Spades', no: '10' }, { type: 'Spades', no: 'J' }, { type: 'Spades', no: 'Q' }, { type: 'Spades', no: 'K' }, { type: 'Clubs', no: 'A' }, { type: 'Clubs', no: '2' }, { type: 'Clubs', no: '3' }, { type: 'Clubs', no: '4' }, { type: 'Clubs', no: '5' }, { type: 'Clubs', no: '6' }, { type: 'Clubs', no: '7' }, { type: 'Clubs', no: '8' }, { type: 'Clubs', no: '9' }, { type: 'Clubs', no: '10' }, { type: 'Clubs', no: 'J' }, { type: 'Clubs', no: 'Q' }, { type: 'Clubs', no: 'K' }, { type: 'Hearts', no: 'A' }, { type: 'Hearts', no: '2' }, { type: 'Hearts', no: '3' }, { type: 'Hearts', no: '4' }, { type: 'Hearts', no: '5' }, { type: 'Hearts', no: '6' }, { type: 'Hearts', no: '7' }, { type: 'Hearts', no: '8' }, { type: 'Hearts', no: '9' }, { type: 'Hearts', no: '10' }, { type: 'Hearts', no: 'J' }, { type: 'Hearts', no: 'Q' }, { type: 'Hearts', no: 'K' }, { type: 'Diamonds', no: 'A' }, { type: 'Diamonds', no: '2' }, { type: 'Diamonds', no: '3' }, { type: 'Diamonds', no: '4' }, { type: 'Diamonds', no: '5' }, { type: 'Diamonds', no: '6' }, { type: 'Diamonds', no: '7' }, { type: 'Diamonds', no: '8' }, { type: 'Diamonds', no: '9' }, { type: 'Diamonds', no: '10' }, { type: 'Diamonds', no: 'J' }, { type: 'Diamonds', no: 'Q' }, { type: 'Diamonds', no: 'K' }];
var deck_img;
var table_img;
var drawCounter = 0;

function preload() {
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup() {
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffle_seed function here. Followed by a call to shuffleDeck with the return value of shuffle_seed as an argument.
	shuffleDeck(shuffle_seed());
}

//write your shuffle_seed function here
function shuffle_seed() {
	var shuffleSeed = [];
	for (var i = 0; i < 52; i++) {
		shuffleSeed.push(round(random(0, 72)));
	}
	return shuffleSeed;
}


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
	//shuffle the deck by rotating the cards location with the values in
	//shuffleSeed. Repeat this a random number of times between 20 and 50
	var shuffleIterations = parseInt(random(20, 50));
	for (var i = 0; i < shuffleIterations; i++) {
		for (var j = 0; j < cards.length; j++) {
			var tempCard = cards.splice(j, 1);
			var newLoc = (j + shuffleSeed[j]) % 52;
			cards.splice(newLoc, 0, tempCard[0]);
		}
	}
}

function draw() {
	image(table_img, 0, 0);

	if (frameCount % 7 == 0) {
		drawCounter++;
		if (drawCounter == 52) {
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++) {
		if (cards[i].marked) {
			drawCard(cards[i], 400 + i * 18, 230);
		}
		else {
			drawCard(cards[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y) {

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < values.length; j++) {
			if (card.no == values[j] && card.type == suits[i]) {
				//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
