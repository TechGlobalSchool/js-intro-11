const cities = [ 'Rome', 'Berlin', 'Kyiv' ];

const [ capItaly, capGermany, capUkraine ] = cities;

console.log(capItaly); // Rome


const account = {
  accountHolder: 'John Doe',
  email: 'johndoe@gmail.com',
  password: 'Jonh123',
  username: 'johnwashere',
  DOB: '01/01/2000',
  accountNumber: '1234-1234-1234-1234',
  securityCode: 123
};

const { username, password, email, DOB } = account;

console.log(username);
console.log(password);
console.log(email);
console.log(DOB);