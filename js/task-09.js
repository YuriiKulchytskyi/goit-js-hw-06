function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


let btn = document.querySelector('.change-color');
let color = document.querySelector('.color')



function changeColor() {  
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  color.textContent = document.querySelector('body').style.backgroundColor;
}
btn.addEventListener('click', changeColor)