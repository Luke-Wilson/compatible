const Sequelize = require('sequelize');
const config = require('./config.js');

var db = new Sequelize('compatible', config.username, config.password);
module.exports = db;

//models
var Student = require('../students/studentModel.js');


db.sync();
