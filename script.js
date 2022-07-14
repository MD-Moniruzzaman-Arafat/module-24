// access by tag name

// const tagNames = document.getElementsByTagName('h1');
// // console.log(tagNames);
// for (const tagName of tagNames) {
//     tagName.style.backgroundColor = 'blue';
//     tagName.style.color = 'white';
//     tagName.style.padding = '10px';
//     tagName.style.border = '3px solid yellow';
// }


// access by id name

// const idName = document.getElementById('heading-1');
// // console.log(idName);
// idName.style.backgroundColor = 'red';
// idName.style.color = 'white';
// idName.style.padding = '10px';
// idName.innerText = 'hello world';



// access by query selector / query selector all

// const items = document.querySelector('.item-1');
// console.log(items)

// const items2 = document.querySelectorAll('.item-1');
// console.log(items2)

// const uniq = document.getElementById('uniq');
// // console.log(uniq)
// console.log(uniq.parentNode)
// console.log(uniq.childNodes)
// console.log(uniq.children)

const newItem = document.createElement('div');
newItem.classList.add('item-1')
newItem.innerHTML = `
<h1>heading-5</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, dignissimos delectus maxime
    quis, odit hic cum magnam velit exercitationem aliquid iure quasi dolore quisquam deleniti iste fuga
    itaque architecto asperiores!</p>
`
const containar = document.getElementById('container');
containar.appendChild(newItem);



// access by class name

const className = document.getElementsByClassName('item-1');
console.log(className)
for (const item of className) {
    // console.log(item);
    item.style.backgroundColor = 'blue';
    item.style.padding = '10px';
    item.style.margin = '10px';
    item.style.borderRadius = '5px'
    item.style.color = 'white';
}