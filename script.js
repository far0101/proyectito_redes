const el = document.querySelector("#mainbutton");
const taskList = document.getElementById("MainUl");

function tasklist() {
  let item = document.getElementById('MainInput').value;

  // validicion del imput (opcional)
  if (!item.trim()) {
    alert("Ingresa una tarea wachin");
    return;
  }

  let text = document.createTextNode(item);
  let newTask = document.createElement("li");
  var checkboxmaker = document.createElement('input');
  checkboxmaker.type = "checkbox";

  checkboxmaker.addEventListener("change", function() {
    if (this.checked) {
      newTask.remove(); // despawneamos la tarea correctamente
    }
  });

  newTask.appendChild(text);
  newTask.appendChild(checkboxmaker);
  taskList.appendChild(newTask);

  // limpia el input para la siguiente tarea
  document.getElementById('MainInput').value = "";
}

el.addEventListener("click", tasklist);