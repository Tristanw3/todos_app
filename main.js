todos = [
    'test_todo 1',
    'test todo 2'
]

renderTodoList()

document.getElementsByClassName("addButton")[0].addEventListener('click', addTodo)

function renderTodoList() {
    const todoBox = document.querySelector('.todos');
    todoBox.innerHTML = "";
    todos.forEach(function(element, index) {
        const listItem = document.createElement('li');
        listItem.innerText = element;
        todoBox.append(listItem)

        const deleteButton = document.createElement('span');
        deleteButton.classList = "deleteButton"
        deleteButton.innerText = "X";
        deleteButton.index = index;
        listItem.append(deleteButton);
        deleteButton.addEventListener('click', deleteTodo)
    });
}

function addTodo() {
    const inputText = document.getElementsByClassName("inputTodoText")[0];
    const todoText = inputText.value
    if (todoText !== "") {
        inputText.value = ""
        todos.push(todoText);
        renderTodoList();
    }
}

function deleteTodo(event) {
    const index = event.currentTarget.index;
    todos.splice(index, 1);
    renderTodoList()
}