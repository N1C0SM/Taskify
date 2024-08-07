var addTaskButton = document.getElementById('itemButton');
var taskList = document.getElementById('task-list');
var counter = 0;
var completedCounter = 0;

function addTask() {
	let text = document.getElementById('inputText');
	if (text.value == '') {
		alert('Por favor, ingresa una tarea válida');
	} else {
		let taskElement = document.createElement('section');
		taskElement.className = 'task';
		let inputTask = document.createElement('input');
		inputTask.setAttribute('type', 'checkbox');
		inputTask.setAttribute('id', 'task');
		inputTask.addEventListener('change', updateCompletedCounter);
		let labelTask = document.createElement('label');
		labelTask.setAttribute('for', 'task');
		labelTask.innerText = text.value;
		taskElement.appendChild(inputTask);
		taskElement.appendChild(labelTask);
		taskList.appendChild(taskElement);
		text.value = '';
		counter++;
		updateCounter();
	}
}

function updateCounter() {
	let counterTasks = document.getElementById('counterTasks');
	if (!counterTasks) {
		counterTasks = document.createElement('p');
		counterTasks.setAttribute('id', 'counterTasks');
		document.getElementById('tasks-counter').appendChild(counterTasks);
	}
	counterTasks.innerText = counter;
}

function updateCompletedCounter() {
	let completedTasks = document.getElementById('completedTasks');
	if (!completedTasks) {
		completedTasks = document.createElement('p');
		completedTasks.setAttribute('id', 'completedTasks');
		document.getElementById('tasks-completed').appendChild(completedTasks);
	}
	completedCounter = document.querySelectorAll('#task-list input[type="checkbox"]:checked').length;
	completedTasks.innerText = completedCounter;
}

addTaskButton.onclick = addTask;
document.getElementById('inputText').addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		addTask();
	}
});
