var Student = require('./studentModel.js');

module.exports = {
  //create a new student
  newStudent: (req, res) => {
    var newStudent = Student.build({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      workwith: req.body.workwith,
      noworkwith: req.body.noworkwith
    });
    newStudent.save();
    res.send('new student created');
  },

  //create student preferences
  studentPrefs: (req, res) => {
    res.send('supposed to create preferences here');
  },

  updateStudent: (req, res) => {
    Student.findById(req.body.id)
    .then(student => {
      student.firstname = req.body.firstname;
      student.lastname = req.body.lastname;
      student.workwith = req.body.workwith;
      student.noworkwith = req.body.noworkwith;
      student.save();
      res.send(`Student updated: ${student.firstname} ${student.lastname}`);
    });
  },

  //get all students
  getStudents: (req, res) => {
    Student.findAll({})
    .then( students => {
      res.send(students);
    });
  },

  //get a student record from an id number
  getStudentById: (req, res) => {
    Student.find({
      id: req.params.id
    })
    .then( student => {
      res.send(student);
    });
  }

};
