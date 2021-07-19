const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// contains methods: findAll, findOne, create, update, destroy
const Todo = sequelize.define('todo', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
// create database if not exists
Todo.sync();

module.exports = Todo;
