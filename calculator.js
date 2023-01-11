// Following is function for add
const add = function(a, b) {
    return a+b;
}

// Following is a function for subtraction
const subtract = function(a, b) {
    return a-b;
}

// Following is a function for multiplication
const multiply = function(a, b) {
    return a*b;
}

// Following is a function of divide
const divide = function(a, b) {
    return a/b;
}

// Operate Function
const operate = function(a, operator, b) {
    switch(operator) {
    case "+":
        return add(a, b); 
    case "-":
        return subtract(a, b);
    case "*":
        return multiply(a, b);
    case "/":
        return divide(a, b);
    }   }

let arithmeticCalc = {
    a: 0,
    Operand: 0,
    secondNumber: 0
};    

const buttons = document.querySelectorAll('.digit');
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
    const display = document.querySelector('.display');
    display.innerText += e.target.innerText; 
        arithmeticCalc.a = display.innerText;
        console.log(arithmeticCalc.a);
})
})
const operations = document.querySelectorAll('.operand');
operations.forEach(newelement => {
    newelement.addEventListener('click', (e) => {
    const newdisplay = document.querySelector('.display');
    newdisplay.innerText += e.target.innerText;
    })
})