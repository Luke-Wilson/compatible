const Sequelize = require('sequelize');
const config = require('./config.js');

var db = new Sequelize(config.dbUrl, config.username, config.password);
module.exports = db;

//models
var Student = require('../students/studentModel.js');


db.sync();
