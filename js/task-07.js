const input = document.querySelector('#font-size-control')
const output = document.querySelector('#text');

output.style.fontSize = Number(input.max) - Number(input.min); 


input.addEventListener('input', changeSize);


function changeSize() {
    let inputValue = input.value + "px";
    output.style.fontSize = inputValue;
}

changeSize();
