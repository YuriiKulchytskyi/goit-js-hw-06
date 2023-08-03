let input = document.querySelector('#font-size-control')
let output = document.querySelector('#text');


input.addEventListener('input', () => {
    let inputValue = input.value + 'px';
    output.style.fontSize = inputValue
})