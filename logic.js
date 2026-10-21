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
    if (b === 0) {
        return "Casi puedes";
    }
    else {
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
const backspaceButton = document.querySelector(".backspace");
const decimalButton = document.querySelector(".decimal");
const allButtons = Array.from(document.querySelectorAll(".btn"));

let val1 = "";
let val2 = "";
let operator = "";
let hasResult = false;

function updateDisplay() {
    resultContainer.textContent = val1 + operator + val2;
}

function clear() {
    val1 = "";
    val2 = "";
    operator = "";
    hasResult = false;
}

function calculate() {
    const result = operate(operator, Number(val1), Number(val2));
    if (typeof result !== "number") {
        clear();
        hasResult = true;
        resultContainer.textContent = result;
        return false;
    }
    val1 = String(Math.round(result * 100) / 100);
    val2 = "";
    return true;
}

numbers.forEach(element => {
    element.addEventListener("click", function () {
        if (hasResult) {
            clear();
        }
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
        if (!val1) {
            return;
        }
        if (operator && val2) {
            if (!calculate()) {
                return;
            }
        }
        operator = element.textContent;
        hasResult = false;
        updateDisplay();
    });
});

resultOperator.addEventListener("click", function () {
    if (!operator || !val1 || !val2) {
        return;
    }
    if (!calculate()) {
        return;
    }
    operator = "";
    hasResult = true;
    updateDisplay();
});

emptyButton.addEventListener("click", function () {
    clear();
    updateDisplay();
});

backspaceButton.addEventListener("click", function () {
    if (hasResult) {
        return;
    }
    if (val2) {
        val2 = val2.slice(0, -1);
    }
    else if (operator) {
        operator = "";
    }
    else {
        val1 = val1.slice(0, -1);
    }
    updateDisplay();
});

decimalButton.addEventListener("click", function () {
    if (hasResult) {
        clear();
    }
    if (!operator) {
        if (val1.includes(".")) {
            return;
        }
        val1 = (val1 || "0") + ".";
    }
    else {
        if (val2.includes(".")) {
            return;
        }
        val2 = (val2 || "0") + ".";
    }
    updateDisplay();
});

document.addEventListener("keydown", function (event) {
    let button;
    if (event.key === "Enter" || event.key === "=") {
        button = resultOperator;
    }
    else if (event.key === "Backspace") {
        button = backspaceButton;
    }
    else if (event.key === "Escape") {
        button = emptyButton;
    }
    else {
        button = allButtons.find(b => b.textContent === event.key);
    }
    if (!button) {
        return;
    }
    event.preventDefault();
    button.click();
});