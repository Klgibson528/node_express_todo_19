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
            if(item.done == false){
            todoHTML += `<div class='row' data-id=${item.id}>`
            todoHTML += `<li>${item.todo}</li>`
            todoHTML += `<button onClick='deleteTodo(this.id)' name='delete' id=${item.id}> Delete </button>`
            todoHTML += `<button onClick='completeTodo(this.id)' name='complete' id=${item.id}> Complete </button>`
            todoHTML += "</div>"
            }
        })

        document.getElementById('todoList').innerHTML = todoHTML

    }

    function deleteTodo(id) {
        $.post("/delete", { id: id }, displayTodos)
    }

    function completeTodo(id) {
        $.post("/done", { id: id }, displayTodos)
    }

// })