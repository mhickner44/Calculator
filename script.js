
const textDisplay=document.querySelector("textDisplay");
const input=document.querySelectorAll("input");








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
    let answer = operator(num1, num2);
    return Math.round(answer * 100) / 100;
}
console.log(operate(5, 21,subtract));
