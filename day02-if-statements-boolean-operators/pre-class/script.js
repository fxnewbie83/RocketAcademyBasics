// Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.

var computeNumberOfOranges = function (numberOfGuests) {
  var orangesPerGuest = numberOfGuests * 2 * 4;
  return orangesPerGuest;
};

var orangeJuiceMain = function (numberOfGuests) {
  var orangesPerGuest = computeNumberOfOranges(numberOfGuests);
  return `${orangesPerGuest} Oranges are required to make enough Orange Juice for ${numberOfGuests} guests.`;
};

// 2nd set of functions to input both the number of guests as well as the number of glasses per guest
var computeNumberOfOranges2Inputs = function (numberOfGuests, numberOfGlass) {
  var orangesPerGuest = numberOfGuests * numberOfGlass * 4;
  return orangesPerGuest;
};

/* Main function to be updated based on above multiple inputs
var orangeJuice2Inputs = function (numberOfGuests) {
  var orangesPerGuest = computeNumberOfOranges2Inputs(numberOfGuests);
  return `${orangesPerGuest} Oranges are required to make enough Orange Juice for ${numberOfGuests} guests.`;
};
*/

// ========================================================================================================================================

// Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

var computePaintingPrice = function (costOfPaintPerLitre) {
  var numberOfRooms = 6;
  var numberOfCoats = 2;
  var totalArea = numberOfRooms * numberOfCoats * 3 * 3;
  var litreOfPaintRequired = totalArea / 300;
  var priceOfPainting = (litreOfPaintRequired * costOfPaintPerLitre).toFixed(2);
  return priceOfPainting;
};

var paintMain = function (costOfPaintPerLitre) {
  var priceOfPainting = computePaintingPrice(costOfPaintPerLitre);
  return `Paint per litre costs $${costOfPaintPerLitre}. <br/> There are 6 rooms in the home. <br/> There are 2 coats of paint required. <br/> The price of painting the home interior will be $${priceOfPainting}.`;
};

// 2nd set of functions to input the number of rooms, number of coats and cost of paint per litre
var computePaintingPrice3Inputs = function (
  costOfPaintPerLitre,
  numberOfRooms,
  numberOfCoats
) {
  var totalArea = numberOfRooms * numberOfCoats * 3 * 3;
  var litreOfPaintRequired = totalArea / 300;
  var priceOfPainting = (litreOfPaintRequired * costOfPaintPerLitre).toFixed(2);
  return priceOfPainting;
};

/* 
Main function to be updated based on above multiple inputs
var paintMain = function (costOfPaintPerLitre) {
  var priceOfPainting = computePaintingPrice3Inputs(costOfPaintPerLitre);
  return `Paint per litre costs $${costOfPaintPerLitre}. <br/> There are ${numberOfRooms} rooms in the home. <br/> There are ${numberOfCoats} coats of paint required. <br/> The price of painting the home interior will be $${priceOfPainting}.`;
};
*/

// ========================================================================================================================================

// Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  console.log(diceNumber);

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Personalise the output
  var myOutputValue = "You just rolled a " + randomDiceNumber + "!";

  // Return and print output.
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.

var secretPhraseMain = function (input) {
  // Set a default value for myOutputValue
  var myOutputValue = "The door shall not open.";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "You wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += " but you are nearly there.";
  } else {
    //myOutputValue += " nope, this is far from the right phrase.";
    myOutputValue = `${myOutputValue} This is far from the right phrase.`;
  }

  // return myOutputValue as output
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.

var diceGameMain = function (input) {
  // Generate a random dice number
  // Reuse "rollDice" function from line 64 to generate random dice number instead of recreating a new function for this exercise
  var randomDiceNumber = rollDice();

  // If input matches randomDiceNumber, to output game won.
  if (input > 6) {
    var myOutputValue = "You guess a number bigger than 6. Please guess again.";
  } else if (input == randomDiceNumber) {
    myOutputValue = `You guess a ${input} and the dice roll is also ${randomDiceNumber}. <br/>You win.`;
  } else {
    myOutputValue = `You guess a ${input} and the dice roll is ${randomDiceNumber}. <br/>You lose. Please try again.`;
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.

var twiceGuessMain = function (input) {
  // Reuse "rollDice" function from line 64 to generate random dice number instead of recreating a new function for this exercise
  var randomDiceNumber = rollDice();

  // If input matches 0 or a number bigger than 3.
  if (input == 0 || input > 3) {
    //myOutputValue = "Please guess a number between 1 and 3.";
    var myOutputValue = `You guess a ${input}. Please guess a number between 1 and 3.`;
  } else if (2 * input == randomDiceNumber) {
    myOutputValue = `You guess a ${input} and the dice roll is ${randomDiceNumber}. <br/>You win.`;
  } else {
    myOutputValue = `You guess a ${input} and the dice roll is ${randomDiceNumber}. <br/>You lose. Please try again.`;
  }

  return myOutputValue;
};

// ========================================================================================================================================

/*

// Module 3.3.2: Code Control / Debug Mode: Helper function

var rollDice = function (rigged = false) {
  //rig the dice in debug mode
  if (rigged) {
    //As long as input to rollDice function below contains a value , it will exectute the if statement.
    console.log("rigged dice, returning 6.");
    return 6;
  }

  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  console.log(randomDecimal);

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  console.log(randomInteger);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  console.log(diceNumber);

  return diceNumber;
};

// ========================================================================================================================================

// Module 3.3.2: Code Control / Debug Mode: Main function
var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice(true); //returns 6
  //var randomDiceNumber = rollDice((rigged = true)); //returns 6
  //var randomDiceNumber = rollDice(); // functions normally

  // Personalise the output
  return `You just rolled a ${randomDiceNumber}. Your guess was ${input}.`;
};

*/

/*

// ========================================================================================================================================
// Additional exercises from Modules 3.3, 3.3.1 and 3.3.2. Copy to Main Starter Code and remove corresponding comments tag for checking of respective exercises.

// Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  console.log(diceNumber);

  return diceNumber;
};

// ========================================================================================================================================

// Module 3.3.1 Logical Or Syntax Example

var winIfDiceWithin1 = function (input) {
  var randomDiceNumber = rollDice();
  var winIfDiceWithin1Output = `You guess a ${input} and the dice roll is ${randomDiceNumber}. <br/>You lose.`;

  if (
    randomDiceNumber == input ||
    randomDiceNumber + 1 == input ||
    randomDiceNumber - 1 == input
  ) {
    winIfDiceWithin1Output = `You guess a ${input} and the dice roll is ${randomDiceNumber}. <br/>You win as it is within 1 of dice roll.`;
  }

  return winIfDiceWithin1Output;
};

// Module 3.3.1 Base Exercise: Easier Dice Game
var winIfDiceWithin2 = function (input) {
  var randomDiceNumber = rollDice();
  var winIfDiceWithin2Output = `You guess a ${input} and the dice roll is ${randomDiceNumber}. <br/>You lose.`;

  var difference = input - randomDiceNumber;

  if (Math.abs(difference) <= 2) {
    winIfDiceWithin2Output = `You guess a ${input} and the dice roll is ${randomDiceNumber}. <br/>You win as it is within 2 of dice roll.`;
  }

  return winIfDiceWithin2Output;
};

// ========================================================================================================================================

// Module 3.3.1 Base Exercise: Even Easier Dice Game

var winIfEvenOrOdd = function (input) {
  var randomDiceNumber = rollDice();

  var winIfEvenOrOddOutput = `You guess a "${input}" and the dice roll ${randomDiceNumber} does not match. <br/>You lose.`;

  // If the input is not an "even" or "odd", input user to input only "even" or "odd".
  if (input != "even" && input != "odd") {
    winIfEvenOrOddOutput = `You guess a ${input}. Please input only "even" or "odd".`;
  }

  if (input == "even" && randomDiceNumber % 2 == 0) {
    winIfEvenOrOddOutput = `You guess a "${input}" and the dice roll is ${randomDiceNumber} (even). <br/>You win as both guess and dice roll matches.`;
  }

  if (input == "odd" && randomDiceNumber % 2 == 1) {
    winIfEvenOrOddOutput = `You guess a "${input}" and the dice roll is ${randomDiceNumber} (odd). <br/>You win as both guess and dice roll matches.`;
  }

  if (input == "palatable papaya") {
    winIfEvenOrOddOutput = `You guess "${input}". <br/>You win.`;
  }

  return winIfEvenOrOddOutput;
};

// ========================================================================================================================================

// Module 3.3.2 Dice Game with 2 Dice

var diceGame2Dice = function (input) {
  var randomDice1 = rollDice();
  var randomDice2 = rollDice();

  var diceGame2DiceOutput = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You lose.`;

  if (input == randomDice1 && input == randomDice2) {
    diceGame2DiceOutput = `You guess "${input}". <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You win as both guess and 2 dice rolls matches.`;
  }

  return diceGame2DiceOutput;
};

// ========================================================================================================================================

// Module 3.3.2 Dice Game with 2 Dice and Snake Eyes

var diceGame2DiceSnakeEyes = function (input) {
  var randomDice1 = rollDice();
  var randomDice2 = rollDice();

  var diceGame2DiceSnakeEyesOutput = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You lose.`;

  if (
    input == randomDice1 &&
    input == randomDice2 &&
    !(randomDice1 == 1 && randomDice2 == 1)
  ) {
    diceGame2DiceSnakeEyesOutput = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You win as both guess and 2 dice rolls matches.`;
  }

  return diceGame2DiceSnakeEyesOutput;
};

// ========================================================================================================================================

// Module 3.3.2 Exercises New Winning Conditions Scenario 1

var winIfDiceWithinAny2 = function (input) {
  var randomDice1 = rollDice();
  var randomDice2 = rollDice();
  var winIfDiceWithinAny2Output = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You lose.`;

  var difference1 = input - randomDice1;
  var difference2 = input - randomDice2;

  if (Math.abs(difference1) <= 1 || Math.abs(difference2) <= 1) {
    winIfDiceWithinAny2Output = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You win as it is within 1 for any of the 2 dice rolls.`;
  }

  return winIfDiceWithinAny2Output;
};

// ========================================================================================================================================

// Module 3.3.2 Exercises New Winning Conditions Scenario 2

var winIfDiceWithinAll2 = function (input) {
  var randomDice1 = rollDice();
  var randomDice2 = rollDice();
  var winIfDiceWithinAll2Output = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You lose.`;

  var difference1 = input - randomDice1;
  var difference2 = input - randomDice2;

  if (Math.abs(difference1) <= 1 && Math.abs(difference2) <= 1) {
    winIfDiceWithinAll2Output = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You win as it is within 1 for all 2 dice rolls.`;
  }

  return winIfDiceWithinAll2Output;
};

// ========================================================================================================================================

// Module 3.3.2 Exercises New Winning Conditions Scenario 3

var winIfDiceWithinAny2NoSnakeEyes = function (input) {
  var randomDice1 = rollDice();
  var randomDice2 = rollDice();
  var winIfDiceWithinAny2NoSnakeEyesOutput = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You lose.`;

  var difference1 = input - randomDice1;
  var difference2 = input - randomDice2;

  if (
    (Math.abs(difference1) <= 1 || Math.abs(difference2)) <= 1 &&
    !(randomDice1 == 1 && randomDice2 == 1)
  ) {
    winIfDiceWithinAny2NoSnakeEyesOutput = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You win as it is within 1 for any of the 2 dice rolls and there is no Snake Eyes.`;
  }

  return winIfDiceWithinAny2NoSnakeEyesOutput;
};

// ========================================================================================================================================

// Module 3.3.2 Exercises New Winning Conditions Scenario 4

var winIfDiceWithinAny2OrSnakeEyes = function (input) {
  var randomDice1 = rollDice();
  var randomDice2 = rollDice();
  var winIfDiceWithinAny2OrSnakeEyesOutput = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You lose.`;

  var difference1 = input - randomDice1;
  var difference2 = input - randomDice2;

  if (
    (Math.abs(difference1) <= 1 || Math.abs(difference2)) <= 1 ||
    (randomDice1 == 1 && randomDice2 == 1)
  ) {
    winIfDiceWithinAny2OrSnakeEyesOutput = `You guess ${input}. <br/>Dice roll 1 is ${randomDice1}. <br/>Dice roll 2 is ${randomDice2}. <br/>You win as it is within 1 for any of the 2 dice rolls or there is Snake Eyes rolled.`;
  }

  return winIfDiceWithinAny2OrSnakeEyesOutput;
};

// ========================================================================================================================================

var main = function (input) {
  // Module 3.3.1 Logical Or Syntax Example. Comment out when not in use.
  //var valueOfWinIfDiceWithin1 = winIfDiceWithin1(input);
  //return `Module 3.3.1 Logical Or Syntax Example. <br> This is the game where user win if guess is within 1 of dice roll. <br><br> ${valueOfWinIfDiceWithin1}`;

  // Module 3.3.1 Base Exercise: Easier Dice Game. Comment out when not in use.
  //var valueOfWinIfDiceWithin2 = winIfDiceWithin2(input);
  //return `Module 3.3.1 Base Exercise: Easier Dice Game. <br> This is the game where user win if guess is within 2 of dice roll. <br><br> ${valueOfWinIfDiceWithin2}`;

  // Module 3.3.1 Base Exercise: Even Easier Dice Game. Comment out when not in use.
  //var valueOfEvenOrOdd = winIfEvenOrOdd(input);
  //return `Module 3.3.1 Base Exercise: Even Easier Dice Game. <br> This is the game where user guess even or odd and wins if dice roll matches. <br><br> ${valueOfEvenOrOdd}`;

  // Module 3.3.2 Dice Game with 2 Dice. Comment out when not in use.
  //var valueOfGames2Dice = diceGame2Dice(input);
  //return `Module 3.3.2 Dice Game with 2 Dice. <br> This is the game where user will win only if guess matches both dice rolls. <br><br> ${valueOfGames2Dice}`;

  // Module 3.3.2 Dice Game with 2 Dice and Snake Eyes. Comment out when not in use.
  //var valueOfGames2DiceSnakeEyes = diceGame2DiceSnakeEyes(input);
  //return `Module 3.3.2 Dice Game with 2 Dice and Snake Eyes. <br> This is the game where user will win only if guess matches both dice rolls and both dice rolls are not 1. <br><br> ${valueOfGames2DiceSnakeEyes}`;

  // Module 3.3.2 Exercises New Winning Conditions Scenario 1. Comment out when not in use.
  //var valueOfDiceWithinAny2 = winIfDiceWithinAny2(input);
  //return `Module 3.3.2 Exercises New Winning Conditions Scenario 1. <br> This is the game where user will win only if guess is within 1 for any of 2 dice rolls. <br><br> ${valueOfDiceWithinAny2}`;

  // Module 3.3.2 Exercises New Winning Conditions Scenario 2. Comment out when not in use.
  //var valueOfDiceWithinAll2 = winIfDiceWithinAll2(input);
  //return `Module 3.3.2 Exercises New Winning Conditions Scenario 2. <br> This is the game where user will win only if guess is within all 2 dice rolls. <br><br> ${valueOfDiceWithinAll2}`;

  // Module 3.3.2 Exercises New Winning Conditions Scenario 3. Comment out when not in use.
  //var valueOfDiceWithinAny2NoSnakeEyes = winIfDiceWithinAny2NoSnakeEyes(input);
  //return `Module 3.3.2 Exercises New Winning Conditions Scenario 3. <br> This is the game where user will win only if guess is within 1 for any of 2 dice rolls and there is no Snake Eyes. <br><br> ${valueOfDiceWithinAny2NoSnakeEyes}`;

  // Module 3.3.2 Exercises New Winning Conditions Scenario 4. Comment out when not in use.
  var valueOfDiceWithinAny2OrSnakeEyes = winIfDiceWithinAny2OrSnakeEyes(input);
  return = `Module 3.3.2 Exercises New Winning Conditions Scenario 4. <br> This is the game where user will win only if guess is within 1 for any of 2 dice rolls or if there is Snake Eyes. <br><br> ${valueOfDiceWithinAny2OrSnakeEyes}`;

};

*/
