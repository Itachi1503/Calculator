let display = document.getElementById("display");
let numBtns = document.querySelectorAll(".numBtn")
let currentInput = "";
let expression = [];
let firstOperand = null
let container = document.querySelector(".container");
let answer = document.getElementById("answer");
let copyBtn = document.querySelector(".copyBtn");
let clear = document.querySelector(".clear");
let calc = document.getElementById("calc");



numBtns.forEach((numBtn)=> {
   numBtn.addEventListener("click", ()=> {
    display.value += numBtn.innerText;
    currentInput += numBtn.innerText;
    clear.innerText = "C"
    
   })
   
})

document.addEventListener('keydown', function(event) {
    if ((event.key >= '0' && event.key <= '9' )) {
        display.value += event.key;
        currentInput += event.key;
       clear.innerText = "C" 
    }
});

document.addEventListener('keydown', function(event) {
    if ((event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*" || event.key === ".")) {
        display.value += event.key;
        currentInput += event.key;
       clear.innerText = "C" 
    }
});


document.addEventListener('keydown', function(event) {
    if ((event.key === "Backspace" )) {
        display.value = display.value.slice(0, display.value.length - 1);
        currentInput = display.value; 
    }
});

function clearLastCharaterDisplay() {
    display.value = display.value.slice(0, display.value.length - 1);
    currentInput = display.value;
}


document.addEventListener('keydown', function(event) {
    if ((event.key === "Delete" )) {
        currentInput = "";
    expression = [];
    display.value = "";
    clear.innerText = "AC"
    }
});

function clearDisplay() {
    currentInput = "";
    expression = [];
    display.value = "";
    clear.innerText = "AC"
}


function evaluateExpression(expressionstring) {
    'use strict';
     return eval(expressionstring);
}


document.addEventListener('keydown', function(event) {
    if ((event.key === "Enter")) {
        if(currentInput !== "") {
            expression.push(currentInput)
        }
    
        const fullExpression = expression.join(" ");
    
        display.value = evaluateExpression(fullExpression);
        currentInput = "";
        expression = []; 
    }
});

function calculate() {
    if(currentInput !== "") {
        expression.push(currentInput)
    }

    const fullExpression = expression.join(" ");

    display.value = evaluateExpression(fullExpression);
    currentInput = "";
    expression = [];
}









