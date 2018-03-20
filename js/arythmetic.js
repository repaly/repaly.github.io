var number1 = randomize(6, 9);
var result = randomize(11, 14);
var number2 = result - number1;

var startPoint = 22.4;
var cmPercent = 2.75;

$(".equation-field").html("" + number1 + " + " + number2 + " = ?");
$(".arrow-container").width(number1 * cmPercent + "%");


var inputNumber = document.querySelector('.input-number');


function randomize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
