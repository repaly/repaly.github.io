var number1 = randomize(6, 9);
var result = randomize(11, 14);
var number2 = result - number1;

var equationField = document.querySelector('.equation-field');
equationField.innerHTML = "" + number1 + " + " + number2 + " = ?";

function randomize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
