const express = require('express')
const router = express.Router()
const todos = require('../data/todos.json')
const bodyParser = require("body-parser")
const fs = require('fs')
const uuid = require('uuid')


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/add", (req, res) => {
    console.log(req.body.todo)
    let id = uuid()
    newTodo = {
        todo: req.body.todo,
        done: false,
        id: id
    }

    todos.unshift(newTodo)
    fs.writeFile('data/todos.json', JSON.stringify(todos), function (err) {
        if (err) {
            console.log(err)
        }
    })
    res.json(todos)


})

module.exports = router

