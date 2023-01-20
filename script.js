
const textDisplay = document.querySelector(".textDisplay");
const input = document.querySelectorAll(".input");
const del = document.getElementById("del");
const process = document.getElementById("process");
let displayValue;
let equation;



function displayText() {
    textDisplay.textContent += this.textContent+"";

};

function clearDisplay() {
    textDisplay.textContent = "";

};
function processDisplay() {
    equation = textDisplay.textContent;
    //turn them into the values we want now
    let equationArr;
    equationArr = equation.split(/(\W)/);
    let num1 = parseInt(equationArr[0]);
    let num2 = parseInt(equationArr[2]);
    let operator = equationArr[1];
    textDisplay.textContent = operate(num1, num2, operator);
};

//loop adding it to all elelemetns
input.forEach(element => {
    element.addEventListener("click", displayText);
});

del.addEventListener("click", clearDisplay);
process.addEventListener("click", processDisplay);

//math functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {

    return num1 - num2;
}
function divide(num1, num2) {

    return num1 / num2;
}
function multiply(num1, num2) {

    return num1 * num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            operator = "add";
            break;
          case "-":
            operator = "subtract";
            break;
          case "*":
            operator = "multiply";
            break;
          case "/":
            operator = "divide";
            break;
    }

//how do I get the function to be the correct math function I want 
    let answer = window[operator](num1, num2);
    return Math.round(answer * 100) / 100;
}
// console.log(operate(5, 21, subtract));


