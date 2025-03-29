class Customer{
  constructor(name, age , membershipType, membershipCost){
    this.name = name;
    this.age = age;
    this.membershipType = membershipType;
    this.membershipCost = membershipCost;
  }
  getDetails(){
    return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}.`
  }

  upgradeMembership(){
    this.membershipType = 'Premium'
    this.membershipCost += this.membershipCost * .2
  }
} 

class VIPCustomer extends Customer {
  constructor(name, age , membershipType, membershipCost){
    super(name, age , membershipType, membershipCost)
  }

  applyDiscount(){
    this.membershipCost -= this.membershipCost * .1
  }
}

class BusinessCustomer extends Customer {
  constructor(name, age , membershipType, membershipCost, duration){
    super(name, age , membershipType, membershipCost)
    this.duration = duration;
  }

  extendContract(){
    this.duration += 1;
    this.membershipCost -= this.membershipCost * .15
  }
}


const customer1 = new Customer('John Doe', 30, 'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);
const customers = [customer1, vipCustomer, businessCustomer]

for(const customer of customers){
  console.log(customer.getDetails())
}

customer1.upgradeMembership() //updates membership from basic to Premium and adds 20 percent cost
vipCustomer.applyDiscount() // updates cost to 10 percent less
businessCustomer.extendContract()// add 1 year duration and subtract 15 percent cost

for(const customer of customers){
  console.log(customer.getDetails())
}



