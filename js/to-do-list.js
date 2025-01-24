// Select elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");
const container_to_do_list = document.querySelector(".container-to-do-list");

// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", loadTasks);

// Handle form submission
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value;
  const taskTimeValue = taskTime.value;

  if (taskText.trim() && taskTimeValue) {
    addTask(taskText, taskTimeValue);
    saveTask(taskText, taskTimeValue);
    taskForm.reset();
  }
});

function addTask(taskText, taskTimeValue) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("w-[300px]");
  taskCard.innerHTML = `
	  <div
		class="bg-white max-w-xs shadow-lg mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer"
	  >
		<div class="bg-indigo-500 flex h-20 items-center">
		  <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">1</h1>
		  <p class="ml-4 text-white uppercase">${taskTimeValue}</p>
		</div>
		<p class="py-6 px-6 text-lg tracking-wide text-center">${taskText}</p>
		<div class="flex justify-center px-5 mb-2 text-sm">
		  <button
			type="button"
			class="delete-btn border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
		  >
			Delete
		  </button>
		</div>
	  </div>
	`;

  // Append the task card to the container
  container_to_do_list.appendChild(taskCard);

  // Add delete functionality for this specific task card
  const deleteButton = taskCard.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    removeTaskFromLocalStorage(taskText, taskTimeValue); // Remove from localStorage
    taskCard.remove(); // Remove the task card from the DOM
  });
}

// Save a task to localStorage
function saveTask(taskText, taskTimeValue) {
  const tasks = getTasks();
  tasks.push({ text: taskText, time: taskTimeValue });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = getTasks();
  tasks.forEach((task) => addTask(task.text, task.time));
}

// Remove a task from localStorage
function removeTaskFromLocalStorage(taskText, taskTimeValue) {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(
    (task) => task.text !== taskText || task.time !== taskTimeValue
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
