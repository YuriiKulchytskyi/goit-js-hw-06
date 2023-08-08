const input = document.querySelector('#validation-input');

let atr = input.dataset.length;

input.addEventListener('blur', () => {
    if (input.value.trim().length !== Number(atr)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        console.log(input.value.length);
    } else if (input.value.trim().length == Number(atr)){
        input.classList.remove('invalid')
        input.classList.add('valid');
        console.log(input.value.length);
    }
});