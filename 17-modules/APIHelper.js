function get() {
  return 'GET';
}

function post() {
  return 'POST';
}

function del() {
  return 'DELETE';
}

function update() {
  return 'UPDATE';
}

// module.exports.get = get;
// module.exports.post = post;
// module.exports.del = del;
// module.exports.update = update;

const APIHelper = {
  get,
  del,
  post,
  update
};

module.exports = APIHelper;

/*
For the above, we could create a class with all
the functions/methods and export the class
class APIHelper {
  get() {
    return 'GET';
  }
  
  post() {
    return 'POST';
  }
  
  del() {
    return 'DELETE';
  }
  
  update() {
    return 'UPDATE';
  }
}

module.exports = APIHelper
*/