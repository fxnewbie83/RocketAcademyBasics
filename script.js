/*
var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};
*/

// ========================================================================================================================================

var myButtonClicked = function () {
  var containerColor = document.querySelector(".container");
  containerColor.style.backgroundColor = "Green";
};

var button = document.querySelector("#submit-button");

document.querySelector(".container");
button.addEventListener("click", myButtonClicked);

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};
