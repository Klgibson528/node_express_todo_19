const express = require('express')
const router = express.Router()
const todos = require('../data/todos.json')


router.get("/api", (req, res) => {
    res.json(todos)
})



module.exports = router