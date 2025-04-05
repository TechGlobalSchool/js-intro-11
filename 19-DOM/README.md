# DOM 

## DOM structure
- Connecting js to html
- window object
  - alert
  - prompt
  - locaStorage

## Accessing DOM elements
- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()

- innerHTML: Can used to access an element content or to set content to element
```js
el.innerHTML = 'Some text'; // set
console.log(el.innerHTML); // access
```
- innerText: alternative to innerHTML
- textContent: alternative to innerHTML


## Create a DOM element
- document.createElement(): Create a new element
- createTextNode(): Creates a text node

- append(): Appends element to the DOM
- appendChild(): Alternative to append()
```js
append(node1, node2, node3) // work
appendChild(node1, node2, node3) // fail

append(node1, `<p>Hello</p>`) // work
appendChild(node1, `<p>Hello</p>`) // fail
```


## Changing DOM attributes

- You can change DOM attributes manually. Ex: `img.src = 'some value'`
- Or
- You can use `getAttribute()`, `setAttribute()`

## className vs classList
- className: returns the class of an element as string
- classList: Special object with methods to add/remove/toggle a single class.


