const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Function to add remove functionality to a task
function addRemoveFunctionality(taskItem) {
  const removeButton = taskItem.querySelector('.remove-btn');
  removeButton.addEventListener('click', () => {
    taskItem.remove(); // Remove the task when the button is clicked
  });
}

// Add remove functionality to existing tasks
document.querySelectorAll('#task-list .remove-btn').forEach(btn => {
  addRemoveFunctionality(btn.parentElement);
});

// Add a new task to the end of the list
addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Create a remove button for the new task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    newTask.appendChild(removeButton);

    addRemoveFunctionality(newTask); // Add remove functionality to the new task
    taskList.appendChild(newTask); // Add the new task to the end of the list
    newTaskInput.value = ''; // Clear the input field
  }
});

// Insert a new task before the first existing task
const insertTaskButton = document.createElement('button');
insertTaskButton.textContent = 'Insert Task at Top';
insertTaskButton.id = 'insert-task-top';
document.getElementById('todo-manager').appendChild(insertTaskButton);

insertTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Create a remove button for the inserted task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    newTask.appendChild(removeButton);

    addRemoveFunctionality(newTask); // Add remove functionality to the new task

    // Insert the new task before the first child of the list
    if (taskList.firstElementChild) {
      taskList.insertBefore(newTask, taskList.firstElementChild);
    } else {
      taskList.appendChild(newTask); // If list is empty, append as the first item
    }

    newTaskInput.value = ''; // Clear the input field
  }
});