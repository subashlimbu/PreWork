//console.log("Up and running!");

let cards = [
	{
		rank: "queen",
		suite: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suite: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suite: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suite: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}


];

const cardsInPlay = [];

function createBoard(){
	for (let i = 0; i < cards.length ; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);

		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement);
	}
};

function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} 
	else {
  		alert("Sorry, try again.");
	}
};

function flipCard(){

		const cardId = this.getAttribute('data-id');

		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suite);
		cardsInPlay.push(cards[cardId].rank);
		this.setAttribute('src', cards[cardId].cardImage);

		if(cardsInPlay.length ===2){
			checkForMatch();
		}


};

function refreshPage(){
    location.reload();
} 

createBoard();

