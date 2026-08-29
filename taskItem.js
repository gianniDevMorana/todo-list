function addTaskItem() {
  const newInput = document.getElementById("new-task");
  if (newInput.value === "") {
    return;
  }
  const taskItem = createTaskItem(newInput.value);
  document.getElementById("scroll-container").appendChild(taskItem);
  newInput.value = "";
}

function deleteTaskItem() {
  // TODO:
  // [] ...
  // ... do logic here
}

function checkTaskItem() {
  // ... do logic here
}

function createTaskItem(taskName) {
  const task = createElementWithClass("div", "task-item");
  const content = createElementWithClass("div", "content");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  const text = createElementWithClass("div", "task-text");
  text.innerText = taskName;
  const deleteButton = createElementWithClass("button", "delete-button");
  const closeIcon = createElementWithClass("span", "material-symbols-outlined");
  closeIcon.innerText = "close";
  task.appendChild(content);
  content.appendChild(input);
  content.appendChild(text);
  task.appendChild(deleteButton);
  deleteButton.appendChild(closeIcon);
  return task;
}

function createElementWithClass(elName, className) {
  const element = document.createElement(elName);
  element.classList.add(className);
  return element;
}
