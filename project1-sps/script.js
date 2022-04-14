// Set the initial game states
var currentMode = "waiting for user name";
//var currentGameMode = "";
var userName = "";
var countOfWin = 0;
var countOfProgramWin = 0;
var countOfDraw = 0;
var countOfGames = 0;
var countOfWinPercentage = 0;

// Helper function to generate random number for program assignment
var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  //  console.log(randomNumber);
  return randomNumber;
};

// Helper function to setup of random program selection of scissors, paper, or stone
// Assign numbers for program tagging, e.g. 1 to scissors, 2 to paper, 3 to stone
var assignProgSelect = function () {
  var progRandomSelect = generateRandomNumber();
  var selection = "";

  if (progRandomSelect == 1) {
    selection = "scissors";
  }
  if (progRandomSelect == 2) {
    selection = "paper";
  }
  if (progRandomSelect == 3) {
    selection = "stone";
  }

  console.log(selection);
  return selection;
};

// Helper function to setup sps game win/lose/draw condition
var spsGame = function (spsGameInput) {
  var progRandomSelect = assignProgSelect();
  // convert user input in string to lower case
  spsGameInput = spsGameInput.toLowerCase();
  var myOutputValue = `You have entered "${spsGameInput}". <br/> Program has generated "${progRandomSelect}".`;
  //var defaultMessage = `<br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;

  // Check for invalid inputs
  if (
    spsGameInput != "scissors" &&
    spsGameInput != "paper" &&
    spsGameInput != "stone"
  ) {
    myOutputValue = `You have entered "${spsGameInput}", an invalid choice. <br/> Please try again and enter only "scissors", "paper" or "stone".`;
  }

  // Check for user winning conditions
  // Reference and copy emoji code from https://emojiterra.com/rock/
  if (spsGameInput == "scissors" && progRandomSelect == "paper") {
    countOfWin += 1;
    countOfGames += 1;
    console.log(countOfGames);
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    //myOutputValue = `${myOutputValue} <br/> Scissors ✂️ beat paper 🗒. You win! ${defaultMessage}`;
    myOutputValue = `${myOutputValue} <br/> Scissors ✂️ beat paper 🗒. You win! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }
  if (spsGameInput == "paper" && progRandomSelect == "stone") {
    countOfWin += 1;
    countOfGames += 1;
    console.log(countOfGames);
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Paper 🗒 beat stone 🪨. You win! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }
  if (spsGameInput == "stone" && progRandomSelect == "scissors") {
    countOfWin += 1;
    countOfGames += 1;
    console.log(countOfGames);
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Stone 🪨 beat scissors ✂️. You win! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }

  // Check for user losing conditions
  if (progRandomSelect == "scissors" && spsGameInput == "paper") {
    countOfProgramWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Scissors ✂️ beat paper 🗒. You lose! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }
  if (progRandomSelect == "paper" && spsGameInput == "stone") {
    countOfProgramWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Paper 🗒 beat stone 🪨. You lose! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }
  if (progRandomSelect == "stone" && spsGameInput == "scissors") {
    countOfProgramWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Stone 🪨 beat scissors ✂️. You lose! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }

  // Check for draw condition
  if (spsGameInput == progRandomSelect) {
    countOfDraw += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> As both parties choose the same object, it's a draw. <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }

  return myOutputValue;
};

// Helper function to setup of random program selection of reversed scissors, reversed paper, or reversed stone
// Assign numbers for program tagging, e.g. 1 to reversed scissors, 2 to reversed paper, 3 to reversed stone
var assignReverseProgSelect = function () {
  var progRandomSelect = generateRandomNumber();
  var reverseSelection = "";

  if (progRandomSelect == 1) {
    reverseSelection = "reversed scissors";
  }
  if (progRandomSelect == 2) {
    reverseSelection = "reversed paper";
  }
  if (progRandomSelect == 3) {
    reverseSelection = "reversed stone";
  }

  console.log(reverseSelection);
  return reverseSelection;
};

// Helper function to setup sps reverse game win/lose/draw conditions
var spsReverseGame = function (spsReverseGameInput) {
  var progRandomSelect = assignReverseProgSelect();
  // convert user input in string to lower case
  spsReverseGameInput = spsReverseGameInput.toLowerCase();
  var myOutputValue = `You have entered "${spsReverseGameInput}". <br/> Program has generated "${progRandomSelect}".`;

  // Check for invalid inputs
  if (
    spsReverseGameInput != "reversed scissors" &&
    spsReverseGameInput != "reversed paper" &&
    spsReverseGameInput != "reversed stone"
  ) {
    myOutputValue = `You have entered "${spsReverseGameInput}", an invalid choice. <br/> Please try again and enter only "reversed scissors", "reversed paper" or "reversed stone".`;
  }

  // Check for user winning conditions
  // Reference and copy emoji code from https://emojiterra.com/rock/
  if (
    spsReverseGameInput == "reversed scissors" &&
    progRandomSelect == "reversed stone"
  ) {
    countOfWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Reversed scissors ✂️ beat reversed stone 🪨. You win! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }

  if (
    spsReverseGameInput == "reversed paper" &&
    progRandomSelect == "reversed scissors"
  ) {
    countOfWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Reversed paper 🗒 beat reversed scissors ✂️. You win! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }
  if (
    spsReverseGameInput == "reversed stone" &&
    progRandomSelect == "reversed paper"
  ) {
    countOfWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Reversed stone 🪨 beat reversed paper 🗒. You win! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }

  // Check for user losing conditions
  if (
    spsReverseGameInput == "reversed scissors" &&
    progRandomSelect == "reversed paper"
  ) {
    countOfProgramWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Reversed paper 🗒 beat reversed scissors ✂️. You lose! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }
  if (
    spsReverseGameInput == "reversed paper" &&
    progRandomSelect == "reversed stone"
  ) {
    countOfProgramWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Reversed stone 🪨 beat reversed paper 🗒. You lose! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }
  if (
    spsReverseGameInput == "reversed stone" &&
    progRandomSelect == "reversed scissors"
  ) {
    countOfProgramWin += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> Reversed scissors ✂️ beat reversed stone 🪨. You lose! <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }

  // Check for draw condition
  if (spsReverseGameInput == progRandomSelect) {
    countOfDraw += 1;
    countOfGames += 1;
    countOfWinPercentage = ((countOfWin / countOfGames) * 100).toFixed(2);
    myOutputValue = `${myOutputValue} <br/> As both parties choose the same object, it's a draw. <br/><br/> Number of rounds played: ${countOfGames}. <br/><br/> You win ${countOfWin} times. <br/> Computer win ${countOfProgramWin} times. <br/> There are ${countOfDraw} draws. <br/><br/> Your winning rate is ${countOfWinPercentage}%.`;
  }

  return myOutputValue;
};

/*
// Main fuction. Comment out function execution when not in use.
var main = function (input) {
  var myOutputValue = spsGame(input);
  //var myOutputValue = spsReverseGame(input);
  return myOutputValue;
};
*/

var main = function (input) {
  var myOutputValue = "";

  //console.log(currentMode);
  if (currentMode == "waiting for user name") {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    //currentMode = "gameSelection";

    myOutputValue = `Hi, ${userName}. Welcome to the "Scissors Paper Stone" game. <br/><br/> Please select one of the following 3 options to start playing. <br/><br/> Enter 1 to play the normal version of the game. <br/> Enter 2 to play the reversed version of the game. <br/> Enter 3 to play the "Muk-jji-ppa", the Korean version of the game.`;
    currentMode = "gameSelection";
  }
  // Allow user to select game version
  else if (currentMode == "gameSelection") {
    if (input == 1) {
      myOutputValue = `Hi, ${userName}. <br/> Welcome to the normal version of the game. <br/>Go ahead to guess "scissors", "paper" or "stone" to start playing.`;
      currentMode = "spsgame";
    } else if (input == 2) {
      myOutputValue = `Hi, ${userName}. <br/> Welcome to the reversed version of the game. <br/>Go ahead to guess "reversed scissors", "reversed paper" or "reversed stone" to start playing.`;
      currentMode = "spsreversegame";
    }
    //else if (input == 3) {
    //myOutputValue = `Hi, ${userName}. <br/> Welcome to "Muk-jji-ppa", the Korean version of the game.`;
    //}
    else {
      myOutputValue = `Hi, ${userName}. <br/> Your selection is not valid. Please select one of the following 3 options to start playing. <br/><br/> Enter 1 to play the normal version of the game. <br/> Enter 2 to play the reversed version of the game. <br/> Enter 3 to play the "Muk-jji-ppa", the Korean version of the game.`;
    }
    console.log(currentMode);
  }

  // Enter game after selecting option
  else if (currentMode == "spsgame") {
    var myOutputValue = spsGame(input);
  } else if (currentMode == "spsreversegame") {
    var myOutputValue = spsReverseGame(input);
  }

  return myOutputValue;
};
