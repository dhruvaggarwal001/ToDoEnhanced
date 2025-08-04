const inputBox = document.getElementById("input-box")
const lists = document.getElementById("todolist")

const fetchTodos = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos?_limit=10")
    const todos = await response.json()
    lists.innerHTML = todos.map((todo) => {
        let li = document.createElement("li")
        li.innerText = todo.title
        return li
    })
}