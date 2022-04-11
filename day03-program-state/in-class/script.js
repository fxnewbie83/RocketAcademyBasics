// Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.

// Global variables
var countOfWin = 0;
var countOfWinsToGo = 2;

/*
// Alternative method using array to store the figures
var assignProgSelect = function () {
  var selection = "";
  var randomNumber = Math.floor(Math.random() * 3);
  var progRandomSelect = ["banana", "chisel", "faucet"];
  var selection = progRandomSelect[randomNumber];
  return selection;
};
*/

// Helper function to generate random number for program assignment
var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  //console.log(randomNumber);
  return randomNumber;
};

// Helper function to setup of random program selection of banana, chisel, or faucet
var assignProgSelect = function () {
  var progRandomSelect = generateRandomNumber();
  var selection = "";

  if (progRandomSelect == 1) {
    selection = "banana";
  }
  if (progRandomSelect == 2) {
    selection = "chisel";
  }
  if (progRandomSelect == 3) {
    selection = "faucet";
  }

  return selection;
};

// Helper function to execute logic
var executeSecretWord = function (userInput) {
  var wordRandomSelect = assignProgSelect();

  // convert user input in string to lower case
  userInput = userInput.toLowerCase();

  var myOutputValue = "";
  var defaultMessage = `You have guessed "${userInput}". <br/> The secret word is "${wordRandomSelect}".`;

  // Check for invalid inputs
  if (
    userInput !== "banana" &&
    userInput !== "chisel" &&
    userInput !== "faucet"
  ) {
    myOutputValue = `You have guessed "${userInput}", an invalid choice. <br/> Please try again and enter only "banana", "chisel" or "faucet".`;
  } else if (userInput == wordRandomSelect) {
    countOfWin += 1;
    countOfWinsToGo -= 1;
    myOutputValue = `${defaultMessage} <br/> You guess correctly. <br/> You need ${countOfWinsToGo} more correct guess to win the game.`;
  } else if (userInput != wordRandomSelect) {
    myOutputValue = `${defaultMessage} <br/> You guess wrongly. <br/> You need ${countOfWinsToGo} more correct guess to win the game.`;
  }

  if (countOfWin == 2) {
    countOfWin = 0;
    countOfWinsToGo = 2;
    myOutputValue = `${defaultMessage} <br/> You won the game and you can try again.`;
  }

  return myOutputValue;
};

// Main function for Base: Secret Word
var secretWordBaseMain = function (input) {
  var secretWordBase = executeSecretWord(input);
  var myOutputValue = secretWordBase;
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.

// Helper function to execute logic
var executeSecretWordTwice = function (userInput) {
  var wordRandomSelect = assignProgSelect();

  // convert user input in string to lower case
  userInput = userInput.toLowerCase();

  var myOutputValue = "";
  var defaultMessage = `You have guessed "${userInput}". <br/> The secret word is "${wordRandomSelect}".`;

  // Check for invalid inputs
  if (
    userInput !== "banana" &&
    userInput !== "chisel" &&
    userInput !== "faucet"
  ) {
    myOutputValue = `You have guessed "${userInput}", an invalid choice. <br/> Please try again and enter only "banana", "chisel" or "faucet".`;
  } else if (userInput == wordRandomSelect) {
    countOfWin += 1;
    myOutputValue = `${defaultMessage} <br/> You guess correctly. <br/> You need 1 more consecutive correct guess to win the game.`;
  } else if (userInput != wordRandomSelect) {
    countOfWin = 0;
    myOutputValue = `${defaultMessage} <br/> You guess wrongly. <br/> You need 2 consecutive correct guesses to win the game.`;
  }

  if (countOfWin == 2) {
    countOfWin = 0;
    myOutputValue = `${defaultMessage} <br/> You won the game and you can try again.`;
  }

  return myOutputValue;
};

// Main function for Comfortable: Secret Word Twice in a Row
var secretWordTwiceRowMain = function (input) {
  var secretWordTwice = executeSecretWordTwice(input);
  var myOutputValue = secretWordTwice;
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.

// Helper function to generate random number from 2 to 4 for number of times the player needs to guess correctly in a row to win
var RandomNumberForCorrectGuess = function () {
  var randomNumberCorrect = Math.floor(Math.random() * 3) + 2;
  return randomNumberCorrect;
};

// Helper function to execute logic
var executeSecretWordX = function (userInput, requiredNumberOfWin) {
  var wordRandomSelect = assignProgSelect();
  var countOfXWinsToGo = requiredNumberOfWin;

  // convert user input in string to lower case
  userInput = userInput.toLowerCase();

  var myOutputValue = "";
  var defaultMessage = `You have guessed "${userInput}". <br/> The secret word is "${wordRandomSelect}".`;

  // Check for invalid inputs
  if (
    userInput !== "banana" &&
    userInput !== "chisel" &&
    userInput !== "faucet"
  ) {
    myOutputValue = `You have guessed "${userInput}", an invalid choice. <br/> Please try again and enter only "banana", "chisel" or "faucet".`;
  } else if (userInput == wordRandomSelect) {
    countOfWin += 1;
    countOfXWinsToGo -= countOfWin;
    myOutputValue = `${defaultMessage} <br/> You guess correctly. <br/> You need ${countOfXWinsToGo} more consecutive correct guess to win the game.`;
  } else if (userInput != wordRandomSelect) {
    countOfWin = 0;
    countOfXWinsToGo = requiredNumberOfWin;
    myOutputValue = `${defaultMessage} <br/> You guess wrongly. <br/> You need ${requiredNumberOfWin} consecutive correct guesses to win the game.`;
  }

  if (countOfWin == requiredNumberOfWin) {
    countOfWin = 0;
    countOfXWinsToGo = requiredNumberOfWin;
    currentMode = "start of round";
    myOutputValue = `${defaultMessage} <br/> You won the game and you can try again.`;
  }

  return myOutputValue;
};

var currentMode = "start of round";
var requiredNumberOfWin = 0;

// Main function for Comfortable: Secret Word X in a Row
var secretWordXRowMain = function (input) {
  var myOutputValue = "";

  if (currentMode == "start of round") {
    requiredNumberOfWin = RandomNumberForCorrectGuess();
    currentMode = "new round";
  }

  var secretWordX = executeSecretWordX(input, requiredNumberOfWin);
  myOutputValue = secretWordX;
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.

// Helper function to generate random number for dice roll
var generateDiceNumber = function () {
  var randomDiceNumber = Math.floor(Math.random() * 6) + 1;
  return randomDiceNumber;
};

// Helper function to generate random number for within number
var generateWithinNumber = function () {
  var randomWithinNumber = Math.floor(Math.random() * 3) + 1;
  return randomWithinNumber;
};

// Helper function to execute logic of game
var executeDiceWithinGame = function (input, withinNumber) {
  var randomDiceNumber = generateDiceNumber();
  input = parseInt(input);
  console.log(`Within number: ${withinNumber}`);
  var defaultMessage = `You guessed a ${input}. You just rolled a ${randomDiceNumber}.`;
  var myOutputValue = "";

  if (Number.isNaN(Number(input)) == true || input < 1 || input > 6) {
    myOutputValue = "Please enter a number from 1 to 6.";
    return myOutputValue;
  }

  var minRange = randomDiceNumber - withinNumber;
  var maxRange = randomDiceNumber + withinNumber;

  if (input >= minRange && input <= maxRange) {
    myOutputValue = `${defaultMessage} <br/> Your guess is within ${withinNumber} of the dice roll. <br/> You win the game! You can start a new round.`;
    currentMode = "start of round";
  } else {
    myOutputValue = `${defaultMessage} <br/> Your guess is not within ${withinNumber} of the dice roll. <br/> You lose. Please try again`;
  }
  return myOutputValue;
};

// Global variables to initialise the variables used in main function
var currentMode = "start of round";
var requiredWithinNumber = 0;

// Main function for More Comfortable: Dice Within
var diceWithinMain = function (input) {
  var myOutputValue = "";

  if (currentMode == "start of round") {
    requiredWithinNumber = generateWithinNumber();
    currentMode = "new round";
  }

  var diceWithinGame = executeDiceWithinGame(input, requiredWithinNumber);
  myOutputValue = diceWithinGame;

  return myOutputValue;
};

// ========================================================================================================================================

// Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.

// Helper function to execute logic of game
var executeTwoDiceWithinGame = function (input, withinNumber) {
  var randomDiceNumberOne = generateDiceNumber();
  var randomDiceNumberTwo = generateDiceNumber();
  input = parseInt(input);
  console.log(`Within number: ${withinNumber}`);
  var defaultMessage = `You guessed a ${input}. You just rolled a ${randomDiceNumberOne} and ${randomDiceNumberTwo}.`;
  var myOutputValue = "";

  if (Number.isNaN(Number(input)) == true || input < 1 || input > 6) {
    myOutputValue = "Please enter a number from 1 to 6.";
    return myOutputValue;
  }

  var minRangeOne = randomDiceNumberOne - withinNumber;
  var maxRangeOne = randomDiceNumberOne + withinNumber;
  var minRangeTwo = randomDiceNumberTwo - withinNumber;
  var maxRangeTwo = randomDiceNumberTwo + withinNumber;

  if (
    (input >= minRangeOne && input <= maxRangeOne) ||
    (input >= minRangeTwo && input <= maxRangeTwo)
  ) {
    myOutputValue = `${defaultMessage} <br/> Your guess is within ${withinNumber} of either dice rolls. <br/> You win the game! You can start a new round.`;
    currentMode = "start of round";
  } else {
    myOutputValue = `${defaultMessage} <br/> Your guess is not within ${withinNumber} of either dice rolls. <br/> You lose. Please try again`;
  }
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  var myOutputValue = "";

  if (currentMode == "start of round") {
    requiredWithinNumber = generateWithinNumber();
    currentMode = "new round";
  }

  var diceWithinGame = executeTwoDiceWithinGame(input, requiredWithinNumber);
  myOutputValue = diceWithinGame;

  return myOutputValue;
};

// ========================================================================================================================================

// Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.

// Update our dice game to allow the player to play a round of 4D every 2 times the player wins the dice roll guess. Verify our 4D game logic such that it is possible to win this 4D game.

// var dice4DMain = function (input) {
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// ========================================================================================================================================

/*

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};
*/
