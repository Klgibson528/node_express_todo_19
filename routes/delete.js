const express = require('express')
const router = express.Router()
const todos = require('../data/todos.json')
const bodyParser = require("body-parser")
const fs = require('fs')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/delete", (req, res) => {
    console.log(req.body.id)
    //returns a list of all IDs then returns the first index at which the ID can be found in the array
    var idToRemove = todos.map(function (item) { return item.id; })
        .indexOf(req.body.id);
    console.log(idToRemove)
    //removes item in todos at the given index
    todos.splice(idToRemove, 1);

    fs.writeFile('data/todos.json', JSON.stringify(todos), function (err) {
        if (err) {
            console.log(err)
        }
    })
    res.json(todos)
})

module.exports = router

