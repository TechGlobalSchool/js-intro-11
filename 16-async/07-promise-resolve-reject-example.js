function connectToDB() {
  return new Promise((resolve, reject) => {
    const dbUp = true;
    setTimeout(() => {
      if(dbUp) resolve('DB connection is successful...');
      else reject('ERROR: DB is down...')
    }, 3000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    const dataAvailable = true;
    setTimeout(() => {
      if(dataAvailable) resolve('DB data is here...');
      else reject('ERROR: DB data not found...');
    }, 1500);
  });
}

function useData() {
  return new Promise((resolve, reject) => {
    const usingData = false;
    setTimeout(() => {
      if(usingData) resolve('Data is used...');
      else reject('ERROR: Data is not used...');
    }, 500);
  });
}


function test2() {
  connectToDB()
    .then(() => getData())
    .then(() => useData())
    .catch(err => console.log(err));
}


async function test3() {
  try {
    await connectToDB();
    await getData();
    await useData();
  }
  catch(err) {
    console.log(err);
  }
}

test3();





function test1() {
  connectToDB()
    .then((data) => {
      console.log(data);
      getData()
        .then((data) => {
          console.log(data);
          useData()
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            })
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
}