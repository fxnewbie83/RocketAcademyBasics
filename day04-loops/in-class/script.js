// Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.

var myOutputValue = "";
var counter = 0;

var emojiNumberCharactersMain = function (input) {
  for (counter = 0; counter < input; counter += 1) {
    myOutputValue += "🤣";
  }
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.

var emojiSquareMain = function (input) {
  for (var outerCounter = 0; outerCounter < input; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < input; innerCounter += 1) {
      myOutputValue += "🤣";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

// ========================================================================================================================================

//Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.

var emojiTriangleMain = function (input) {
  for (var outerCounter = 0; outerCounter < input; outerCounter += 1) {
    for (
      var innerCounter = 0;
      innerCounter <= outerCounter;
      innerCounter += 1
    ) {
      myOutputValue += "🤣";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.

var emojiOutlineSquareMain = function (input) {
  var myOutputValue = "";
  for (var outerCounter = 0; outerCounter < input; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < input; innerCounter += 1) {
      if (
        innerCounter == 0 ||
        innerCounter == input - 1 ||
        outerCounter == 0 ||
        outerCounter == input - 1
      ) {
        myOutputValue += "👌";
      } else {
        myOutputValue += "🤣";
      }
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.

// Create a dice-guessing game with a variable number of dice rolls determined by the user.
// The game will have 2 modes.
// In the 1st mode, the user will enter the number of dice they wish to roll.
// In the 2nd mode, the user will enter a guess that will apply to all dice rolls.
// For example, if the user has chosen to roll 2 dice in Mode 1 and guesses 4 in Mode 2, that guess of 4 will apply to both Dice 1 and Dice 2.
// After the user guesses, the program will run a loop where the number of iterations is the number of dice rolls from Mode 1.
// Each loop iteration will roll a dice and verify if the user has won.
// If the user guesses correctly for any of the dice rolls, the user wins.
// The game keeps track of and outputs the overall win-loss record.

// Helper function to generate random number for dice roll
var generateDiceNumber = function () {
  var randomDiceNumber = Math.floor(Math.random() * 6) + 1;
  return randomDiceNumber;
};

// Global variables to initialise the variables used in main function
var currentMode = "mode1";
var myOutputValue = "";
var requiredNumberOfDice = 0;
var rollDiceNumber = [];

var multiDiceBaseMain = function (input) {
  // Mode 1 for user to enter the number of dice they wish to roll

  if (currentMode == "mode1") {
    requiredNumberOfDice = input;
    myOutputValue = `You wish to roll ${requiredNumberOfDice} dice. <br/> Please guess a number from 1 to 6 to start the game.`;
    currentMode = "mode2";
  }

  currentMode == "mode2";
  rollDiceNumber = [];

  for (var index = 0; index < requiredNumberOfDice; index += 1) {
    var rollDiceNumber = generateDiceNumber();
    rollDiceNumber.push(rollDiceNumber);
    // if (rollDiceNumber == input) {
    //   hasUserWon = true;
    // }
  }

  // Mode 2 for user to enter a guess that will apply to all dice rolls.
  // else if (currentMode == "mode2") {
  //   if (Number.isNaN(Number(input)) == true || input < 1 || input > 6) {
  //     myOutputValue = "Please guess a number from 1 to 6.";
  //     return myOutputValue;
  //   }
  //   if (input >= 1 && input <= 6) {
  //     console.log(requiredNumberOfDice);
  //     var rollDiceNumber = [];
  //     for (var index = 0; index < requiredNumberOfDice; index += 1) {
  //       rollDiceNumber = generateDiceNumber();
  //       rollDiceNumber.push(rollDiceNumber);

  //       myOutputValue = rollDiceNumber;
  //       // if (input == rollDiceNumber) {
  //       //   myOutputValue = `You guessed a ${input} and rolled a ${rollDiceNumber}. <br/> You win.`;
  //       // } else if (input != rollDiceNumber) {
  //       //   myOutputValue = `You guessed a ${input} and rolled a ${rollDiceNumber}. <br/> You lose. Please try again`;
  //       // }
  //     }
  //   }
  // }

  return myOutputValue;
};

// ========================================================================================================================================

/*

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};
*/
