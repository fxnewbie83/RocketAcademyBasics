/*
// 1.  Remember! Global variables exist throughout the program
// But variables with function scope ONLY exist inside the function when the function runs
// Let's understand this code

var papayaCount = 0;

var main = function () {
  papayaCount = papayaCount + 1;
  var myOutputValue = "You have " + papayaCount + " papayas";
  return myOutputValue;
};

//  Q: Why does papayaCount on line 5 have the var keyword and line 7 doesn't?

//  Q: What behaviour would we see if we moved line 5 inside the main function?

//  Q: What behaviour would we see if we moved line 5 below the main function?

//  Q: Will moving line 9 above line 8 make a difference in how the program behaves?

// ################################################################################

// 2. Global Scope

var papayaCount = 0;

console.log("papaya count outside");
console.log(papayaCount);

var main = function () {
  papayaCount = papayaCount + 1;

  console.log("papaya count inside");
  console.log(papayaCount);

  var myOutputValue = "You have " + papayaCount + " papayas";
  return myOutputValue;
};

// ################################################################################

// 3. Function Scope

var papayaCount = 0;

console.log("myOutputValue outside");
console.log(myOutputValue);

var main = function (input) {
  papayaCount = papayaCount + 1;

  var myOutputValue = "You have " + papayaCount + " papayas";

  console.log("myOutputValue inside");
  console.log(myOutputValue);

  return myOutputValue;
};

///////////////////////////////////////////////

// Take user name in first game mode
// Then play game in second game mode

// Global variable
// Used as Game state / programme state
var mode = "input username";

var userName = "";

var main = function (input) {
  console.log("input:", input);
  console.log("mode:", mode);

  var myOutputValue = "";

  if (mode == "input username") {
    userName = input;
    mode = "play SPS";
    myOutputValue = `Hi ${userName}, please enter Scissors, paper or stone to play`;
  } else if (mode == "play SPS") {
    // ..... SPS game logic and helper function
    console.log("SPS Game,", input);
    myOutputValue = `${userName}, you entered ${input} as your guess. You WON/LOST/DREW!`;
  }

  return myOutputValue;
};

///////////////////////////////////////////////

// Used as Game state / programme state example
var mode = "meat";

var main = function (input) {
  console.log("input:", input);

  if (input == "i love meat") {
    mode = "meat";
  } else if (input == "i hate meat") {
    mode = "veg";
  }

  console.log("mode:", mode);

  var myOutputValue = "";

  if (mode == "meat") {
    myOutputValue = "Wow cheeseburger so goooood";
  }

  if (mode == "veg") {
    myOutputValue = "GIVE ME THAT SALAD!";
  }

  return myOutputValue;
};
*/

// ========================================================================================================================================

// Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.

// global scope
var globalVariable = 0;

// also global scope
var introScopeMain = function (input) {
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

// ========================================================================================================================================

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  console.log(`Rolled dice number: ${diceNumber}`);
  return diceNumber;
};

// Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.

var appSetupMain = function (input) {
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.

var lastDiceRoll = 0;
var myOutputValue = "";

var lastRollMain = function (input) {
  if (Number.isNaN(Number(input)) == true || input < 1 || input > 6) {
    myOutputValue = "Please enter a number from 1 to 6.";
    return myOutputValue;
  }

  var randomDiceNumber = rollDice();

  if (lastDiceRoll == 0 && randomDiceNumber == input) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. There is a match. You win!`;
  }
  if (lastDiceRoll == 0 && randomDiceNumber != input) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. There is no match. You lose!`;
  }
  if (lastDiceRoll != 0 && randomDiceNumber == input) {
    myOutputValue = `Your last roll was ${lastDiceRoll}. <br/> You just rolled a ${randomDiceNumber}. You guessed ${input}. There is a match. You win!.`;
  }
  if (lastDiceRoll != 0 && randomDiceNumber != input) {
    myOutputValue = `Your last roll was ${lastDiceRoll}. <br/> You just rolled a ${randomDiceNumber}. You guessed ${input}. There is no match. You lose!`;
  }

  lastDiceRoll = randomDiceNumber;
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.

var countOfDiceRoll = 1;
var countOfDiceRollWin = 0;
var winPercentage = 0;
var myOutputValue = "";

var winLossMain = function (input) {
  if (Number.isNaN(Number(input)) == true || input < 1 || input > 6) {
    myOutputValue = "Please enter a number from 1 to 6.";
    return myOutputValue;
  }

  var randomDiceNumber = rollDice();

  if (countOfDiceRoll == 1 && randomDiceNumber != input) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
  }

  if (countOfDiceRoll == 1 && randomDiceNumber == input) {
    countOfDiceRollWin += 1;
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  }

  if (countOfDiceRoll != 1 && randomDiceNumber != input) {
    winPercentage = ((countOfDiceRollWin / countOfDiceRoll) * 100).toFixed(2);
    myOutputValue = `You win ${winPercentage}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
  }

  if (countOfDiceRoll != 1 && randomDiceNumber == input) {
    countOfDiceRollWin += 1;
    winPercentage = ((countOfDiceRollWin / countOfDiceRoll) * 100).toFixed(2);
    myOutputValue = `You win ${winPercentage}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  }

  console.log(`Count of dice roll: ${countOfDiceRoll}`);
  countOfDiceRoll += 1;
  console.log(`Count of wins: ${countOfDiceRollWin}`);
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.

var diceOneCount = 0;
var diceTwoCount = 0;
var diceThreeCount = 0;
var diceFourCount = 0;
var diceFiveCount = 0;
var diceSixCount = 0;
var mostDiceRoll = 0;
var countOfDiceRoll = 1;
var myOutputValue = "";

// Need to find the maximum of all 6 diceRoll and output as "e.g. 2 is the number you roll the most"
// Not complete, need to redo

var mostRolledMain = function (input) {
  var randomDiceNumber = rollDice();

  if (countOfDiceRoll == 1 && randomDiceNumber != input) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
  }
  if (countOfDiceRoll == 1 && randomDiceNumber == input) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  }

  // Keep track of count of dice rolled
  if (randomDiceNumber == 1) {
    diceOneCount += 1;
  } else if (randomDiceNumber == 2) {
    diceTwoCount += 1;
  } else if (randomDiceNumber == 3) {
    diceThreeCount += 1;
  } else if (randomDiceNumber == 4) {
    diceFourCount += 1;
  } else if (randomDiceNumber == 5) {
    diceFiveCount += 1;
  } else if (randomDiceNumber == 6) {
    diceSixCount += 1;
  }
  var maxOfDiceRoll = Math.max(
    diceOneCount,
    diceTwoCount,
    diceThreeCount,
    diceFourCount,
    diceFiveCount,
    diceSixCount
  );
  console.log(`Maximum dice roll: ${maxOfDiceRoll}`);

  if (maxOfDiceRoll == diceOneCount) {
    mostDiceRoll = 1;
  } else if (maxOfDiceRoll == diceTwoCount) {
    mostDiceRoll = 2;
  } else if (maxOfDiceRoll == diceThreeCount) {
    mostDiceRoll = 3;
  } else if (maxOfDiceRoll == diceFourCount) {
    mostDiceRoll = 4;
  } else if (maxOfDiceRoll == diceFiveCount) {
    mostDiceRoll = 5;
  } else if (maxOfDiceRoll == diceSixCount) {
    mostDiceRoll = 6;
  }

  countOfDiceRoll += 1;

  if (countOfDiceRoll >= 2) {
    if (randomDiceNumber != input) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose! <br/> The dice number that's rolled the most is ${mostDiceRoll}.`;
    }
    if (randomDiceNumber == input) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win! <br/> The dice number that's rolled the most is ${mostDiceRoll}.`;
    }
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.

var pointsTotal = 0;

var guessingMain = function (input) {
  var randomDiceNumber = rollDice();
  var defaultMessage = `You just rolled a ${randomDiceNumber}. You guessed a ${input}.`;
  var myOutputValue = "";
  input = parseInt(input);

  if (input == randomDiceNumber) {
    pointsTotal += 2;
    myOutputValue = `${defaultMessage} <br/> Your guess is exact. <br/> You win 2 points. <br/> Your points to date are ${pointsTotal} in total.`;
  } else if (input >= randomDiceNumber - 1 && input <= randomDiceNumber + 1) {
    pointsTotal += 1;
    myOutputValue = `${defaultMessage} <br/> Your guess is off by 1. <br/> You win 1 point. <br/> Your points to date are ${pointsTotal} in total.`;
  } else {
    myOutputValue = `${defaultMessage} <br/> Please try again.`;
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.

var pointsTotal = 0;

var advancedGuessingMain = function (input) {
  var randomDiceNumber = rollDice();
  var defaultMessage = `You just rolled a ${randomDiceNumber}. You guessed a ${input}.`;
  var myOutputValue = "";
  input = parseInt(input);

  var differenceOfGuess = Math.abs(input - randomDiceNumber);

  if (differenceOfGuess == 0) {
    pointsTotal += 5;
    myOutputValue = `${defaultMessage} <br/> Your guess is exact. <br/> You win 5 points. <br/> Your points to date are ${pointsTotal} in total.`;
  } else if (differenceOfGuess == 1) {
    pointsTotal += 4;
    myOutputValue = `${defaultMessage} <br/> Your guess is off by 1. <br/> You win 4 points. <br/> Your points to date are ${pointsTotal} in total.`;
  } else if (differenceOfGuess == 2) {
    pointsTotal += 3;
    myOutputValue = `${defaultMessage} <br/> Your guess is off by 2. <br/> You win 3 points. <br/> Your points to date are ${pointsTotal} in total.`;
  } else if (differenceOfGuess == 3) {
    pointsTotal += 2;
    myOutputValue = `${defaultMessage} <br/> Your guess is off by 3. <br/> You win 2 points. <br/> Your points to date are ${pointsTotal} in total.`;
  } else if (differenceOfGuess == 4) {
    pointsTotal += 1;
    myOutputValue = `${defaultMessage} <br/> Your guess is off by 4. <br/> You win 1 point. <br/> Your points to date are ${pointsTotal} in total.`;
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.

// we set the initial state of mode
var mode = "green";

// depending on the input, we will toggle mode states between green/blue
var followAlongMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.

// we set the initial state of mode
var mode = "green";

// depending on the input, we will toggle mode states between green/blue
var redModeMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  } else if (input == "redmode") {
    mode = "red";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }
  if (mode == "red") {
    myOutputValue =
      "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela";
  }

  return myOutputValue;
};

// ========================================================================================================================================
