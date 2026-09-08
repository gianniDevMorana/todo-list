function addTaskItem() {
  const newInput = document.getElementById("new-task");
  if (newInput.value === "") {
    return;
  }
  const taskItem = createTaskItem(newInput.value);
  document.getElementById("scroll-container").appendChild(taskItem);
  newInput.value = "";

  newInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("add-button").click();
    }
  });
}

const newTask = document.getElementById("new-task");
newTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("add-button").click();
    }
  });

function deleteTaskItem(e) {
  const taskItem = e.target.closest(".task-item");
  taskItem.remove();
}

function checkTaskItem(e) {
  const content = e.currentTarget.querySelector("#content");
  const checkbox = content.querySelector("#checkbox");
  const taskTitle = content.querySelector("#task-title");

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
  checkbox.setAttribute("id", "checkbox");
  task.addEventListener("click", checkTaskItem);
  const text = createElementWithClass("div", "task-text");
  text.innerText = taskName;
  text.setAttribute("id", "task-title");
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

window.onload = function setFocusOnLoadPage() {
  document.getElementById("new-task").focus();
};

function setFocusOnAddTask() {
  document.getElementById("add-button").addEventListener("click", () => {
    document.getElementById("new-task").focus();
  });
}

setFocusOnAddTask();
addTaskItem();

// Next steps

// Allow user to enter new task by pressing ENTER
