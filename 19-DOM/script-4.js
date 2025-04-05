const buttonEl = document.getElementById('btn');
const inputEl = document.getElementById('name');
const inputEl2 = document.getElementById('lname');

/**
 * addEventLister(): Add event listener to element
 */

// Click event
buttonEl.addEventListener('click', (event) => {
  // console.log(event);
  console.log(event.target);
  console.log('Button clicked');
})


// Change event
inputEl.addEventListener('change', (event) => {
  console.log('value', event.target.value);
})


// Input event
inputEl.addEventListener('input', (event) => {
  console.log('value', event.target.value);
})

// Keypress event
inputEl2.addEventListener('keypress', (event) => {
  console.log('code', event.code)
  if(event.code === 'Enter') {
    // 'work'
  } else {
    // ignore
  }
  console.log('keypress value', event.target.value);
})

// Keyup event
inputEl2.addEventListener('keyup', (event) => {
  console.log('keyup value', event.target.value);
})

// removeEventListener
const myDiv = document.getElementById("myDIV");
const removeBtn = document.querySelector('#remove');

// Attach mousemove event to myDiv
// log random number
myDiv.addEventListener("mousemove", myFunction);

// On removeButton click remove mousemove event
removeBtn.addEventListener('click', () => {
  removeHandler();
})

// helper function
function removeHandler() {
  myDiv.removeEventListener("mousemove", myFunction);
}

// callback function
function myFunction() {
  console.log("Math.random()", Math.random())
}