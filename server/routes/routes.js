var studentController = require('../students/studentController.js');



module.exports = function (app, express) {
  app.get('/api/test', (req, res) => {
    console.log('get request received');
    res.send('got it again');
  });

  //create a new student
  app.post('/api/students', studentController.newStudent);
};
