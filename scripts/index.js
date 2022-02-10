import { header, main } from "./templates.js";
import { TodoItem } from "./Todoitem.js";
import {
  getStorageData,
  setStorageData,
  TODO_LIST_KEY,
} from "./localStorageApi.js";

header.addEventListener("click", handelClick);
createTodo();

function handelClick(event) {
  switch (event.target.id) {
    case "delete-all":
      onDeletAllButton();
      break;
    case "add":
      onAddButton();
      break;
  }
}
function onDeletAllButton() {
  main.innerHTML = "";
  const todos = getStorageData(TODO_LIST_KEY);
  todos.length = 0;
  setStorageData(TODO_LIST_KEY, todos);
}
function onAddButton() {
  const task = header.querySelector("#input-task").value;
  const section = new TodoItem(task);
  section.addSection();
}

function createTodo() {
  const todos = getStorageData(TODO_LIST_KEY);
  todos.forEach((todo) => {
    const section = new TodoItem(todo.task);
    section.render();
  });
}
