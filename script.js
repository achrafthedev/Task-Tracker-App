// Load tasks from LocalStorage on page load
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    displayTasks(tasks);
};

// Function to display tasks
const displayTasks = (tasks) => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
};

// Function to add a new task
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (taskInput.value.trim() !== '') {
        tasks.push({ title: taskInput.value, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks(tasks);
        taskInput.value = '';
    }
};

// Function to delete a task
const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(tasks);
};

// Event listener for the Add Task button
document.getElementById('addTaskButton').addEventListener('click', addTask);