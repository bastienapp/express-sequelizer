const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

// Model contains methods: findAll, findOne, create, update, destroy
class Todo extends Sequelize.Model {}
Todo.init(
  {
    // todo : id INT, content VARCHAR, done: BOOLEAN default false
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    done: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'todo',
  }
);

module.exports = Todo;
