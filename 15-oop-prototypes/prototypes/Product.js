class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  sell(num) {
    if(this.quantity >= num) this.quantity -= num;
    else throw new Error(`We don't have ${num} of ${this.name} in stocks!!!`);
  }

  return(num) {
    this.quantity += num;
  }

  applyDiscount(percentage) { // 
    if(percentage <= 1) this.price -= this.price * percentage;
  }
}

module.exports = Product;