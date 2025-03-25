// import statements 
const { UIHelper } = require('./UIHelper');
const { getRandomNumber } = require('../utils/MathHelper');
const DBHelper = require('./DBHelper');
const APIHelper = require('./APIHelper');

const { connect, teardown } = require('./ServerHelper')

console.log(UIHelper.component);
console.log(UIHelper.getUrl());

console.log(getRandomNumber(1, 10));

console.log(DBHelper.DB_PASSWORD);
console.log(DBHelper.DB_USERNAME);
console.log(DBHelper.connect());

console.log(APIHelper.post());
console.log(APIHelper.del());
console.log(APIHelper.get());
console.log(APIHelper.update());

console.log(connect());
console.log(teardown());