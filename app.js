const taskInput = document.getElementById("taskInput");
const taskInput1 = document.getElementById("taskInputtime");
const addTaskBtn = document.getElementById("addTask");
const addtime = document.getElementById("addtime");
const taskList = document.getElementById("taskList");
const timeList = document.getElementById("timelist");

addTaskBtn.addEventListener("click", function() {
  const task = taskInput.value;
  const li = document.createElement("li");
  li.innerHTML = task;
  taskList.appendChild(li);
  taskInput.value = "";
});
addtime.addEventListener("click", function() {
    const task = taskInput1.value;
    const li = document.createElement("li");
    li.innerHTML = task;
    taskList.appendChild(li);
    taskInput.value = "";
  });
  
