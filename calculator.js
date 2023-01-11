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
    b: 0
};    

let step = 1;
const buttons = document.querySelectorAll('.digit');
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
    const display = document.querySelector('.display');
    display.innerText = e.target.innerText; 
    if(step === 1) {
       arithmeticCalc.a = parseFloat(display.innerText);
       step = 2;
    } 
    })
});

const operations = document.querySelectorAll('.operand');
operations.forEach(newelement => {
    newelement.addEventListener('click', (e) => {
    const newdisplay = document.querySelector('.display');
    newdisplay.innerText += e.target.innerText;
    arithmeticCalc.Operand = newdisplay.innerText;
    step = 3;
    })
});

const secondNumber = document.querySelectorAll('.digit');
secondNumber.forEach(element => {
    element.addEventListener('click', (e) => {
    const display2 = document.querySelector('.display');
    display2.innerText = e.target.innerText;
    arithmeticCalc.b = parseFloat(display2.innerText);
    // perform the calculation using operate function
const sol = document.querySelector('.solution');
    sol.addEventListener('click', (e) => {
    const result = add(arithmeticCalc.a, arithmeticCalc.b);
    console.log(result);
    step = 1;
    });
    })

    }) 
