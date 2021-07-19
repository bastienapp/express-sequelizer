const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Model contains methods: findAll, findOne, create, update, destroy
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

module.exports = Todo;
