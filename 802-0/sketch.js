/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 5533988
CaseNum: 802-0-52832047-5533988

Don your best threads we're off to the Monte Carlo Casino ! We're tailing a gang of high rolling statisticians who run Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are.

They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

- Write a function called  pick_cards.
- Inside the function, use a for loop to set the marked property of the card_deck array elements to true when the suit is Spades or the value is 4
- Call the function from within setup

*/

var card_deck = [ { marked: false, card_suit: 'Spades', no: 'A'} , { marked: false, card_suit: 'Spades', no: '2'} , { marked: false, card_suit: 'Spades', no: '3'} , { marked: false, card_suit: 'Spades', no: '4'} , { marked: false, card_suit: 'Spades', no: '5'} , { marked: false, card_suit: 'Spades', no: '6'} , { marked: false, card_suit: 'Spades', no: '7'} , { marked: false, card_suit: 'Spades', no: '8'} , { marked: false, card_suit: 'Spades', no: '9'} , { marked: false, card_suit: 'Spades', no: '10'} , { marked: false, card_suit: 'Spades', no: 'J'} , { marked: false, card_suit: 'Spades', no: 'Q'} , { marked: false, card_suit: 'Spades', no: 'K'} , { marked: false, card_suit: 'Clubs', no: 'A'} , { marked: false, card_suit: 'Clubs', no: '2'} , { marked: false, card_suit: 'Clubs', no: '3'} , { marked: false, card_suit: 'Clubs', no: '4'} , { marked: false, card_suit: 'Clubs', no: '5'} , { marked: false, card_suit: 'Clubs', no: '6'} , { marked: false, card_suit: 'Clubs', no: '7'} , { marked: false, card_suit: 'Clubs', no: '8'} , { marked: false, card_suit: 'Clubs', no: '9'} , { marked: false, card_suit: 'Clubs', no: '10'} , { marked: false, card_suit: 'Clubs', no: 'J'} , { marked: false, card_suit: 'Clubs', no: 'Q'} , { marked: false, card_suit: 'Clubs', no: 'K'} , { marked: false, card_suit: 'Hearts', no: 'A'} , { marked: false, card_suit: 'Hearts', no: '2'} , { marked: false, card_suit: 'Hearts', no: '3'} , { marked: false, card_suit: 'Hearts', no: '4'} , { marked: false, card_suit: 'Hearts', no: '5'} , { marked: false, card_suit: 'Hearts', no: '6'} , { marked: false, card_suit: 'Hearts', no: '7'} , { marked: false, card_suit: 'Hearts', no: '8'} , { marked: false, card_suit: 'Hearts', no: '9'} , { marked: false, card_suit: 'Hearts', no: '10'} , { marked: false, card_suit: 'Hearts', no: 'J'} , { marked: false, card_suit: 'Hearts', no: 'Q'} , { marked: false, card_suit: 'Hearts', no: 'K'} , { marked: false, card_suit: 'Diamonds', no: 'A'} , { marked: false, card_suit: 'Diamonds', no: '2'} , { marked: false, card_suit: 'Diamonds', no: '3'} , { marked: false, card_suit: 'Diamonds', no: '4'} , { marked: false, card_suit: 'Diamonds', no: '5'} , { marked: false, card_suit: 'Diamonds', no: '6'} , { marked: false, card_suit: 'Diamonds', no: '7'} , { marked: false, card_suit: 'Diamonds', no: '8'} , { marked: false, card_suit: 'Diamonds', no: '9'} , { marked: false, card_suit: 'Diamonds', no: '10'} , { marked: false, card_suit: 'Diamonds', no: 'J'} , { marked: false, card_suit: 'Diamonds', no: 'Q'} , { marked: false, card_suit: 'Diamonds', no: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your pick_cards function here
	pick_cards();

}

//write your pick_cards function here
function pick_cards()
{
	for (var i = 0; i < card_deck.length; i++)
	{
		if (card_deck[i].card_suit == "Spades" || card_deck[i].no == 4)
		{
			card_deck[i].marked = true;
		}
	}
}


function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (card_deck[i].marked)
		{
			drawCard(card_deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(card_deck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.no == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
