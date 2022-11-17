const loginInput =document.querySelector("#login-form input");
const loginForm =document.querySelector("#login-form");
const logoutBtn = document.querySelector("#logout");

const HIDDEN_USERNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add (HIDDEN_USERNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(a) {
    greeting.innerText= `Hello, ${a}`;
    greeting.classList.remove(HIDDEN_USERNAME);
    loginForm.classList.add (HIDDEN_USERNAME);
    logoutBtn.classList.remove (HIDDEN_USERNAME);
}

function loggingout (event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername=== null) {
    loginForm.classList.remove(HIDDEN_USERNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
} 




logoutBtn.addEventListener("submit", loggingout);