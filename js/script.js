let addTaskButton = document.getElementById('itemButton');
let taskList = document.getElementById('task-list');
let counter = document.getElementById('counter');
let counterCompleted = document.getElementById('counter-completed');

function addTask() {
    let text = document.getElementById('inputText');

    if (text.value.trim() === '') {
        alert('Por favor, ingresa una tarea válida');
    } else {
        let taskElement = document.createElement('article');
        taskElement.className = 'task';

        let inputTask = document.createElement('input');
        inputTask.type = 'checkbox';
        inputTask.addEventListener('change', updateCounter); // Se actualiza el contador al marcar/desmarcar

        let labelTask = document.createElement('label');
        labelTask.innerText = text.value;

        let task = document.createElement('div');
        task.className = 'task';
        task.append(inputTask, labelTask);

        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="ph ph-trash"></i>';
        removeButton.className = 'removeButton';
        removeButton.onclick = removeTask;

        taskElement.append(task, removeButton);
        taskList.appendChild(taskElement);

        text.value = '';

        updateCounter();
    }
}


function removeTask(event) {
    let taskToRemove = event.target.closest('article');
    if (taskToRemove) {
        taskToRemove.remove();
        updateCounter();
    }
}

function updateCounter() {
    let tasks = document.querySelectorAll('#task-list article').length;
    let completedTasks = document.querySelectorAll('#task-list input[type="checkbox"]:checked').length;

    counter.innerHTML = tasks; 
    counterCompleted.innerHTML = completedTasks;
}


addTaskButton.addEventListener('click', addTask);

document.getElementById('inputText').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
