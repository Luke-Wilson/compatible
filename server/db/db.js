const Sequelize = require('sequelize');
const config = require('./config.js');

var db = new Sequelize(config.dbUrl);
module.exports = db;

//models
var Student = require('../students/studentModel.js');


db.sync();
