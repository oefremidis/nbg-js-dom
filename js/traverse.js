const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const ul = document.querySelector('ul');

// console.log(p.parentNode)
// console.log(p.parentNode.parentNode);

const html = document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement);

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
// ul.firstChild.style.color = 'yellow'; // error - text no style
ul.firstElementChild.style.backgroundColor = 'yellow';

for (let element of ul.children){
  element.style.backgroundColor = 'lightgreen';
}

for (let element in ul.children){
  console.log(element)
}

document.body.children[0].lastElementChild.style.backgroundColor = 'fuchsia';

const product1 = ul.children[1];
product1.nextElementSibling.style.backgroundColor = 'coral';
product1.previousElementSibling.style.backgroundColor = 'red';