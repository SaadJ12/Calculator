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
    if(step === 1) {
        arithmeticCalc.a = parseFloat(display.innerText + e.target.innerText);
        display.innerText = arithmeticCalc.a;
        step = 2;
    } else if (step === 3){
        arithmeticCalc.b = parseFloat(display.innerText + e.target.innerText);
        display.innerText = arithmeticCalc.b;
        step = 4;
    } 
    })
});
                                       
const operations = document.querySelectorAll('.operand');
operations.forEach(newelement => {
    newelement.addEventListener('click', (e) => {
    const newdisplay = document.querySelector('.display');
    if(step === 2) {
    newdisplay.innerText += e.target.innerText;
    arithmeticCalc.Operand = e.target.innerText;
    step = 3;
    }
    })
});

const sol = document.querySelector('.solution');
sol.addEventListener('click', (e) => {
    if(step === 4) {
        let result;
        switch(arithmeticCalc.Operand) {
            case "+":
                result = add(arithmeticCalc.a, arithmeticCalc.b);
                break;
            case "-":
                result = subtract(arithmeticCalc.a, arithmeticCalc.b);
                break;
            case "*":
                result = multiply(arithmeticCalc.a, arithmeticCalc.b);
                break;
            case "/":
                result = divide(arithmeticCalc.a, arithmeticCalc.b);
                break;
        }
        console.log(result);
        const display = document.querySelector('.display');
        display.innerText = result;
        step = 1;
    }
});

