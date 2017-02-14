var Student = require('./studentModel.js');

module.exports = {
  newStudent: (req, res) => {
    console.log('from studentController.js');
    res.send('got it from studentController.js');
  }

};
