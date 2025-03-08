const book = {
  author: {
    fname: 'Stefan',
    lname: 'Zweig'
  },
  title: 'Amok',
  pages: 62
};

Object.freeze(book); // 

console.log(Object.isFrozen(book)); // true

console.log(book);