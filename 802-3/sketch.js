/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 5533988
CaseNum: 802-3-25533797-5533988

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 0 and 95.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cut_location object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called cutDeck and call it from setup.
- This should search for card matching cut_location inside card_deck.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the card_deck array in the deck_upto_cut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var card_deck = [ { cardSuit: 'Spades', number: 'A'} , { cardSuit: 'Spades', number: '2'} , { cardSuit: 'Spades', number: '3'} , { cardSuit: 'Spades', number: '4'} , { cardSuit: 'Spades', number: '5'} , { cardSuit: 'Spades', number: '6'} , { cardSuit: 'Spades', number: '7'} , { cardSuit: 'Spades', number: '8'} , { cardSuit: 'Spades', number: '9'} , { cardSuit: 'Spades', number: '10'} , { cardSuit: 'Spades', number: 'J'} , { cardSuit: 'Spades', number: 'Q'} , { cardSuit: 'Spades', number: 'K'} , { cardSuit: 'Clubs', number: 'A'} , { cardSuit: 'Clubs', number: '2'} , { cardSuit: 'Clubs', number: '3'} , { cardSuit: 'Clubs', number: '4'} , { cardSuit: 'Clubs', number: '5'} , { cardSuit: 'Clubs', number: '6'} , { cardSuit: 'Clubs', number: '7'} , { cardSuit: 'Clubs', number: '8'} , { cardSuit: 'Clubs', number: '9'} , { cardSuit: 'Clubs', number: '10'} , { cardSuit: 'Clubs', number: 'J'} , { cardSuit: 'Clubs', number: 'Q'} , { cardSuit: 'Clubs', number: 'K'} , { cardSuit: 'Hearts', number: 'A'} , { cardSuit: 'Hearts', number: '2'} , { cardSuit: 'Hearts', number: '3'} , { cardSuit: 'Hearts', number: '4'} , { cardSuit: 'Hearts', number: '5'} , { cardSuit: 'Hearts', number: '6'} , { cardSuit: 'Hearts', number: '7'} , { cardSuit: 'Hearts', number: '8'} , { cardSuit: 'Hearts', number: '9'} , { cardSuit: 'Hearts', number: '10'} , { cardSuit: 'Hearts', number: 'J'} , { cardSuit: 'Hearts', number: 'Q'} , { cardSuit: 'Hearts', number: 'K'} , { cardSuit: 'Diamonds', number: 'A'} , { cardSuit: 'Diamonds', number: '2'} , { cardSuit: 'Diamonds', number: '3'} , { cardSuit: 'Diamonds', number: '4'} , { cardSuit: 'Diamonds', number: '5'} , { cardSuit: 'Diamonds', number: '6'} , { cardSuit: 'Diamonds', number: '7'} , { cardSuit: 'Diamonds', number: '8'} , { cardSuit: 'Diamonds', number: '9'} , { cardSuit: 'Diamonds', number: '10'} , { cardSuit: 'Diamonds', number: 'J'} , { cardSuit: 'Diamonds', number: 'Q'} , { cardSuit: 'Diamonds', number: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cut_location = { s: 'Hearts', number: 'K'} ;
var deck_upto_cut = [];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleDeck(shuffleSeed());

	//call your cutDeck function here
	cutDeck();
}

//write your cutDeck function here
function cutDeck(){
	for (var i = 0; i < card_deck.length; i++){
		if (card_deck[i].cardSuit == cut_location.s && card_deck[i].number == cut_location.number){
			deck_upto_cut = card_deck.splice(i, card_deck.length - i);
			break;
		}
	}
	for (var i = 0; i < deck_upto_cut.length / 2; i++){
		var temp = deck_upto_cut[i];
		deck_upto_cut[i] = deck_upto_cut[deck_upto_cut.length - i - 1];
		deck_upto_cut[deck_upto_cut.length - i - 1] = temp;
	}
}

//write your shuffleSeed() function here.
function shuffleSeed(){
	var arr = [];
	for (var i = 0; i < 52; i++){
		arr.push(round(random(0, 95)));
	}
	return arr;
}


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < card_deck.length; j++)
	   {
		  var tempCard = card_deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          card_deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < deck_upto_cut.length)
		{
			drawCard(deck_upto_cut[i], 880 + i * 18, 750);
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
			if (card.number == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
