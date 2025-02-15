let addTaskButton = document.getElementById('itemButton');
let taskList = document.getElementById('task-list');

function addTask() {
	let text = document.getElementById('inputText');
	if (text.value == '') {
		alert('Por favor, ingresa una tarea válida');
	} else {
		let taskElement = document.createElement('article');
		taskElement.className = 'task';
		
		let inputTask = document.createElement('input');
		inputTask.type = 'checkbox';
		
		let labelTask = document.createElement('label');
		labelTask.for = 'task';
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
	}
}

function removeTask(event) {
	let taskToRemove = event.target.closest('article');
	taskList.removeChild(taskToRemove);
}

addTaskButton.addEventListener('click', addTask);

document.getElementById('inputText').addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		addTask();
	}
});