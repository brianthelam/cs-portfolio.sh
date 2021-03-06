// JavaScript File

var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

//This event listener states that when the button is clicked, it will run the function below, called doMath.
button.addEventListener("click", doMath);

//
function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "^"){
        answer = Math.pow(parseInt(input1.value),parseInt(input2.value));
        display.innerHTML = answer;
    }
    if  (dropdown.value == "sqrt"){
        answer = parseInt(input1.value) * Math.sqrt(parseInt(input2.value));
        display.innerHTML = answer;
    }
    if  (dropdown.value == "cbrt"){
        answer = parseInt(input1.value) * Math.cbrt(parseInt(input2.value));
        display.innerHTML = answer;
    }
}