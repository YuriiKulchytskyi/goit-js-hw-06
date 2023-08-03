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
})

function createBoxes(num) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < num; i++) {
    let box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    boxes.append(box);
    width += 10;
    height += 10;
    
    console.log(num);
  }
}


