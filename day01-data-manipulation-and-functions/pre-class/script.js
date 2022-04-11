var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.

var greetingMain = function (input) {
  var myOutputValue = `Hello, ${input}! <br/> Wow, ${input} is a great name. <br/> Reminds me of this movie star ...`;
  return myOutputValue;
};

// ========================================================================================================================================

// Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.

var metricMain = function (distanceInKm) {
  var distanceInMiles = (distanceInKm * 0.62).toFixed(2);
  return `Hi! ${distanceInKm} km is equal to ${distanceInMiles} miles.`;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = (distanceInKm * 0.62).toFixed(2);
  //return (distanceInMiles = `Hi! ${distanceInKm} km is equal to ${distanceInMiles} miles.`);
  return `Hi! ${distanceInKm} km is equal to ${distanceInMiles} miles.`;
};

// ========================================================================================================================================

var functionsExampleMain = function (input) {
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

/*
// Testing of Train Speed exercise with 2 functions
var computeTrain2Speed = function (delayInMins) {
  var distance = 200 * 2;
  var delayInHour = 2 - delayInMins / 60;
  var requiredSpeed = distance / delayInHour;
  return requiredSpeed.toFixed(2);
};

var trainSpeedMain = function (delayInMins) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var train2Speed = computeTrain2Speed(delayInMins);
  return `With a delay of ${delayInMins} mins, the required speed of Train 2 will be ${train2Speed} kph.`;
};

*/

// ========================================================================================================================================

// Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.

var trainSpeedMain = function (input) {
  var distance = 200 * 2;
  var delayInHour = 2 - input / 60;
  var requiredSpeed = (distance / delayInHour).toFixed(2);
  return `With a delay of ${input} mins, the required speed of Train 2 will be ${requiredSpeed} kph.`;
};

// ========================================================================================================================================

// Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.

var computeClockAngle = function (numberOfMinutes) {
  var minuteAngle = (360 / 60) * (numberOfMinutes % 60);
  var perHourAngle = 360 / 12;
  var angle = minuteAngle - perHourAngle;
  return angle;
};

var clockMain = function (numberOfMinutes) {
  var clockAngle = computeClockAngle(numberOfMinutes);
  return `With ${numberOfMinutes} minutes entered past 1pm, the angle moving in a clockwise direction between the hour and minute hand is ${clockAngle} degrees.`;
};

// ========================================================================================================================================
