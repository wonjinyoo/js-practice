const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  // put into localstorage
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  // event: contains information about click event
  // target: element which was clicked
  const li = event.target.parentElement;
  li.remove();

  // delete specific element in array
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(todo) {
  const list = document.createElement("li");
  // for identification
  list.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "✔️";
  button.addEventListener("click", deleteTodo);
  list.appendChild(span);
  list.appendChild(button);

  todoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  // store not only text, but also id for identifying each item
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// retrieve from localStorage
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  // parse: make it an array (javascript object)
  const parsedTodos = JSON.parse(savedTodos);
  // restore todos
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
