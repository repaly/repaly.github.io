var number1 = randomize(6, 9);
var result = randomize(11, 14);
var number2 = result - number1;

var startPoint = 22.4;
var cmPercent = 2.75;

$(".equation-field").html("" + number1 + " + " + number2 + " = ?");
$(".arrow-container").width(number1 * cmPercent + "%");

var $inputField = $(".input-number"); // поле ввода ответов

$inputField.click(function () {
  if ($inputField.attr("contenteditable") == "true") {
    $inputField.empty();
  }
});

$inputField.keyup(function (event) {
  var keyValue = event.key;

  if ( !isNaN(parseInt(keyValue)) ) {
    if (keyValue == number1) {
      $inputField.removeAttr("contenteditable");
      $inputField.css("text-shadow", "0 0 0 #7ec926");
    } else {
      $inputField.removeAttr("contenteditable");
      $inputField.css("text-shadow", "0 0 0 #ff7c7c");
      $inputField.attr("contenteditable", "true"); // удаляю и добавляю этот атрибут, чтобы поле не могло потенциально превратиться в огромный столб неверных чисел
    }
  } else {
    $inputField.empty(); // если пользователь пытается ввести что-то, кроме цифр, то это удаляется моментально
}
});

function randomize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}
