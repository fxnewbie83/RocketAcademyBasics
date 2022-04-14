// ========================================================================================================================================

// Global variables to initialize values
var myOutputValue = "";
var currentMode = "game selection mode";
var gameSelection = 0;
var numberOfPlayers = 0;
var playerDiceNumber = 0;
var diceRollOne = 0;
var diceRollTwo = 0;
var nameList = [];
var diceRollList = [];

// ========================================================================================================================================

// Helper function to generate random number for dice roll
var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

// ========================================================================================================================================

// Helper function to generate player's player's combined dice value based on dice order
var generateDiceNumber = function (diceOrderNumber, diceRollOne, diceRollTwo) {
  if (diceOrderNumber == 1) {
    playerDiceNumber = diceRollOne * 10 + diceRollTwo;
  }
  if (diceOrderNumber == 2) {
    playerDiceNumber = diceRollTwo * 10 + diceRollOne;
  }
  return playerDiceNumber;
};

// ========================================================================================================================================

// Helper function for execution of game
var checkDiceCombinedNumber = function (input) {
  // Check for user's input for order of dice roll
  if (currentMode == "name input mode" && input != "") {
    currentMode = "dice order";
    nameList.push(input);

    diceRollOne = generateRandomNumber();
    diceRollTwo = generateRandomNumber();

    myOutputValue = `Welcome Player ${input}. <br/> You rolled a ${diceRollOne} and ${diceRollTwo}. <br/><br/> Select the dice order by entering: <br/> 1 if you want 1st dice to go first. <br/> 2 if you want 2nd dice to go first.`;
  }

  // Generate player's combined dice value based on dice order
  if (
    (currentMode == "dice order" && input == 1) ||
    (currentMode == "dice order" && input == 2)
  ) {
    playerDiceNumber = generateDiceNumber(
      input,
      diceRollOne,
      diceRollTwo,
      numberOfPlayers
    );
    diceRollList.push(playerDiceNumber);
    currentMode = "name input mode";

    myOutputValue = `Your combined dice number is ${playerDiceNumber}.`;
  }

  // Check for game mode and determine winning player
  if (diceRollList.length == numberOfPlayers) {
    // Check on winning player with highest dice roll value
    if (gameSelection == 1) {
      // Return maximum value of diceRollList array
      var DiceRollValue = Math.max(...diceRollList);

      // Return index number of maximum value of diceRollList array
      var UserRollIndex = diceRollList.indexOf(DiceRollValue);

      // Return user name based on index number of maximum value of diceRollList array
      var UserRoll = nameList[UserRollIndex];

      myOutputValue = `${myOutputValue} <br/>=========================================================================== <br/><br/> Congratulations! 🏆 <br/> Player ${UserRoll} has won the game with the highest dice roll value of ${DiceRollValue}! <br/> Click on Submit to play Beat It! again`;
    }

    // Check on winning player with lowest dice roll value
    else if (gameSelection == 2) {
      // Return minimum value of diceRollList array
      DiceRollValue = Math.min(...diceRollList);

      // Return index number of minimum value of diceRollList array
      UserRollIndex = diceRollList.indexOf(DiceRollValue);

      // Return user name based on index number of maximum value of diceRollList array
      UserRoll = nameList[UserRollIndex];

      myOutputValue = `${myOutputValue} <br/>=========================================================================== <br/><br/>  Congratulations! 🏆 <br/> Player ${UserRoll} has won the game with the lowest dice roll value of ${DiceRollValue}! <br/> Click on Submit to play Beat It! again`;
    }

    // Initialize the variables to restart the game
    currentMode = "game selection mode";
    gameSelection = 0;
    nameList = [];
    diceRollList = [];
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Main function for beat that game
var main = function (input) {
  // Provide welcome message and initial guide to play the game
  if (currentMode == "game selection mode" && input != 1 && input != 2) {
    myOutputValue = `Welcome to "Beat That!" <br/><br/> Please enter 1 to play based on Highest Combined Number Mode. <br/> Please enter 2 to play based on Lowest Combined Number Mode.`;
  } else if (currentMode == "game selection mode") {
    gameSelection = input;
    currentMode = "number of players mode";
    return `Welcome to "Beat That!" <br/><br/> Please enter a number to determine the number of players to play the game.`;
  }

  // Check for number of players
  if (currentMode == "number of players mode") {
    if (Number.isNaN(Number(input)) || input == "" || input == 1) {
      myOutputValue = `Your input is invalid. Please enter a number, 2 or bigger to determine the number of players to play the game.`;
    } else {
      numberOfPlayers = input;
      numberOfPlayers = Number(numberOfPlayers);
      currentMode = "name input mode";
      return `There will be ${input} players to play the game. <br/><br/> Please proceed to enter Player 1's name.`;
    }
  }

  // Check for players' names and execution of game
  if (currentMode == "name input mode" && input == "") {
    myOutputValue = `Please enter Player's name.`;
  } else if (currentMode == "name input mode" && input != "") {
    myOutputValue = checkDiceCombinedNumber(input);
  } else if (currentMode == "dice order") {
    myOutputValue = checkDiceCombinedNumber(
      input,
      diceRollOne,
      diceRollTwo,
      numberOfPlayers
    );
  }
  console.log(nameList);
  console.log(diceRollList);

  return myOutputValue;
};
