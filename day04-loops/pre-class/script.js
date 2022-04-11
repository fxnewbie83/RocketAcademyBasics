// Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.

var followAlongMain = function (input) {
  var myOutputValue = "";

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "x";
      columnCounter = columnCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.

var simpleLoopMain = function (input) {
  var myOutputValue = "";
  var counter = 0;
  // Continue the loop while counter is less than the input value
  while (counter <= 6) {
    // Add 1 "yes" to the output for every loop iteration.
    myOutputValue = myOutputValue + "hello <br/>";
    counter = counter + 1;
  }
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.

var loopWithinLoopMain = function (input) {
  var myOutputValue = "";

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < 3) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < 3) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "hello";
      columnCounter = columnCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

// ========================================================================================================================================

/*
// Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.

var infiniteLoopMain = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};

*/
