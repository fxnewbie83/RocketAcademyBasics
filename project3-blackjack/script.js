// Global variables to initialize the variables
var myOutputValue = "";
var currentMode = "WELCOME MESSAGE MODE";
var computerOneCard = {};
var playerOneCard = {};
var computerTwoCard = {};
var playerTwoCard = {};
var computerCardValue = 0;
var playerCardValue = 0;
var output = document.querySelector("#output-div");
var submitButton = document.querySelector("#submit-button");
var hitButton = document.getElementById("hit-button");
var standButton = document.getElementById("stand-button");

// To disable hit and stand button
hitButton.disabled = true;
standButton.disabled = true;

// ========================================================================================================================================

// Initialise a completed card desk

var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["Diamonds ♦️", "Clubs ♣️", "Hearts ♥️", "Spades ♠️"];

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

  // Run through the card desk and replace the rank of jack/queen/king to 10
  for (i = 0; i < 52; i += 1) {
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

// Assign makeDeck function to newDeck for easy retrieving of subsequent deck cards
var newDeck = makeDeck();

// Shuffle the deck and save it in a new variable shuffledDeck to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(newDeck);

// ========================================================================================================================================

// Helper function to reset the game

var resetGameVariables = function () {
  //myOutputValue = `<br/> Player card value is ${playerCardValue}. Dealer card value is ${computerCardValue}. <br/><br/> Click on "Reset" to play Blackjack again.`;
  myOutputValue = ` <br/><br/> Click on Reset to play Blackjack again.`;
  currentMode = "WELCOME MESSAGE MODE";
  shuffledDeck = shuffleCards(makeDeck());
  computerCardValue = 0;
  playerCardValue = 0;
  submitButton.innerHTML = "Reset";
  submitButton.disabled = false;
  hitButton.disabled = true;
  standButton.disabled = true;
  return myOutputValue;
};

// ========================================================================================================================================

// Helper function for initial dealing of 2 cards each from shuffled deck to computer and player
var dealCardsCheckBJ = function () {
  // Draw 2 cards from the top of the deck
  computerOneCard = shuffledDeck.pop();
  playerOneCard = shuffledDeck.pop();
  computerTwoCard = shuffledDeck.pop();
  playerTwoCard = shuffledDeck.pop();

  // Check for total value of computer and player cards
  computerCardValue = computerOneCard.rank + computerTwoCard.rank;
  playerCardValue = playerOneCard.rank + playerTwoCard.rank;

  if (computerCardValue == 21) {
    var resetGame = resetGameVariables();
    return (
      `Dealer got Blackjack with ${computerOneCard.name} of ${computerOneCard.suit} and ${computerTwoCard.name} of ${computerTwoCard.suit} ! <br/> Dealer wins the game!` +
      resetGame
    );
  } else if (playerCardValue == 21) {
    resetGame = resetGameVariables();
    return (
      `Player got Blackjack with ${playerOneCard.name} of ${playerOneCard.suit} and ${playerTwoCard.name} of ${playerTwoCard.suit} ! <br/> Player wins the game!` +
      resetGame
    );
  } else if (computerCardValue == 21 && playerCardValue == 21) {
    resetGame = resetGameVariables();
    return `This is a tie. Both Dealer and Player got Blackjack!` + resetGame;
  }

  // Construct an output string to communicate which cards were drawn
  else {
    myOutputValue = `Player had ${playerOneCard.name} of ${playerOneCard.suit} and ${playerTwoCard.name} of ${playerTwoCard.suit} . <br/> Total card value is ${playerCardValue}. <br/><br/> Dealer had ${computerOneCard.name} of ${computerOneCard.suit} . <br/><br/> Click on "Hit" to draw a card.`;

    if (playerCardValue < 17) {
      // To enable only hit button as minimum card value of 17 is not drawn
      submitButton.disabled = true;
      hitButton.disabled = false;
      return myOutputValue;
    } else {
      // To enable only hit or stand button for player's decision when minimum card value of 17 is drawn
      submitButton.disabled = true;
      hitButton.disabled = false;
      standButton.disabled = false;
      return (myOutputValue += `<br/> Or click on "Stand" to end the turn.`);
    }
  }
};

// ========================================================================================================================================

// Check for logic for when "Hit" button is clicked
hitButton.addEventListener("click", hitCondition);

function hitCondition() {
  // Draw a card when "Hit" button is clicked
  var playerHitCard = shuffledDeck.pop();

  // If card "Ace" is drawn and total card value is more than 10, change the value of card "Ace" to 1
  if (playerHitCard.name == "Ace" && playerCardValue > 10) {
    playerHitCard.rank = 1;
  }
  // Add player's drawn card to previous total so as to check on latest value and enable the "Stand" button for player's next decision
  if (playerCardValue != 0) {
    playerCardValue += playerHitCard.rank;

    if (playerCardValue < 17) {
      myOutputValue = `Player draw a ${playerHitCard.name} of ${playerHitCard.suit}. <br/> Total card value is now ${playerCardValue}. <br/><br/> Click on "Hit" to contine to draw a card`;
    } else {
      standButton.disabled = false;
      myOutputValue = `Player draw a ${playerHitCard.name} of ${playerHitCard.suit}. <br/> Total card value is now ${playerCardValue}. <br/><br/> Click on "Hit" to contine to draw a card or "Stand" to end the turn.`;
    }
  }

  // Provide required output in the Output field
  output.innerHTML = myOutputValue;
}

// ========================================================================================================================================

// Check for logic for when "Stand" button is clicked
standButton.addEventListener("click", standCondition);
function standCondition() {
  computerCardValue = executeComputerDecision();
  var newOutputValue = `<br/><br/> Player card value is ${playerCardValue} . Dealer card value is ${computerCardValue} .`;

  if (
    computerCardValue == playerCardValue ||
    (computerCardValue > 21 && playerCardValue > 21)
  ) {
    var resetGame = resetGameVariables();
    myOutputValue = `This is a tie!` + newOutputValue + resetGame;
  } else if (
    (computerCardValue <= 21 && computerCardValue > playerCardValue) ||
    (computerCardValue <= 21 && playerCardValue > 21)
  ) {
    resetGame = resetGameVariables();
    myOutputValue = `Dealer wins the game!` + newOutputValue + resetGame;
  } else if (
    (playerCardValue <= 21 && playerCardValue > computerCardValue) ||
    (playerCardValue <= 21 && computerCardValue > 21)
  ) {
    resetGame = resetGameVariables();
    myOutputValue = `Player wins the game!` + newOutputValue + resetGame;
  }

  // Provide required output in the Output field
  output.innerHTML = myOutputValue;
}

// ========================================================================================================================================

// Helper function to check on computer card decision
var executeComputerDecision = function () {
  while (computerCardValue < 17) {
    var computerHitCard = shuffledDeck.pop();
    // If card "Ace" is drawn and total card value is more than 10, change the value of card "Ace" to 1
    if (computerHitCard.name == "Ace" && computerCardValue > 10) {
      computerHitCard.rank = 1;
    }
    computerCardValue += computerHitCard.rank;
  }
  return computerCardValue;
};

// ========================================================================================================================================

// main function

var main = function (input) {
  submitButton.innerHTML = "Submit";
  // Provide welcome message and initial guide to play the game
  if (currentMode == "WELCOME MESSAGE MODE") {
    currentMode = "DEAL CARDS AND CHECK WIN MODE";
    return `Welcome to "Blackjack!" <br/><br/> Click "Submit" to start dealing the cards.`;
  }

  // Dealing of cards to computer and player
  if (currentMode == "DEAL CARDS AND CHECK WIN MODE") {
    var executeDealCards = dealCardsCheckBJ();
    return executeDealCards;
  }

  return myOutputValue;
};
