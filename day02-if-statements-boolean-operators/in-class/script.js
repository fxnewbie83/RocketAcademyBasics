// Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
var rollDice = function () {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
};

var lucky11Main = function (input) {
  var myOutputValue = "";

  // first check if input is a number
  if (Number.isNaN(Number(input)) == true) {
    myOutputValue = "Please enter a number.";
    return myOutputValue;
  }

  // then check if input is between 1 and 6
  if (input < 1 || input > 6) {
    myOutputValue = "Please enter a number from 1 - 6.";
    return myOutputValue;
  }

  var diceOne = rollDice();
  var diceTwo = rollDice();
  console.log(diceOne, diceTwo);

  if (input == diceOne || input == diceTwo || diceOne + diceTwo == 11) {
    myOutputValue = "Congratulations, you won.";
  } else {
    myOutputValue = "Please try Again.";
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.

var hawkerFoodCategorisationMain = function (input) {
  if (input == "chicken rice" || input == "nasi lemak") {
    var myOutputValue = `rice`;
  }
  if (input == "laksa" || input == "hokkien mee") {
    myOutputValue = `noodles`;
  }
  if (input == "roti prata" || input == "bak kut teh") {
    myOutputValue = `others`;
  }
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.

var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  return randomNumber;
};

var fourDSingleDigitMain = function (input) {
  // first check if input is a number
  if (Number.isNaN(Number(input)) == true) {
    myOutputValue = "Please enter a number.";
    return myOutputValue;
  }

  var randomNumber1 = generateRandomNumber();
  var randomNumber2 = generateRandomNumber();
  var randomNumber3 = generateRandomNumber();
  var randomNumber4 = generateRandomNumber();

  var defaultMessage = `You have guessed ${input}. <br/> Random Number 1 is ${randomNumber1}. <br/> Random Number 2 is ${randomNumber2}. <br/> Random Number 3 is ${randomNumber3}. <br/> Random Number 4 is ${randomNumber4}.`;
  if (input > 9 || input < 0) {
    var myOutputValue = `Please guess a single-digit number.`;
  } else if (
    input == randomNumber1 ||
    input == randomNumber2 ||
    input == randomNumber3 ||
    input == randomNumber4
  ) {
    myOutputValue = `${defaultMessage} <br/> You win.`;
  } else {
    myOutputValue = `${defaultMessage} <br/> You lose.`;
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.

// Global variables to assign numbers for program tagging
var assignNumToChicken = 1;
var assignNumToPrata = 2;
var assignNumToNasi = 3;
var assignNumToHokkien = 4;
var assignNumToBkt = 5;
var assignNumToLaksa = 6;
var selection = "";

// Helper function to generate random number for program assignment
var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

// Helper function to setup of random program selection of scissors, paper, or stone
var assignProgSelect = function () {
  var progRandomSelect = generateRandomNumber();

  if (progRandomSelect == assignNumToChicken) {
    selection = "chicken rice";
  }
  if (progRandomSelect == assignNumToPrata) {
    selection = "roti prata";
  }
  if (progRandomSelect == assignNumToNasi) {
    selection = "nasi lemak";
  }
  if (progRandomSelect == assignNumToHokkien) {
    selection = "hokkien mee";
  }
  if (progRandomSelect == assignNumToBkt) {
    selection = "bak kut teh";
  }
  if (progRandomSelect == assignNumToLaksa) {
    selection = "laksa";
  }

  return selection;
};

var hawkerFoodRandomnessMain = function (input) {
  var randomDishName = assignProgSelect();
  var myOutputValue = `You guess ${input}. <br/> Uncle's dish is ${randomDishName}.`;

  console.log(randomDishName);
  if (
    input != "chicken rice" &&
    input != "roti prata" &&
    input != "nasi lemak" &&
    input != "hokkien mee" &&
    input != "bak kut teh" &&
    input != "laksa"
  ) {
    myOutputValue = `The dish choices are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa". <br/> Please provide a valid input.`;
  } else if (input == randomDishName) {
    myOutputValue = `${myOutputValue} <br/> You guess correctly. You get to have a free meal!`;
  } else {
    myOutputValue = `${myOutputValue} <br/> You guess wrongly. Please try again.`;
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.

var generateRandomNumberWithin = function () {
  var randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};

var fourDWinningRangeMain = function (input) {
  var randomNumber1 = generateRandomNumberWithin();
  var randomNumber2 = generateRandomNumberWithin();
  var randomNumber3 = generateRandomNumberWithin();
  var randomNumber4 = generateRandomNumberWithin();
  var myOutputValue = "";

  var totalOfRandomNumber =
    randomNumber1 * 1000 +
    randomNumber2 * 100 +
    randomNumber3 * 10 +
    randomNumber4;

  var minRange = totalOfRandomNumber - 1000;
  var maxRange = totalOfRandomNumber + 1000;

  // convert input to a Number
  input = parseInt(input);
  console.log(minRange);
  console.log(maxRange);

  var defaultMessage = `You have guessed ${input}. <br/> Winning 4-digit number is ${randomNumber1}${randomNumber2}${randomNumber3}${randomNumber4}. <br/> To win, your guess must be between ${minRange} and ${maxRange}.`;

  // first check if input is a number
  if (Number.isNaN(Number(input)) == true) {
    myOutputValue = `You have provided an invalid input. Please guess a number.`;
    return myOutputValue;
  }

  if (input >= minRange && input <= maxRange) {
    myOutputValue = `${defaultMessage} <br/><br/> You win!`;
  }
  if (input < minRange || input > maxRange) {
    myOutputValue = `${defaultMessage} <br/><br/> You lose! Please try again.`;
  }

  return myOutputValue;
};

// ========================================================================================================================================

// Uncle has decided to serve an omakase option, and output a menu based on customer input.
// Customers can input either "rice" or "noodle", and Uncle will choose either 2 random rice or 2 random noodle dishes for them.
// Assume Uncle's rice dishes are "chicken rice", "nasi lemak", and "bak kut teh", and Uncle's noodle dishes are "hokkien mee", "laksa", and "beef hor fun".
// Roti prata is neither rice nor noodle, but Uncle can randomly choose to include it as one of the two dishes if he feels like it.
// Uncle charges more for omakase and uses premium descriptions for his dishes. Feel free to get creative.
// To create a new line in the output box you can use the string '<br>', which generates a new line in HTML output.
// Output at the end if sambal is included. Not all dishes come with sambal, for example roti prata and bak kut teh don't come with sambal.

// Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.

// Helper function for random selection of Rice Dish
var selectRiceDish = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  var riceDish = ["chicken rice", "nasi lemak", "bak kut teh"];
  var selectRiceDish = riceDish[randomNumber];
  return selectRiceDish;
};

// Helper function for random selection of Noodle Dish
var selectNoodleDish = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  var noodleDish = ["hokkien mee", "laksa", "beef hor fun"];
  var selectNoodleDish = noodleDish[randomNumber];
  return selectNoodleDish;
};

// Helper function for checking if sambal is included
var sambalAddition = function (dish1, dish2) {
  if (
    dish1 == "nasi lemak" ||
    dish1 == "hokkien mee" ||
    dish2 == "nasi lemak" ||
    dish2 == "hokkien mee"
  ) {
    var myOutputValue = `<br/><br/> Sambal will be included.`;
  } else {
    myOutputValue = `<br/><br/> Sambal will not be included.`;
  }
  return myOutputValue;
};

// Helper function for selecting 2 rice dishes
var selectRiceMenu = function () {
  var riceDish1 = selectRiceDish();
  var riceDish2 = selectRiceDish();
  if (riceDish2 == riceDish1) {
    riceDish2 = "roti prata";
  }
  var sambaCheck = sambalAddition(riceDish1, riceDish2);
  var myOutputValue = `<br/> First dish will be ${riceDish1}. <br/> Second dish will be ${riceDish2}.`;
  myOutputValue = myOutputValue + sambaCheck;
  return myOutputValue;
};

// Helper function for selecting 2 noodles dishes
var selectNoodleMenu = function () {
  var noodleDish1 = selectNoodleDish();
  var noodleDish2 = selectNoodleDish();
  if (noodleDish2 == noodleDish1) {
    noodleDish2 = "roti prata";
  }
  var sambaCheck = sambalAddition(noodleDish1, noodleDish2);
  var myOutputValue = `<br/> First dish will be ${noodleDish1}. <br/> Second dish will be ${noodleDish2}.`;
  myOutputValue = myOutputValue + sambaCheck;
  return myOutputValue;
};

// Main function
var hawkerFoodOmakaseMain = function (input) {
  var myOutputValue = `You selected ${input}. <br/><br/> Uncle's omakase menu is as follows:<br/> `;
  if (input == "rice") {
    var riceMenu = selectRiceMenu();
    myOutputValue += riceMenu;
  } else if (input == "noodle") {
    var noodlesMenu = selectNoodleMenu();
    myOutputValue += noodlesMenu;
  }
  return myOutputValue;
};

// ========================================================================================================================================
