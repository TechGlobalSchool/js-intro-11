// DOM - Day 2

/**
 * innerHTML vs innerText vs textContent
 */

const contentEl = document.getElementById('content');

contentEl.innerHTML = 'innerHTML text';
// contentEl.innerText = 'innerText text';
// contentEl.textContent = 'textContent text';

// contentEl.innerHTML = `<h2>innerHTML element</h2>`; - works
// contentEl.textContent = `<h2>textContent element</h2>`; - doesn't work
// contentEl.innerText = `<h2>innerText element</h2>`; - doesn't work


/**
 * Create an element
 * - createElement() 
 * - append()
 * - createTextNode()
 */

const customElement = document.createElement('h3');
const bodyEl = document.body;
// 1
customElement.innerHTML = `<h3>Hello World</h3>`;
bodyEl.innerHTML += customElement.innerHTML; // TODO 

const customElement2 = document.createElement('h3');
// 2
customElement2.innerHTML = 'Hello World 2';
bodyEl.append(customElement2);
// 3
const customElement3 = document.createElement('h3');
const textNode = document.createTextNode('Hello World 3');
customElement3.append(textNode);
bodyEl.append(customElement3);

console.log("customElement", customElement);


/**
 * Change DOM attributes
 */
const lionImage = document.querySelector('#lion');

// 1
console.log(lionImage.src);
lionImage.src = 'https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg'

// 2
console.log(lionImage.getAttribute('src'));
lionImage.setAttribute('src', 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTIwMDI5MDMyNS0wMDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=')


/**
 * className vs classList
 */
const listEl = document.querySelector('.lists');
console.log('ul > className', listEl.className)
console.log('ul > classList', listEl.classList);

const listEl2 = document.querySelector('.another');
console.log('ul2 > className', listEl2.className)
console.log('ul2 > classList', listEl2.classList);

// Add new class to element
listEl2.className += ' list4' 
listEl2.classList.add('list5'); 

// Remove 1 class from element
listEl2.className  // add another class
const classArray = listEl2.className.split(" ").filter(c => c !== 'list2');
listEl2.className = classArray.join(" ");
console.log(classArray);

listEl2.classList.remove('list3');

// toggle
const randomDiv = document.querySelector('#randomDiv');
const randomNumber = Math.floor(Math.random() * 10); // 0 - 10
console.log(randomNumber, 'randomNumber');

if(randomNumber < 5) {
  randomDiv.classList.toggle('color');
}



