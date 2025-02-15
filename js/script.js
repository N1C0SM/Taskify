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
		taskList.appendChild(taskElement);
		let removeButton = document.createElement('button');
		removeButton.innerHTML = '<i class="ph ph-trash"></i>';
		removeButton.className = 'removeButton';
		removeButton.onclick = removeTask;
		let task = document.createElement('div');
		task.className = 'task';
		task.appendChild(inputTask, labelTask);
		taskElement.append(task, removeButton);
		text.value = '';
	}
}

function removeTask(event) {
	console.log(event.target.parentNode);
	taskList.removeChild(event.target.parentNode);
}

addTaskButton.addEventListener('click', addTask);
document.getElementById('inputText').addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		addTask();
	}
});
