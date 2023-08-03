const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let list = document.querySelector('#ingredients');

const createList = arr => {
  arr.forEach(element => {
    let newElem = document.createElement('li').textContent = element + ' ';
    list.append(newElem);
  });
}


createList(ingredients);