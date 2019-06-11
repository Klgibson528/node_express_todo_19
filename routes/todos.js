const express = require('express')
const router = express.Router()
const todos = require('../data/todos.json')

router.get("/", (req, res) => {

    res.render('index', { todos: todos })
})

module.exports = router