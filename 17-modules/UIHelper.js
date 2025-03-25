const UIHelper = {
  component: 'User Interface',
  getUrl: function() {
    return 'EXAMPLE URL';
  },
  navigateBack: function() {
    return 'BACK';
  },
  navigateForward: function() {
    return 'FORWARD';
  },
  refresh: function() {
    return 'REFRESH';
  }
};

// You are exporting UIHelper as an object
// module.exports = UIHelper; 


// You are exporting UIHelper as a property
module.exports.UIHelper = UIHelper;