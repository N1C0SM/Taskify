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
	console.log(tasks);
	showTasks();
}
/**
 * La función showTasks() recorre el array de tareas (con un foreach) y por cada elemento del array de tareas, se crea su html correspondiente
 */
function showTasks() {
	taskList.innerHTML = '';

	tasks.forEach((task, index) => {
		let taskElement = document.createElement('li');
		taskElement.innerHTML = `${task}  <button onclick="removeTask(${index})"> borrar </button>`;
		// taskElement.textContent = task;
		taskList.appendChild(taskElement);
	});
}
/**
 * quitar del array el elemento con el indice indicado
 * volver a pintar todas las tareas dentro del array (volver a llamar a showTasks)
 * @param {*} indice
 */
function removeTask(indice) {
	console.log('borrando', indice);
	tasks[indice] = null;
	tasks = tasks.filter((element) => element !== null);
	showTasks();
	console.log(tasks);
}
