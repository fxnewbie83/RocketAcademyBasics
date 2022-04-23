/*
var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};
*/

/*
// ========================================================================================================================================

// Global variables to initialize the variables
var myOutputValue = "";
var currentMode = "WELCOME MESSAGE MODE";
var numberOfPlayers = 0;
var cardValue = 0;

// ========================================================================================================================================

// Initialise a new card desk

var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "Ace";
      } else if (cardName == 11) {
        cardName = "Jack";
      } else if (cardName == 12) {
        cardName = "Queen";
      } else if (cardName == 13) {
        cardName = "King";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Run through the card deck and replace the rank of jack/queen/king to 10
  for (i = 0; i < cardDeck.length; i += 1) {
    if (
      cardDeck[i].name == "Jack" ||
      cardDeck[i].name == "Queen" ||
      cardDeck[i].name == "King"
    ) {
      cardDeck[i].rank = 10;
    }
    if (cardDeck[i].name == "Ace") {
      cardDeck[i].rank = 11;
    }
  }

  console.log(cardDeck);
  // Return the completed card deck
  return cardDeck;
};

// ========================================================================================================================================

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// ========================================================================================================================================

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

// ========================================================================================================================================

// Shuffle the deck and save it in a new variable shuffledDeck to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(makeDeck());

// ========================================================================================================================================

// Helper function for initial dealing of 2 cards each from shuffled deck to computer and players
var dealCardsCheck = function () {
  // Draw 2 cards from the top of the deck

  for (var index = 0; index <= numberOfPlayers; index += 1) {
    var dealedCardOne = shuffledDeck.pop();
    var dealedCardTwo = shuffledDeck.pop();
    cardValue = dealedCardOne.rank + dealedCardTwo.rank;

    if (index == 0) {
      myOutputValue = `Dealer has ${dealedCardOne.name} of ${dealedCardOne.suit}. <br/>`;
    }

    if (index >= 1) {
      console.log(dealedCardOne, dealedCardTwo);
      myOutputValue += `<br/> Player ${index} has ${dealedCardOne.name} of ${dealedCardOne.suit} and ${dealedCardTwo.name} of ${dealedCardTwo.suit}. <br/> Total value is ${cardValue}.<br/>`;
    }
  }

  return myOutputValue;
};

// ========================================================================================================================================

// The player goes first, and decides if they want to hit (draw a card) or stand (end their turn).
// The dealer has to hit if their hand is below 17.
// Each players' score is the total of their card ranks. Jacks/Queen/Kings are 10. Aces can be 1 or 11.
// The player who is closer to, but not above 21 wins the hand.

var main = function (input) {
  // Provide welcome message and initial guide to play the game
  if (currentMode == "WELCOME MESSAGE MODE") {
    currentMode = "NUMBER OF PLAYERS MODE";
    //return `Welcome to "Blackjack!" <br/><br/> Click "Submit" to start dealing the cards.`;
    return `Welcome to "Blackjack!" <br/><br/> Please enter a number to determine the number of players to play the game.`;
  }

  // Check for number of players
  if (currentMode == "NUMBER OF PLAYERS MODE") {
    if (Number.isNaN(Number(input)) || input == "" || input == 0 || input > 7) {
      return `Your input is invalid. Please enter a number, 1 to 7 to determine the number of players to play the game with the dealer.`;
    } else {
      numberOfPlayers = Number(input);
      currentMode = "DEAL CARDS AND CHECK WIN MODE";
      return `There will be ${input} players to play the game. <br/><br/> Click "Submit" to start dealing the cards.`;
    }
  }

  // Dealing of cards to computer and players and check for Blackjack
  if (currentMode == "DEAL CARDS AND CHECK WIN MODE") {
    var DealCards = dealCardsCheck();
    return DealCards;
  }

  return myOutputValue;
};
*/

// ========================================================================================================================================

var myButtonClicked = function () {
  var containerColor = document.querySelector(".container");
  containerColor.style.backgroundColor = "Green";
};

var button = document.querySelector("#submit-button");

document.querySelector(".container");
button.addEventListener("click", myButtonClicked);

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};
