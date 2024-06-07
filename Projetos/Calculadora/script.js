const display = document.getElementById('display');
const numbersBtn = document.querySelectorAll('.number');
const clear = document.querySelector('.limpar');
const sinal = document.querySelector('.sinal');
const percent = document.querySelector('.porcentagem');

const operations = document.querySelectorAll('.lateral');
let displayContent = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperand = null;

function uptadeDisplay(){
    display.innerText = displayContent;

}

    function clearDisplay(){
    displayContent = '0';
    let firstOperand = null;
    let secondOperand = null;
    let currentOperand = null;
    uptadeDisplay();
}

numbersBtn.forEach(button => {
    button.addEventListener('click', function addToDisplay(){
        const buttonText = button.innerText;
        if(displayContent === '0'){
            displayContent = buttonText;
        }else{
            displayContent += buttonText;
        }
        uptadeDisplay();
    })
});





clear.addEventListener('click', clearDisplay);


