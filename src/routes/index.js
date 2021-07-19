const express = require('express');
const todos = require('./todos.route');

const app = express();

app.use('/todos', todos);

module.exports = app;
