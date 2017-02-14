var Sequelize = require('sequelize');
var db = require('../db/db.js');


var Student = db.define('student', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
});

module.exports = Student;

