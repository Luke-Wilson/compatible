var Sequelize = require('sequelize');
var db = require('../db/db.js');


var Student = db.define('student', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  workwith: Sequelize.ARRAY(Sequelize.INTEGER),
  noworkwith: Sequelize.ARRAY(Sequelize.INTEGER)
});

module.exports = Student;

