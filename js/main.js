//---------------------
// document

// console.log(document);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.doctype);

// console.log(document.title);
// console.log(document.head);
// console.log(document.body);

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// ----------------------
// getElementByID
// console.log(document.getElementById('page-header'));

const pageTitle = document.getElementById('page-title');
// console.log(pageTitle);
// console.log(pageTitle.textContent);
// console.log(pageTitle.innerText);
// console.log(pageTitle.innerHTML);
// console.log(pageTitle.outerHTML);

pageTitle.innerHTML = 'A new <br> product list';
pageTitle.style.border = 'solid 2px red';

// ------------------------
// getElementByClassName

const products = document.getElementsByClassName('product-group-item');
// console.log(products);
// console.log(products[2]);
products[1].textContent = 'New Product...'
products[1].style.backgroundColor = 'lightgreen'; // css -> background-color: 'lightgreen'
products[2].style.border = 'dashed 2px red';
products[2].style.fontWeight = 'bold';

// Error - undefined property --> TypeError
// products.style.color = '#ff0000';

// ------------------------
// getElementByTagName

const li = document.getElementsByTagName('li');
// console.log(li);

const h2 = document.getElementsByTagName('h2');
// console.log(h2);

// ------------------------
// querySelector

const headerQS = document.querySelector('#page-header');
// console.log(headerQS);

const productQS = document.querySelector('.product-group-item');
console.log(productQS);

const productsQS = document.querySelectorAll('.product-group-item');
console.log(productsQS);

const liQS = document.querySelector('li');
console.log(liQS);

const lisQS = document.querySelectorAll('li');
console.log(lisQS);