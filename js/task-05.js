let input = document.querySelector('#name-input');

let output = document.querySelector('#name-output')

input.addEventListener('input', (e) => {
    if (e.currentTarget.value.trim() == '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = e.currentTarget.value;
    }
})