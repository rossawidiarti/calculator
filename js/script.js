const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("ul.menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll("ul li a.nav-link").forEach(n => n.addEventListener(
    "click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    }
))

document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'AC') {
                currentInput = '';
                display.value = '';
            }
            
            else if (value === 'DEL') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            }
            
            else if (value === '=') {
                if (currentInput) {
                    try {
                        currentInput = eval(currentInput).toString();
                        display.value = currentInput;
                        resultDisplayed = true;
                    }
                    
                    catch {
                        display.value = 'Error';
                        currentInput = '';
                    }
                }
            }
            
            else {
                if (resultDisplayed && !['+', '-', '*', '/', '%'].includes(value)) {
                    currentInput = '';
                    resultDisplayed = false;
                }
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});