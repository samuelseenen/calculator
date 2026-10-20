function sum(a, b){
    return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

function operate(operador, n1, n2){
    if (operador === "+"){
        return sum(n1, n2);
    }
    else if (operador === "-"){
        return subtract(n1, n2);
    }
    else if (operador === "*"){
        return multiply(n1, n2);
    }
    else if (operador === "/"){
        return divide(n1, n2);
    }
    else {
        return alert("Algo has metido mal")
    }
}

let numbers = document.querySelectorAll(".number");
let val1 = "";
let val2 = "";
let operator = "";
let operators = document.querySelectorAll('.operator');
const resultContainer = document.querySelector('#result_container');

numbers.forEach(element => {
    element.addEventListener("click", function (){
        if (!operator){
            val1 = val1 + element.textContent;
            resultContainer.textContent = val1;
        }
        else {
            val2 = val2 + element.textContent;
            resultContainer.textContent = val1 + operator + val2;
        }
    })
});

operators.forEach(element => {
    element.addEventListener("click", function(){
        operator = element.textContent;
        resultContainer.textContent += operator; 
    })
})
