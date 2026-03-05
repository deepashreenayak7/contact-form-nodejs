
document.getElementById("contactForm").addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const response = await fetch("/submit",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,email,message})
});

const data = await response.json();

document.getElementById("response").innerText = data.message;

});