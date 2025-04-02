console.log('Hello from script-1.js');

// Client vs Server environment
if(typeof window !== undefined) {
  // some client code
  console.log("WINDOW:::", window); // Available only on client code
} else {
  console.log('GLOBAL', global); // Available only on server
}

/**
 * ALERT
 * alert() doesn't returns nothing (undefined)
 */
// const alertAns = window.alert('Alert!!!');
// console.log('alertAns', alertAns); // undefined


/**
 * PROMPT
 * prompt()
 *  - Provide message and click OK - string
 *  - Provide message and click CANCEL - null
 *  - No message click OK - empty string
 *  - No message click CANCEL - null
 */
// const promptAns = prompt('Would you like to hear from us? Leave your email');
// console.log('promptAns', promptAns);

/**
 * CONFIRM
 * confirm()
 *  - true
 *  - false
 */

// const confirmAns = confirm('Are you student?');
// console.log('confirmAns', confirmAns);

/**
 * localStorage()
 */

// Storage length
const storageLen = localStorage.length;
console.log('storageLen', storageLen);

// setItem
localStorage.setItem('username', 'abc123');
console.log('storageLen', storageLen);

// getItem
const userName = localStorage.getItem('username');
console.log('userName', userName);

// removeItem
localStorage.removeItem('username');
console.log('storageLen', storageLen);

localStorage.setItem('username', 'joe');
localStorage.setItem('password', 'abc123');
console.log('storageLen', storageLen);

// clear
localStorage.clear();

// How to store object in storage?
localStorage.setItem('userInfo', {name: 'Alex', email: 'alex@gmail.com'}); // [object Object]
localStorage.setItem('userInfo', JSON.stringify({name: 'Alex', email: 'alex@gmail.com'})); 

const userInfo = localStorage.getItem('userInfo'); // string
const userInfoObj = JSON.parse(localStorage.getItem('userInfo'));
console.log('userInfo', userInfo);
console.log('userInfoObj', userInfoObj);


