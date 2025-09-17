const display = document.getElementById('display');
const buttons = document.querySelectorAll('button')

// Variables to save the calc state
let currnetOperand = '';
let previousOperand = '';
let operator = null;

// A function that gets a number and shows him on the display
function appendNumber(number) {
    if (number === '.' && currnetOperand.includes('.')) return; // Prevent double dot
    currnetOperand = currnetOperand.toString() + number.toString();
    updateDisplay();
}

// Operates function
function chooseOperator(op) {
    if (currnetOperand === '') return; // Prevent choosing operator without a number
    if (previousOperand !== '') {
        calculate();
    }
    operator = op;
    previousOperand = currnetOperand;
    currnetOperand= '';
}

// Calc function
function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currnetOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0.0) {
                result = prev / current;
            }
            else {console.log('The number that you want to divide by cant be zero!')}
            break;
        default:
            return;
    }

    currnetOperand = result;
    operator = null;
    previousOperand = '';
    updateDisplay();
}

// func to clear the display
function clear() {
    currnetOperand = '';
    previousOperand = '';
    operator = null;
    updateDisplay();
}

// func to update the display
function updateDisplay() {
    display.value = currnetOperand;
}

// listener to the buttons press
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            appendNumber(button.textContent);
        } else if (button.classList.contains('operator')) {
            chooseOperator(button.textContent);
        } else if (button.classList.contains('equal')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            clear();
        }
    });
});