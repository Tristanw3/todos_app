todos = [
    "Buy Groceries",
    "Make Dinner"
]

renderTodoList()
document.getElementsByClassName("addButton")[0].addEventListener('click', addTodo)
document.getElementsByTagName("input")[0].addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        return addTodo(event)
    }
})

function renderTodoList() {
    const todoBox = document.querySelector('.todos');
    todoBox.textContent = "";
    todos.forEach(function(element, index) {
        const listItem = document.createElement('li');
        listItem.innerText = element;
        todoBox.append(listItem)

        const deleteButton = document.createElement('img');
        deleteButton.src = document.getElementById("deleteIcon").src;
        deleteButton.classList = "deleteButton"
        deleteButton.index = index;
        deleteButton.addEventListener('click', deleteTodo)
        listItem.append(deleteButton);
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