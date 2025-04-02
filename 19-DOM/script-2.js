/**
 * ACCESSING DOM ELEMENTS
 */

// Note: Below methods are functions of document object
console.log(document);

/**
 * getElementById()
 */
const headingEl = document.getElementById('heading');
console.log('headingEl', headingEl);

/**
 * getElementsByClassName() 
 * Returns - HTMLCollection similar to Arrays
 */
const carImages = document.getElementsByClassName('car');
console.log("carImages", carImages);
console.log("first car", carImages[0]);

for (let i = 0; i < carImages.length; i++) {
  const car = carImages[i];
  console.log('car', car);
}

/**
 * getElementsByTagName()
 * Returns - HTMLCollection similar to Arrays
 */

const carImagesTag = document.getElementsByTagName('img');
console.log('carImagesTag', carImagesTag);
console.log("first car", carImagesTag[0]);

for (let i = 0; i < carImagesTag.length; i++) {
  const car = carImagesTag[i];
  console.log('car from tag', car);
}

/**
 * querySelector() - Univeral get method
 * Returns a single element
 */
const headingElement = document.querySelector('#heading');
const firstCarElement = document.querySelector('.car');
const firstCarElement2 = document.querySelector('img');
console.log('headingElement', headingElement)
console.log('firstCarElement', firstCarElement)
console.log('firstCarElement2', firstCarElement2)


/**
 * querySelectorAll()
 * Returns NodeList similar to Array
 */
const carImagesQuery = document.querySelectorAll('img');
const carImagesQuery2 = document.querySelectorAll('.car');
console.log('carImagesQuery', carImagesQuery)
console.log('carImagesQuery2', carImagesQuery2)

console.log(carImagesQuery[0]) // first el
console.log(carImagesQuery.item(0)); // first el

for (let i = 0; i < carImagesQuery.length; i++) {
  console.log(carImagesQuery[i]);
}


/**
 * innerHTML
 */

// Grab element
const authorEl = document.getElementById('author');

// Add content of element using innerHTML
authorEl.innerHTML = 'Joe Doe';  // string

// Add html to element using innerHTML
authorEl.innerHTML = `<h1>Jane Doe</h1>` // html

// What if i want to append instead of replace?
authorEl.innerHTML += `<h1>Alex Doe</h1>` // html





