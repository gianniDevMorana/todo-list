function addTaskItem() {
  // TODO:
  // [] grab the input value from here
  // [] pass the value to the createTaskItem
  // [] remove the current input value
  const taskItem = createTaskItem();
  document.getElementById("scroll-container").appendChild(taskItem);
}

function deleteTaskItem() {
  // TODO:
  // [] ...
  // ... do logic here
}

function checkTaskItem() {
  // ... do logic here
}

function createTaskItem() {
  const task = createElementWithClass("div", "task-item");
  const content = createElementWithClass("div", "content");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  const text = createElementWithClass("div", "task-text");
  text.innerText = "Example";
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
