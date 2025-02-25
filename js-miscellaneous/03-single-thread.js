// Synchronous code
// console.log('Hello');
// console.log('Monday');


// Asynchronous code
// setTimeout(() => {
//   console.log('John');
// }, 2000);

// console.log('Batch-11');


// Call Stack - Web APIs - Callback Queue
function connectToDB() {
  setTimeout(() => {
    console.log('Connected to DB...');
  }, 1000);
}

function getData() {
  console.log('Data...');
}

function processData() {
  console.log('Data Processed...');
}

function runDB() {
  connectToDB();
  getData();
  processData();
}

runDB();