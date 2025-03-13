//Task 1
const users = [
  {
      firstName: 'Tech',
      lastName: 'Global',
      email: 'tech.global@techglobal.com',
      age: 3,
      address: {
          street_line_1: '2800 S River Rd',
          street_line_2: 'Suite 310',
          city: 'Des Plaines',
          state: 'IL',
          zip: '60018'
      }
  },
  {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      age: 47,
      address: {
          street_line_1: '123 Abc St',
          street_line_2: '',
          city: 'Chicago',
          state: 'IL',
          zip: '12345'
      }
  },
  {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@gmail.com',
      age: 30,
      address: {
          street_line_1: '123 Abc St',
          street_line_2: '',
          city: 'Chicago',
          state: 'IL',
          zip: '12345'
      }
  },
  {
      firstName: 'Alex',
      lastName: 'Smith',
      email: 'alexsmith@outlook.com',
      age: 32,
      address: {
          street_line_1: '456 Xyz St',
          street_line_2: '',
          city: 'Miami',
          state: 'Florida',
          zip: '67890'
      }
  }
];

//•	Count how many users are older than 30 -> 2
//let olderThan30 = 0;
// for(let user of users){
//   if(user.age>30) olderThan30++;
// }

const olderThan30 = users.reduce((counter,user) =>  user.age > 30 ? counter+1: counter,0)
console.log(olderThan30)

//•	Count how many users live in Chicago     			-> 2
const liveInChicago = users.reduce((counter, user) => user.address.city === 'Chicago' ? counter + 1 : counter,0)
console.log(liveInChicago)

//•	Count how many users live in IL     -> 3
const liveInIllinois = users.reduce((counter, user) => user.address.state === 'IL' ? counter + 1 : counter, 0)
console.log(liveInIllinois)

//•	Count how many users’ emails has Gmail domain  -> 2
const gmailDomain = users.reduce((count, user) => user.email.includes('gmail')? count + 1 : count, 0)
console.log(gmailDomain)


//•	Find and store all the users name younger than 35    		-> [ 'Tech', 'Jane', 'Alex' ]
const youngerThan35 = users.reduce((nameArr, user) => user.age < 35 ? nameArr.concat(user.firstName) : nameArr,[])
//const youngerThan35 = users.filter(user => user.age < 35).map(user => user.firstName)

console.log(youngerThan35)

//•	Find average of ages of all users    				-> 28
const averageOfAges = (users.reduce((count, user) => count + user.age,0)) / users.length
console.log(averageOfAges)


/*
Task02

TASK-2You are given a JS Array below:
-Find the most expensive product    -> MacBook Pro 16-inch
-Find the least expensive product    -> AirPods Pro
-Find the product with the biggest quantity    -> AirPods Pro
-Find the product with the smallest quantity   -> MacBook Pro 16-inch
-Find all the product names    -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
*/
const appleStore = [
  {
      productName: "iPhone 14 Pro",
      quantity: 50,
      price: 1099.99,
  },
  {
      productName: "MacBook Pro 16-inch",
      quantity: 30,
      price: 2399.99,
  },
  {
      productName: "iPad Air",
      quantity: 75,
      price: 599.99,
  },
  {
      productName: "Apple Watch Series 7",
      quantity: 100,
      price: 399.99,
  },
  {
      productName: "AirPods Pro",
      quantity: 200,
      price: 249.99,
  },
];
// Find the most expensive product   -> MacBook Pro 16-inch
const mostExpensive = appleStore.reduce((max, curr) => max.price > curr.price ? max: curr, {});
console.log(mostExpensive.productName);
// Find the least expensive product   -> AirPods Pro
const leastExpensive = appleStore.reduce((min, curr) => min.price < curr.price ? min: curr, {});
console.log(leastExpensive.productName);
// Find the product with the biggest quantity   -> AirPods Pro
const mostQuantity = appleStore.reduce((mostCounted, curr) => mostCounted.quantity > 
curr.quantity ? mostCounted: curr, {});
console.log(mostQuantity.productName);
// Find the product with the smallest quantity  -> iPhone 14 Pro
const leastQuantity = appleStore.reduce((leastCounted, curr) => leastCounted.quantity < curr.quantity ? leastCounted: curr, {});
console.log(leastQuantity.productName);
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
const allProductNames = appleStore.map((product) => product.productName);
console.log(allProductNames)

/*
Task03

You are given a JS Array below:
-Find the cheapest book in the bookstore           -> To Kill a Mockingbird
-Find the most expensive book in the bookstore   -> Harry Potter and the Sorcerer's Stone
-Find all Classic books         -> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]
*/
const bookstore = [
  {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      price: 9.99
  },
  {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      price: 7.99
  },
  {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      genre: "Science Fiction",
      price: 12.49
  },
  {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      price: 14.99
  },
  {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Mystery",
      price: 10.99
  }
]
// Find the cheapest book in the bookstore  -> To Kill a Mockingbird
const cheapestBook = bookstore.reduce((prev, curr) => {
  return prev.price < curr.price ? prev : curr;
}, {});
console.log(cheapestBook.title); // To Kill a Mockingbird

// Find the most expensive book in the bookstore  -> Harry Potter and the Sorcerer's Stone
const mostExpensiveBook = bookstore.reduce((prev, curr) => {
  return prev.price > curr.price ? prev : curr;
}, {});
console.log(mostExpensiveBook.title); // Harry Potter and the Sorcerer's Stone

// Find all Classic books   -> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]
const classicBooks = bookstore.reduce((acc, curr) => {
  if(curr.genre === 'Classic') acc.push(curr.title);
  return acc;
}, [])
console.log(classicBooks); // [ 'The Great Gatsby', 'To Kill a Mockingbird' ]

/*
Task04

You are given a JS Array below:
-Calculate the total price of products in the cart     -> 2444
-Find the brands of all the products in the cart   -> [ 'Dell', 'Apple', 'Sony' ]
-Find all the items in the cart with their quantity  -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
*/

const shoppingCart = {
  userId: 12345,
  items: [
      {
          productId: 1,
          productName: 'Laptop',
          price: 999.00,
          quantity: 1,
          specifications: {
              brand: 'Dell',
              screen: '15.6 inches',
              processor: 'Intel Core i7'
          }
      },
      {
          productId: 2,
          productName: 'Smartphone',
          price: 499.00,
          quantity: 2,
          specifications: {
              brand: 'Apple',
              model: 'iPhone 12',
              color: 'Space Gray'
          }
      },
      {
          productId: 3,
          productName: 'Headphones',
          price: 149.00,
          quantity: 3,
          specifications: {
              brand: 'Sony',
              type: 'Over-ear',
              wireless: true
          }
      }
  ],
  shippingAddress: {
      street: '123 Main Street',
      city: 'Anytown',
      zipCode: '12345'
  },
  orderDate: '2023-08-29'
};
// Calculate the total price of products in the cart     -> 2444
const totalPrice = shoppingCart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log(totalPrice); // 2444
// Find the brands of all the products in the cart  -> [ 'Dell', 'Apple', 'Sony' ]
const productBrands = shoppingCart.items.map(item => item.specifications.brand);
console.log(productBrands); // [ 'Dell', 'Apple', 'Sony' ]
// Find all the items in the cart with their quantity -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
const itemsWithQuantities = shoppingCart.items.map(item => `${item.productName}, ${item.quantity}`);
console.log(itemsWithQuantities); // [ 'Laptop, 1', 'Smartphone, 2', 'Headphones, 3' ]












