let value = document.querySelector('#value');

let buttons = document.querySelectorAll('button');

let counterValue = 0;

function valueCounter() {
    value.textContent = counterValue;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        counterValue += Number(button.textContent);
        valueCounter();
    })
})