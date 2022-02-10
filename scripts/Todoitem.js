import { getCurrentTime, getUUID } from "./utils.js";
import {
  getStorageData,
  setStorageData,
  TODO_LIST_KEY,
} from "./localStorageApi.js";
import { header, main, createSection } from "./templates.js";

function TodoItem({
  task,
  id = getUUID(),
  date = getCurrentTime(),
  isCompleted = false,
}) {
  task = header.querySelector("#input-task").value;
  this.task = task;
  this.id = getUUID();
  this.date = getCurrentTime();
  this.isCompleted = isCompleted;

  this.render = function () {
    const todos = getStorageData(TODO_LIST_KEY);
    main.innerHTML = "";
    todos.forEach((todo) => {
      const section = createSection(todo);
      section.addEventListener("click", (event) => {
        switch (event.target.type) {
          case "checkbox":
            this.toggle();
            break;
          case "button":
            this.deleteSectionButton();
            break;
        }
      });
      if (todo.isCompleted) {
        section.classList.remove("bg-secondary");
        section.classList.add("bg-success");
        section.firstElementChild.nextElementSibling.classList.add(
          "text-decoration-line-through"
        );
      } else {
        section.classList.add("bg-secondary");
        section.classList.remove("bg-success");
        section.firstElementChild.nextElementSibling.classList.remove(
          "text-decoration-line-through"
        );
      }
      main.append(section);
    });
  };

  this.addSection = function () {
    if (task.trim()) {
      const todo = new TodoItem(task);
      const todoListData = getStorageData(TODO_LIST_KEY);
      todoListData.push(todo);
      setStorageData(TODO_LIST_KEY, todoListData);
      this.render();
    }
  };

  this.toggle = function () {
    const todos = getStorageData(TODO_LIST_KEY);
    todos.map((todo) => {
      if (event.target.parentElement.id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setStorageData(TODO_LIST_KEY, todos);
    this.render();
  };

  this.deleteSectionButton = function () {
    const todos = getStorageData(TODO_LIST_KEY);
    todos.map((todo, index) => {
      if (event.target.parentElement.id === todo.id) {
        todos.splice(index, 1);
      }
    });
    setStorageData(TODO_LIST_KEY, todos);
    this.render();
  };
}

export { TodoItem };
