const el = document.querySelector("#mainbutton");
 
function tasklist() {
    let item = document.getElementById('MainInput').value;
    let text = document.createTextNode(item);
    let newTask = document.createElement("li");
    var checkboxmaker = document.createElement('input');
    checkboxmaker.type = "checkbox";
    checkboxmaker.name = "name";
    checkboxmaker.value = "value";
    checkboxmaker.id = "id"
    checkboxmaker.classList = "corrected"
    newTask.appendChild(text);
    newTask.appendChild(checkboxmaker);
    document.getElementById("MainUl").appendChild(newTask);
}


el.addEventListener("click", tasklist);

const itemList = document.querySelector("#item-1");

function markdone() {
    itemList.classList.toggle("donete")
}

itemList.addEventListener("click", markdone);