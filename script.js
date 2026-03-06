// Signup Logic
const signupForm = document.getElementById("signupForm");

if(signupForm){
signupForm.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let valid = true;

if(name.length < 3){
document.getElementById("nameError").innerText = "Name must be at least 3 characters";
valid = false;
}else{
document.getElementById("nameError").innerText = "";
}

if(!email.includes("@")){
document.getElementById("emailError").innerText = "Invalid email format";
valid = false;
}else{
document.getElementById("emailError").innerText = "";
}

if(password.length < 6){
document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
valid = false;
}else{
document.getElementById("passwordError").innerText = "";
}

if(password !== confirmPassword){
document.getElementById("confirmError").innerText = "Passwords do not match";
valid = false;
}else{
document.getElementById("confirmError").innerText = "";
}

if(valid){
let user = {name:name,email:email,password:password};
localStorage.setItem("user", JSON.stringify(user));
document.getElementById("signupMessage").innerText = "Signup successful! Now login.";
}
});
}

// Login Logic
const loginForm = document.getElementById("loginForm");

if(loginForm){
loginForm.addEventListener("submit", function(e){
e.preventDefault();

let email = document.getElementById("loginEmail").value.trim();
let password = document.getElementById("loginPassword").value;

let storedUser = JSON.parse(localStorage.getItem("user"));

if(storedUser && email === storedUser.email && password === storedUser.password){
document.getElementById("loginMessage").innerText = "Login successful!";
}else{
document.getElementById("loginMessage").innerText = "Invalid email or password";
}
});
}
