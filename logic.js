let n1;
let n2;
let operador;

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
