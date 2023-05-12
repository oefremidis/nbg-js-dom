// html - step 2
// const p = document.querySelector('p');
// p.innerHTML = "My name";

// create any element - configure it - add it on DOM
const p = document.createElement('p');
p.innerHTML = 'New Element Node: <strong>Paragraph</strong>';
document.querySelector('div').prepend(p);

// create a TextNode and append 
const text = document.createTextNode('New Text Node');
document.body.append(text);
document.body.appendChild(text);


const ul = document.querySelector('#products');

const aProduct = document.createElement('li');
aProduct.textContent = 'Product 10 ...';
ul.appendChild(aProduct);

const anotherProduct = document.createElement('li');
anotherProduct.textContent = 'Product 20 ***';

// insert
ul.insertBefore(anotherProduct, ul.firstElementChild);

// replace
const modifiedProduct = document.createElement('li');
modifiedProduct.textContent = 'Product 100 ++++';
ul.replaceChild(modifiedProduct, ul.children[3]);

// remove
ul.removeChild(ul.lastElementChild);
ul.children[1].remove();


