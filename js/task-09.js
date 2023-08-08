function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


let btn = document.querySelector('.change-color');
let color = document.querySelector('.color');
let body = document.querySelector('body');


function changeColor() { 
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  color.textContent = changeColor;
}
btn.addEventListener('click', changeColor)