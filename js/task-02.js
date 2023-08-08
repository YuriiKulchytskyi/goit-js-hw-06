const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector('#ingredients');

const createList = arr => {
  const items = arr.map(elem => {
    let item = document.createElement('li');
    item.textContent = elem;
    item.classList.add('list');
    // list.append('item');

    return item;
  })

  list.append(...items);

}


createList(ingredients);


