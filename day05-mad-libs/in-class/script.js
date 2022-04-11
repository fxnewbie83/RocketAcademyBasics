// Global variables
var userAdjective = [];
var currentMode = "";
var myOutputValue = "";

// ========================================================================================================================================

// Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.

// Helper function to create a random number from zero to array length minus one.
// This number is in the range from the first index (zero) to the last index (array length minus one)
var getRandomIndex = function (arrayLength) {
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  if (input == "create") {
    // get a random index number from the array
    var randomIndexNumber = getRandomIndex(userAdjective.length);

    // use the random index number to get a random word value from the array
    var randomAdj = userAdjective[randomIndexNumber];
    console.log(`Random adjective: ${randomAdj}`);

    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " wife.";

    return madLib;
  }

  // Add input into userAdjective array
  userAdjective.push(input);
  console.log(`List of adjectives: ${userAdjective}`);
  myOutputValue = `Current list of adjectives: ${userAdjective}. <br/> Input the word "create" to start MadLib.`;

  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.

var madLibsInputCreateMain = function (input) {
  // Inform user that this is input mode
  if (input == "input") {
    currentMode = "input";

    return `You have switched to input mode. <br/><br/> Enter an adjective or type "create" to switch to create mode.`;
  }

  // Inform user that this is create mode
  if (input == "create") {
    currentMode = "create";
    return `You have switched to create mode. <br/><br/> Hit Submit to start madlib.`;
  }

  // Execute logic of create mode to start madLib
  if (currentMode == "create") {
    // get a random index number from the array
    var randomIndexNumber = getRandomIndex(userAdjective.length);

    // use the random index number to get a random word value from the array
    var randomAdj = userAdjective[randomIndexNumber];
    console.log(`Random adjective: ${randomAdj}`);

    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife. <br/><br/> Hit Submit again to madlib or type "input" to switch to input mode.`;

    return madLib;
  }

  // Add input into userAdjective array. By default, it will be input mode.
  userAdjective.push(input);
  console.log(userAdjective);

  myOutputValue = `List of adjectives: ${userAdjective}`;
  return myOutputValue;
};

// ========================================================================================================================================

// Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.

// When the app loads, the user can input 1 or more adjectives to store in the app with each Submit.
// To input more than 1 word for each Submit, the user would give each word separated by a space, e.g., "green nice silly".
// We can use JavaScript's string split method to split the input string into an array of substrings.

var madLibsMultipleWordsMain = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

// ========================================================================================================================================

/*

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};
*/
