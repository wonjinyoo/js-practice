// document = html
// get items of html by using 'queryselector'
// '#' means id
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function userNameEnter(event) {
    // prevent from refreshing after submission
    event.preventDefault();
    
    // add new class in loginForm
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    // remembering username using 'localStorage'
    localStorage.setItem(USERNAME_KEY, username);
    
    paintGreetings(username);
}
 
function paintGreetings(username) {
    //greeting.innerText = "Hello " + username;
    // same thing using 'backtick(``)'
    greeting.innerText = `Hello, ${username}!`;
    
    // get rid of a specific class
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// retreive data(value) from localStorage using getItem (key-value)
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
    // when "submit" event happens, function "userNameEnter"
    loginForm.addEventListener("submit", userNameEnter);

} else {
    // show the greetings
    paintGreetings(savedUsername);
}