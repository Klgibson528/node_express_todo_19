const express = require('express')
const router = express.Router()
const todos = require('../data/todos.json')

const bodyParser = require("body-parser")
const fs = require('fs')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/done", (req, res) => {
    var done = todos.map(function (item) { return item.done; })
    var decide = done.includes(true)
    res.render("done", { todos: todos, decide: decide })
})

router.post("/done", (req, res) => {
    console.log(req.body.id)
    var index = todos.map(function (item) { return item.id; })
        .indexOf(req.body.id);
    console.log(todos[index])
    todos[index].done = true
    console.log(todos[index])


    fs.writeFile('data/todos.json', JSON.stringify(todos), function (err) {
        if (err) {
            console.log(err)
        }
    })
    res.json(todos)
})

module.exports = router