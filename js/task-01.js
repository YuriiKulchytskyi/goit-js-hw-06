let list = document.querySelectorAll('.item');

function sumLi(arr) {
    let sum = 0
    arr.forEach(element => {
        if (element) {
            sum += 1;
        }

    });
    return sum;
}



function categoryName(arr) {
    console.log("Number of categories:", sumLi(arr));
    arr.forEach(element => {
        let child = element.firstElementChild;
        let secondChild = element.lastElementChild.children;
        
        console.log("Category:", child.textContent);
        console.log("Elements", secondChild.length);
    })
}


categoryName(list);
