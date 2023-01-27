/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 5533988
CaseNum: 802-2-61304953-5533988

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in win_hand from the deck and store it in the hand array.

- Write a function called winning_hand_set and call it from setup.
- The function should take each card in win_hand and seacrh for a match in deck.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 8 and 63.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [{ type: 'Spades', v: 'A' }, { type: 'Spades', v: '2' }, { type: 'Spades', v: '3' }, { type: 'Spades', v: '4' }, { type: 'Spades', v: '5' }, { type: 'Spades', v: '6' }, { type: 'Spades', v: '7' }, { type: 'Spades', v: '8' }, { type: 'Spades', v: '9' }, { type: 'Spades', v: '10' }, { type: 'Spades', v: 'J' }, { type: 'Spades', v: 'Q' }, { type: 'Spades', v: 'K' }, { type: 'Clubs', v: 'A' }, { type: 'Clubs', v: '2' }, { type: 'Clubs', v: '3' }, { type: 'Clubs', v: '4' }, { type: 'Clubs', v: '5' }, { type: 'Clubs', v: '6' }, { type: 'Clubs', v: '7' }, { type: 'Clubs', v: '8' }, { type: 'Clubs', v: '9' }, { type: 'Clubs', v: '10' }, { type: 'Clubs', v: 'J' }, { type: 'Clubs', v: 'Q' }, { type: 'Clubs', v: 'K' }, { type: 'Hearts', v: 'A' }, { type: 'Hearts', v: '2' }, { type: 'Hearts', v: '3' }, { type: 'Hearts', v: '4' }, { type: 'Hearts', v: '5' }, { type: 'Hearts', v: '6' }, { type: 'Hearts', v: '7' }, { type: 'Hearts', v: '8' }, { type: 'Hearts', v: '9' }, { type: 'Hearts', v: '10' }, { type: 'Hearts', v: 'J' }, { type: 'Hearts', v: 'Q' }, { type: 'Hearts', v: 'K' }, { type: 'Diamonds', v: 'A' }, { type: 'Diamonds', v: '2' }, { type: 'Diamonds', v: '3' }, { type: 'Diamonds', v: '4' }, { type: 'Diamonds', v: '5' }, { type: 'Diamonds', v: '6' }, { type: 'Diamonds', v: '7' }, { type: 'Diamonds', v: '8' }, { type: 'Diamonds', v: '9' }, { type: 'Diamonds', v: '10' }, { type: 'Diamonds', v: 'J' }, { type: 'Diamonds', v: 'Q' }, { type: 'Diamonds', v: 'K' }];
var deck_img;
var table_img;
var drawCounter = 0;

var win_hand = [{ s: 'Spades', v: 'J' }, { s: 'Spades', v: 'K' }, { s: 'Diamonds', v: '10' }, { s: 'Clubs', v: 'Q' }, { s: 'Diamonds', v: 'J' }];
var hand = [];

function preload() {
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup() {
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleDeck(shuffleSeed());

	//call your winning_hand_set function here
	winning_hand_set(hand, win_hand);

}

//write your winning_hand_set function here
function winning_hand_set(hand, win_hand) {
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 52; j++) {
			if (win_hand[i].s == deck[j].type && win_hand[i].v == deck[j].v) {
				hand.push(deck[j]);
			}
		}
	}
}

//write your shuffleSeed() function here.
function shuffleSeed() {
	var shuffleSeed = [];
	for (var i = 0; i < 52; i++) {
		shuffleSeed.push(round(random(8, 63)));
	}
	return shuffleSeed;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
	//shuffle the deck by rotating the cards location with the values in
	//shuffleSeed. Repeat this a random number of times between 20 and 50
	var shuffleIterations = parseInt(random(20, 50));
	for (var i = 0; i < shuffleIterations; i++) {
		for (var j = 0; j < deck.length; j++) {
			var tempCard = deck.splice(j, 1);
			var newLoc = (j + shuffleSeed[j]) % 52;
			deck.splice(newLoc, 0, tempCard[0]);
		}
	}
}

function draw() {
	image(table_img, 0, 0);

	if (frameCount % 7 == 0) {
		drawCounter++;
		if (drawCounter == 5) {
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++) {
		if (i < hand.length) {
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y) {

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < values.length; j++) {
			if (card.v == values[j] && card.type == suits[i]) {
				//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
