const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function Login(){
    var email = "jenishabista@gmail.com";
    var password = "password";
    
    fetch(`http://127.0.0.1:8000/login/email=${email}&password=${password}`)
    .then(response => response.json())
    .then(data => window.location.href = '../index.html');
}