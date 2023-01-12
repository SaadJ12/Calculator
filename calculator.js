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
    let currentNumber = 0;
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
            currentNumber = currentNumber * 10 + parseInt(e.target.innerText);
            display.innerText = currentNumber;
        });
    });
    
    const operations = document.querySelectorAll('.operand');
    operations.forEach(newelement => {
        newelement.addEventListener('click', (e) => {
            if (step === 1) {
                arithmeticCalc.a = currentNumber;
                currentNumber = 0;
                arithmeticCalc.Operand = e.target.innerText;
                step = 2;
            }
        });
    });
    
    const sol = document.querySelector('.solution');
    sol.addEventListener('click', (e) => {
        if (step === 2) {
            arithmeticCalc.b = currentNumber;
            currentNumber = 0;
            step = 3;
    
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
    

