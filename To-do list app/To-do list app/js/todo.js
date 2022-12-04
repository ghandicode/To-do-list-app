const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

function paintTodo(event) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    button.innerText="X";
    span.innerText=event;
    button.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}


toDoForm.addEventListener("submit", handleTodoSubmit);


const TODOSKEY ="todos";

const toDos = [];

function saveTodos(){
    localStorage.setItem(TODOSKEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOSKEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log (parsedToDos);
    parsedToDos.forEach((item)=> console.log ("worked"));
}

/* 


function sayHello(item) {
    console.log("this is", item)
}

parsedToDos.forEach(sayHello)

*/
