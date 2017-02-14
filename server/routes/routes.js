var studentController = require('../students/studentController.js');



module.exports = function (app, express) {
  app.get('/api/students', studentController.getStudents);
  app.post('/api/students', studentController.newStudent);
  app.put('/api/students', studentController.updateStudent);

  app.post('/api/preferences', studentController.studentPrefs);



  //front end helpers
  app.get('/api/students/:id', studentController.getStudentById);


};
