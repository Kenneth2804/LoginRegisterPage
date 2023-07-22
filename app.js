function toggleForm() {
	const loginForm = document.getElementById('loginForm');
	const registerForm = document.getElementById('registerForm');

	if (loginForm.style.display === 'none') {
		loginForm.style.display = "block";
		registerForm.style.display = 'none';
	}else{
		loginForm.style.display = 'none';
		registerForm.style.display = 'block'
	}
}

function registerUser() {
	const username = document.getElementById('registerUsername').value;
	const password = document.getElementById('registerPassword').value;


//Validaciones 
if (username.trim() === '' || password.trim() === '') {
	alert('Plis men, escribe en los dos cabron')

}

//guardar el usuario en el almacenamiento local
localStorage.setItem('username', username);
localStorage.setItem('password', password);

//Mostrar la alerta de q se pudo
alert('Se registró pá ');
return false;
}

function loginUser() {
	const username = document.getElementById('loginUsername').value;
	
	const password = document.getElementById('loginPassword').value;

if (username.trim() === '' || password.trim() === '') {
	alert('Plis men, escribe en los dos cabron')

}

//guardar el usuario en el almacenamiento local
const storedUsername = localStorage.getItem('username', username);
const storedPassword = localStorage.getItem('password', password);

if (username === storedUsername && password === storedPassword) {

	alert("Hey!, sí te pusdiste loggear. " + username + "Bienvenido");
}else{
	alert("Hey!, no se pudo bro");
}
return false;

}