const main = document.getElementById("main")
const signInForm = document.getElementById("signInForm")
const login = document.getElementById("login")
const regBtn = document.getElementById("regBtn")
const registerForm = document.getElementById("registerForm")
const signUp = document.getElementById("signUp")
const logBtn = document.getElementById("logBtn")

logBtn.addEventListener("click", ()=>{
    registerForm.classList.add("hide")
    signInForm.classList.remove("hide")
})

regBtn.addEventListener("click", ()=>{
    registerForm.classList.remove("hide")
    signInForm.classList.add("hide")
})