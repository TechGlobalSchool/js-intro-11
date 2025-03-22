function connectToServer() {
  return new Promise((resolve, reject) => {
    const bool = false;
    if(bool) {
      console.log('Connection successful!');
      resolve('We are connected!');
    }
    else {
      console.log('Connection failed!');
      reject('ERROR: This connection is failed!!!!');
    }
  });
}


async function test1() {
  try {
    await connectToServer();
  }
  catch(err) {
    console.log(err);
  }
}

async function test2() {
  connectToServer()
  .then(() => {})
  .catch((err) => console.log(err));
}

async function runTests() {
  await test1();
  await test2();
}

runTests();