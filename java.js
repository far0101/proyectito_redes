const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskInput = document.getElementById('new-task');
  const taskPriority = document.getElementById('task-priority').value;
  const taskDueDate = document.getElementById('task-due-date').value;

  const newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.innerHTML = `
    <span>${taskInput.value}</span>
    <span>Prioridad: ${taskPriority}</span>
    <span>Fecha límite: ${taskDueDate}</span>
  `;

  taskList.appendChild(newTask);
  taskInput.value = '';
  document.getElementById('task-priority').value = '';
  document.getElementById('task-due-date').value = '';
});
