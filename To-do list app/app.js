const loginInput =document.querySelector("#login-form input");
const loginForm =document.querySelector("#login-form");

const HIDDEN_USERNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add (HIDDEN_USERNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText= `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_USERNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername=== null) {
    loginForm.classList.remove(HIDDEN_USERNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
} 