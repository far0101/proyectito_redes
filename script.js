const el = document.querySelector("#mainbutton");
const taskList = document.getElementById("MainUl");

function tasklist() {
  let item = document.getElementById('MainInput').value;
  let time = document.getElementById('timeInput').value;
  let priority = document.getElementById('priorityInput').value;

  // validacion del input
  if (!item.trim()) {
    alert("Ingresa una tarea");
    return;
  }

  let text = document.createTextNode(`${item} - Hora: ${time}`);
  let newTask = document.createElement("li");

  // Asignar clases de prioridad
  if (priority === "low") {
    newTask.classList.add("low-priority");
  } else if (priority === "medium") {
    newTask.classList.add("medium-priority");
  } else if (priority === "high") {
    newTask.classList.add("high-priority");
  }

  // Checkbox para completar tarea
  var checkboxmaker = document.createElement('input');
  checkboxmaker.type = "checkbox";
  checkboxmaker.addEventListener("change", function() {
    if (this.checked) {
      newTask.classList.add("completed");
    } else {
      newTask.classList.remove("completed");
    }
  });

  // Botón de eliminar
  var deleteButton = document.createElement('button');
  deleteButton.textContent = "Eliminar";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", function() {
    newTask.remove();
  });

  // Crear tarea
  newTask.appendChild(checkboxmaker);
  newTask.appendChild(text);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  // limpia el input para la siguiente tarea
  document.getElementById('MainInput').value = "";
  document.getElementById('timeInput').value = "";
  document.getElementById('priorityInput').value = "low";
}

el.addEventListener("click", tasklist);