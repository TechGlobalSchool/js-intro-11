const Product = require('./prototypes/Product');

const pen = new Product('Pen', 20, 10);
const tshirt = new Product('T-Shirt', 5, 20);

console.log(pen); // Product { name: 'Pen', quantity: 20, price: 10 }
pen.sell(15);
pen.return(3);
pen.applyDiscount(2);

console.log(pen); // Product { name: 'Pen', quantity: 8, price: 8 }


const mug = new Product('Mug', 10, 15);

mug.sell(20);

console.log(mug);