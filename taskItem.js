function addTaskItem() {
  const newInput = document.getElementById("new-task");
  if (newInput.value === "") {
    return;
  }
  const taskItem = createTaskItem(newInput.value);
  document.getElementById("scroll-container").appendChild(taskItem);
  newInput.value = "";
}

function deleteTaskItem(e) {
  const taskItem = e.target.closest(".task-item");
  taskItem.remove();
}

function checkTaskItem(e) {
  if (e.target.checked) {
    e.target.nextSibling.classList.add("task-text-checkboxed");
  } else {
    e.target.nextSibling.classList.remove("task-text-checkboxed");
  }
}

function createTaskItem(taskName) {
  const task = createElementWithClass("div", "task-item");
  const content = createElementWithClass("div", "content");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", checkTaskItem);
  const text = createElementWithClass("div", "task-text");
  text.innerText = taskName;
  const deleteButton = createElementWithClass("button", "delete-button");
  const closeIcon = createElementWithClass("span", "material-symbols-outlined");
  closeIcon.innerText = "close";
  deleteButton.addEventListener("click", deleteTaskItem);
  task.appendChild(content);
  content.appendChild(checkbox);
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
