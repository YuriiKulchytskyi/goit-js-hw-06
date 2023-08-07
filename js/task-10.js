function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


let btnCreate = document.querySelector('[data-create]');
let btnDest = document.querySelector('[data-destroy]');
let boxes = document.querySelector('#boxes');
let input = document.querySelector('input');


btnCreate.addEventListener('click', () => {
  let num = Number(input.value);
  createBoxes(num);
});


btnDest.addEventListener('click', () => {
  boxes.innerHTML = '';
  input.value = '';
})

let start = 1;
let end = 100;
let step = 1;

function createBoxes(num) {
  boxes.innerHTML = '';
  
  let size = 30;
  if (num >= start && num <= end) {
    for (let i = 0; i < num; i++) {
      let box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = size + 'px';
      box.style.height = size + 'px';
      boxes.append(box);
      size += 10;
      
    } 
  }
  else if (num < start || num > end || input.value == '') {
    alert(`Choose a number between ${start} and ${end}`)
  }
  input.value = '';
}