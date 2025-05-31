const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const stored = localStorage.getItem("tasks");
  const tasks = stored ? JSON.parse(stored) : [];
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const delBtn = document.createElement("button");
    delBtn.textContent = "видалити";
    delBtn.onclick = () => deleteTask(index);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  saveTasks(tasks);
  taskInput.value = "";
  loadTasks();
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  saveTasks(tasks);
  loadTasks();
}

function clearTasks() {
  localStorage.removeItem("tasks");
  loadTasks();
}
window.onload = loadTasks;