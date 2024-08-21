let addTaskButton = document.getElementById('itemButton');
addTaskButton.onclick = addTask;
let taskList = document.getElementById('task-list');
let text = document.getElementById('inputText');
let tasks = [];
/**
 * La función addTask() saca el texto del input y lo mete a un array de tareas, con el método push().
 * Después de meter la tarea, se llama a la función showTasks()
 */
function addTask() {
	tasks.push(text.value);
	showTasks();
}
/**
 * La función showTasks() recorre el array de tareas (con un foreach) y por cada elemento del array de tareas, se crea su html correspondiente
 */
function showTasks() {
	taskList.innerHTML = '';
	tasks.forEach((task) => {
		let tasksList = document.createElement('ul');
		let taskElement = document.createElement('li');
		taskElement.textContent = task;
		tasksList.appendChild(taskElement);
		taskList.appendChild(tasksList);
	});
}
