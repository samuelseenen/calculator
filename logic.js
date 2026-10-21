function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0){
        return "Casi puedes";
    }
    else{
        return a / b;
    }
}

function operate(op, n1, n2) {
    if (op === "+") {
        return sum(n1, n2);
    }
    else if (op === "-") {
        return subtract(n1, n2);
    }
    else if (op === "*") {
        return multiply(n1, n2);
    }
    else if (op === "/") {
        return divide(n1, n2);
    }
    else {
        return "Error";
    }
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const resultOperator = document.querySelector(".result");
const emptyButton = document.querySelector(".del");
const resultContainer = document.querySelector("#result_container");


let val1 = "";
let val2 = "";
let operator = "";

function updateDisplay() {
    resultContainer.textContent = val1 + operator + val2;
}

numbers.forEach(element => {
    element.addEventListener("click", function () {
        if (!operator) {
            val1 = val1 + element.textContent;
        }
        else {
            val2 = val2 + element.textContent;
        }
        updateDisplay();
    });
});

operators.forEach(element => {
    element.addEventListener("click", function () {
        operator = element.textContent;
        updateDisplay();
    });
});

resultOperator.addEventListener("click", function () {
    if (!operator || !val1 || !val2){
        return
    }
    let result = operate(operator, Number(val1), Number(val2));
    if (typeof result === "number") {
        result = Math.round(result * 100) / 100;
    }
    resultContainer.textContent = result;
});

emptyButton.addEventListener("click", function(){
    val1 = "";
    val2 = "";
    operator = "";
    updateDisplay();
});