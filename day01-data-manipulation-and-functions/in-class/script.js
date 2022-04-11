// Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.

var fahrenheitToCelsiusMain = function (input) {
  var formulaFtoC = (((input - 32) * 5) / 9).toFixed(2);
  return `Temperature has been converted from ${input} Fahrenheits to ${formulaFtoC} Celsius.`;
};

// ========================================================================================================================================

// Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.

var computeFuelCost = function (distanceInKm) {
  var kmToMiles = distanceInKm * 0.621371;
  var numberOfLitre = kmToMiles / 9;
  var costOfFuel = (numberOfLitre * 2.2).toFixed(2);
  console.log(
    `The total fuel cost of a planned road trip with distance of ${distanceInKm}km will be $${costOfFuel}.`
  );
  return costOfFuel;
};

var roadTripCostBaseMain = function (distanceInKm) {
  var costOfFuel = computeFuelCost(distanceInKm);
  return `The total fuel cost of a planned road trip with distance of ${distanceInKm}km will be $${costOfFuel}.`;
};

// ========================================================================================================================================

// Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.

var computeFuelCostSavings = function (distanceInKm) {
  var kmToMiles = distanceInKm * 0.621371;
  var numberOfLitre = kmToMiles / 9;
  var costOfCarFuel = numberOfLitre * 2.2;
  var costOfTrainFuel = numberOfLitre * 2.0;
  var costOfFuelSavings = (costOfCarFuel - costOfTrainFuel).toFixed(2);
  return costOfFuelSavings;
};

var roadTripCostComfortableMain = function (distanceInKm) {
  var costOfFuelSavings = computeFuelCostSavings(distanceInKm);
  return `The total fuel savings of a road trip with distance of ${distanceInKm}km when travelling via train against a car will be $${costOfFuelSavings}.`;
};

// ========================================================================================================================================

// Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.

var iceMachineMain = function (numberOfGuests) {
  var amountOfIceInPounds = numberOfGuests * 2 * 4 * 1.5 * 0.00220462;
  var iceMachineDuration = (amountOfIceInPounds / 5).toFixed(2);
  return `The ice machine will need to run for ${iceMachineDuration} hours for ${numberOfGuests} guests.`;
};

// ========================================================================================================================================

// Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.

var beerOrderMain = function (averageNumberOfCustomers) {
  var numberOfKegsPerQuarter = (
    ((averageNumberOfCustomers * 2) / 124) *
    91
  ).toFixed(2);
  return `A bar requires ${numberOfKegsPerQuarter} half-barrel-size kegs per quarter with an average number of ${averageNumberOfCustomers} customers per day. `;
};

// ========================================================================================================================================

// Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.

var cellularDataMain = function (numberOfGB) {
  //Math.ceil is a built-in function to always rounds a number up to the next largest integer.
  var numberOfPlan = Math.ceil(numberOfGB / 50);
  var costPerGB = ((19.99 * numberOfPlan) / numberOfGB).toFixed(2);
  return `The cost of a $19.99 50GB post-paid data plan will be $${costPerGB} per ${numberOfGB} GB of data used per month.`;
};

// ========================================================================================================================================
