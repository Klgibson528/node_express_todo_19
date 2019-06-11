// $(() => {
    $.getJSON('api', displayTodos)
    $('form').submit((e) => {
        e.preventDefault()

        $.post("/add", {
            todo: $("#input").val(),
        }, displayTodos)

        var input = document.getElementById('input')
        input.value = ""
    })
    function displayTodos(todos) {
        let todoHTML = ""
        todos.forEach(item => {
            todoHTML += `<div class='row' data-id=${item.id}>`
            todoHTML += `<li>${item.todo}</li>`
            todoHTML += `<button onClick='deleteTodo(this.id)' name='delete' id=${item.id}> X </button>`
            todoHTML += "</div>"
        })

        document.getElementById('todoList').innerHTML = todoHTML

    }

    function deleteTodo(id) {
        console.log(id)
        $.post("/delete", { id: id }, displayTodos)
    }

// })