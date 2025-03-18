class Customer {
  // private property
  #secretInformation = 'Hello';

  // public property
  notSecret = 'Hi';

  // public property - all the instances can access this

  constructor(fullname, address) {
    this.fullname = fullname;
    this.address = address;
  }
}

// 
const cust1 = new Customer();

console.log(cust1);
console.log(cust1.notSecret); // Hi
console.log(cust1.secretInformation); // undefined