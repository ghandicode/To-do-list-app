const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const toDosObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(toDosObj);
    paintTodo(toDosObj);
    saveTodos();
}

function paintTodo(event) {
    const li = document.createElement("li");
    li.id = event.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    button.innerText="X";
    span.innerText=event.text;
    button.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((item)=>item.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}


toDoForm.addEventListener("submit", handleTodoSubmit);


const TODOSKEY ="todos";

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOSKEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOSKEY);


if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintTodo);
    toDos = parsedToDos;
}


