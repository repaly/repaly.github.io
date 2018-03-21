var number1 = randomize(6, 9);
var result = randomize(11, 14);
var number2 = result - number1;
var cmPercent = 2.75; /* один сантиметр равен 2.75 процента */
var counter = 0;


$(".equation-field").html("<span id='first-number'>" + number1 + "</span> + <span id='second-number'>" + number2 + "</span> = <span id='result-number'>?</span>");
$(".arrow-container").width(number1 * cmPercent + "%");

addEventHandler( ".input-number", number1, createSecondArrow ); // добавляю обработчики для первого инпута


function addEventHandler(inputElement, trueAnswer, callBack) {

  var $inputField = $(inputElement);
  var $firstNumber = $("#first-number");
  var $secondNumber = $("#second-number");
  var $linkedNumber;

  if ( trueAnswer === number1 ) { // бажок, если две цифры одинаковы, то второй инпут будет подсвечивать первую цифры в выражении
    $linkedNumber = $firstNumber;
  } else if ( trueAnswer === number2  ) {
    $linkedNumber = $secondNumber;
  }

  $inputField.click(function () {
    if ($inputField.attr("contenteditable") == "true") {
      $inputField.css("text-shadow", "0 0 0 black");
      $inputField.empty();
    }
  });

  $inputField.keyup(function (event) {
    var keyValue = event.key;

    if ( !isNaN(parseInt(keyValue)) ) {

      if ( $inputField.hasClass("final-input") ) {
        counter += 1;
        if (counter == 2) {
          if ( $inputField.text() == trueAnswer) {
            $inputField.removeAttr("contenteditable");
            $inputField.css("text-shadow", "0 0 0 green");
          } else {
            $inputField.removeAttr("contenteditable");
            $inputField.css("text-shadow", "0 0 0 #ff7c7c");
            $inputField.attr("contenteditable", "true");
          }
          counter = 0;

        }
      } else if (keyValue == trueAnswer) {
        callBack();
        $linkedNumber.css("background-color", "");
        $inputField.removeAttr("contenteditable");
        $inputField.css("border", "0");
        $inputField.css("text-shadow", "0 0 0 black");
      } else {
        $linkedNumber.css("background-color", "orange"); //подсвечиваю цифру в выражении, если неправильно задан инпут
        $inputField.removeAttr("contenteditable");
        $inputField.css("text-shadow", "0 0 0 #ff7c7c");
        $inputField.attr("contenteditable", "true"); // удаляю и добавляю этот атрибут, чтобы поле не могло потенциально превратиться в огромный столб неверных чисел
      }
    } else {
      $inputField.empty(); // если пользователь пытается ввести что-то, кроме цифр, то это удаляется моментально
  }
  });
}

function createSecondArrow() {

   var $secondArrow = $(".arrow-container").clone();

   $secondArrow.children(".input-number").addClass("second-input");
   $secondArrow.children(".input-number").empty();
   $secondArrow.css({ "height" : "75px",
      "left" : "21.55%", // почему именно эта цифра? я без понятия, но вторая стрелка начинается с конца первой
     "top" : "25px",
   "width" : number2 * cmPercent + "%"
 })
   .insertAfter(".arrow-container");

   addEventHandler(".second-input", number2, createFinalInput );

}

function createFinalInput() {

  var $resultNumber = $("#result-number");
  var $inputField = $('<div>',{
contenteditable: true,
'class':'input-number'
});

  $inputField.addClass("final-input");
  $resultNumber.empty();
  $resultNumber.append($inputField);

  addEventHandler(".final-input", result);

}

function randomize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}
