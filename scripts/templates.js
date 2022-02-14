const app = document.querySelector("#app");
const header = createHeader();
const main = createMain();
app.append(header, main);

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  element.className = className;
  const textElement = document.createTextNode(text);
  element.append(textElement);
  return element;
}

function createHeader() {
  const header = createElement(
    "header",
    "header d-flex justify-content-center align-items-center p-2 m-2"
  );
  const buttonDeletAll = createElement(
    "button",
    "btn btn-danger flex-fill bd-highlight fs-3 p-2 m-2 border border-dark border-1 col-3 rounded-3",
    "Delete All"
  );
  buttonDeletAll.id = "delete-all";
  const inputNewTask = createElement(
    "input",
    "flex-fill bd-highlight fs-3 p-2 m-2 border border-dark border-1 col-6 rounded-3"
  );
  inputNewTask.id = "input-task";
  inputNewTask.placeholder = "Enter to do ...";
  const buttonAdd = createElement(
    "button",
    "btn btn-success flex-fill bd-highlight fs-3 p-2 m-2 border border-dark border-1 col-3 rounded-3",
    "Add"
  );
  buttonAdd.id = "add";
  header.append(buttonDeletAll, inputNewTask, buttonAdd);
  return header;
}

function createMain() {
  const main = createElement(
    "main",
    "d-flex flex-column justify-content-center align-items-center fs-4 p-2 m-2 flex-fill bd-highligh"
  );
  return main;
}

function createSection(todo) {
  const section = createElement(
    "section",
    "d-flex justify-content-between align-items-center my-3 border border-dark border-1 rounded-3 position-relative col-10 bg-secondary bg-opacity-25"
  );
  section.id = todo.id;
  const checkBox = createElement(
    "input",
    "form-check-input btn-outline-primary fs-4 p-3 m-2 border border-dark border-1 rounded-3"
  );
  checkBox.type = "checkbox";
  checkBox.checked = todo.isCompleted;
  const sectionTaskText = createElement(
    "span",
    "text-break fs-3 p-2 m-4 border border-dark border-1 rounded-3 col-9",
    todo.task
  );
  const sectionDate = createElement(
    "span",
    "align-self-end fs-4 p-1 m-2 border border-dark border-1 rounded-3",
    todo.date
  );
  const closeButton = createElement(
    "button",
    "btn-close position-absolute top-0 end-0 p-1 m-2 fs-4 border border-dark border-1 rounded-3"
  );
  closeButton.type = "button";
  section.append(checkBox, sectionTaskText, sectionDate, closeButton);
  return section;
}
export { header, main, createSection };
