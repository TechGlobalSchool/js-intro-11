/*
Create a class called Customer
- Create a constructor for this class which takes 4 arguments: 
    name
    age
    membershipType
    membershipCost
- Create a method called getDetails() which returns the customer's information in the format: 
    {name} is {age} years old and has a {membershipType} membership with ${membershipCost}.
- Create a method called upgradeMembership() 
    which upgrades the membership type of the customer to 'Premium' and increases the cost by 20%.
*/


/*
Create a class called VIPCustomer and inherit the Customer class
- Create a constructor for this class which takes 4 arguments: 
    name
    age
    membershipType
    membershipCost
    - Inherit the Customer class constructor and the other methods
- Create a method called applyDiscount() which applies a discount of 10% to the VIP customer's membershipCost.
*/


/*
Create a class called BusinessCustomer and inherit the Customer class
- Create a constructor for this class which takes 5 arguments: 
    name
    age
    membershipType
    membershipCost
    duration
    - Inherit the Customer class constructor and the other methods
- Create a method called extendContract() which extends the business customer's contract by 1 year and decreases the cost by %15.
*/


/*
Create a customer object with below information
customer1 = { name: 'John Doe', age: 30, membershipType: 'Basic', membershipCost: 50 }
*/


/*
Create a VIP customer object with below information
vipCustomer = { name: 'Jane Smith', age: 35, membershipType: 'Gold', membershipCost: 100 }
*/


/*
Create a business customer object with below information
businessCustomer = { name: 'David Johnson', age: 40, membershipType: 'Platinum', membershipCost: 200, duration: 2 }
*/



/*
Execute the upgradeMembership() method for customer1
    -this will upgrade the membership type of customer1 to 'Premium'
Execute the applyDiscount() method for vipCustomer
    -this will apply a discount of 10% to the membership type of vipCustomer
Execute the extendContract() method for businessCustomer
    -this will extend the contract of businessCustomer by 1 year
*/


/*
Print information of all the customers using getDetails() method

EXPECTED OUTPUT:
John Doe is 30 years old and has a Premium membership with $60.
Jane Smith is 35 years old and has a Gold membership with $90.
David Johnson is 40 years old and has a Platinum membership with $170.
*/