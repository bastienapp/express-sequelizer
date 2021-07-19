const express = require('express');
const {
  findAll,
  findOne,
  findByContent,
  create,
  update,
  deleteOne,
} = require('../controllers/todos.controller');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);
router.get('/content/:content', findByContent);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteOne);

module.exports = router;
