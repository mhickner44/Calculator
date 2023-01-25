
const textDisplay = document.querySelector(".textDisplay");
const input = document.querySelectorAll(".input");
const del = document.getElementById("del");
const process = document.getElementById("process");
const operators = document.querySelectorAll(".input.operator");
let displayValue;
let equation;
let count = 0;

function operatorCounting() {
    count++;
    if (count == 2) {
        processDisplay();
        count = 1;
    }
}


const regex = /([-+*/])/;
function displayText() {
    if (textDisplay.textContent == "" && regex.test(this.textContent)) {
        count = 0;
    } else {
        textDisplay.textContent += this.textContent + "";
    }
};

function clearDisplay() {
    textDisplay.textContent = "";
    count = 0;
};

function processDisplay() {
   
    let num1 = 0;
    let num2 = 0;
    equation = textDisplay.textContent;
    const str = "UNDEFINED";
    if (equation.includes(str)) {
        //reset the text display 
        return clearDisplay();
    } else if (count >= 1) {
        //turn them into the values we want now
        let equationArr;
        equationArr = equation.split(/([-+*/])/);
        num1 = parseFloat(equationArr[0]);
        num2 = parseFloat(equationArr[2]);
        if (isNaN(num2)) {
            num2 = num1;
        }
        let operator = equationArr[1];
        textDisplay.textContent = operate(num1, num2, operator);
    }
};
//looping all the operators to listen for presses
operators.forEach(element => {
    element.addEventListener("click", operatorCounting);
});

//equality operator count reset 
process.addEventListener("click", processDisplay);
process.addEventListener("click", function () { count = 0; });
//loop adding it to all elelemetns
input.forEach(element => {
    element.addEventListener("click", displayText);
});

del.addEventListener("click", clearDisplay);


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
    let answer = 0;
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
    answer = window[operator](num1, num2);
    if (answer == "Infinity") {
        answer = "UNDEFINED";
    } else {
        answer = Math.round(answer * 100) / 100
    }
    return answer;
}


