const lists = document.getElementById("todolist")

const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    const todos = await response.json()
    lists.innerHTML = todos.map(todo => `<li class="myTodos">${todo.title}</li>`).join("");
}
fetchTodos()