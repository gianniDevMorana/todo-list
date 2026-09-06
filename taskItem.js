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
  const content = e.target.querySelector('#content');
  const contentChildren = content.children;
  const checkbox = contentChildren[0];
  const taskTitle = contentChildren[1];

  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    taskTitle.classList.add("task-text-checkboxed");
  } else {
    taskTitle.classList.remove("task-text-checkboxed");
  }
}

function createTaskItem(taskName) {
  const task = createElementWithClass("div", "task-item");
  const content = createElementWithClass("div", "content");
  content.setAttribute("id", "content");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  task.addEventListener("click", checkTaskItem);
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

// Next steps

// Update checkTaskItem() and createTaskItem() by creating ID's and querySelector()
// Cursor always focused on add task
// Find out errors when deleting task elements
// Allow user to enter new task by pressing ENTER
// When the page is open input should have focus