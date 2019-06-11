$.getJSON('api', displayTodos)
function displayTodos(todos) {
    let todoHTML = ""
    todos.forEach(item => {
        if(item.done == true){
        todoHTML += `<div class='row' data-id=${item.id}>`
        todoHTML += `<li>${item.todo}</li>`
        todoHTML += "</div>"
        }
    })

    document.getElementById('completedTodoList').innerHTML = todoHTML

}