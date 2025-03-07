showButton.onclick = () => {  
    if (showButton.classList.contains('zmdi-eye')) {
        showButton.classList.remove('zmdi-eye')
        showButton.classList.add('zmdi-eye-off')
        passwordInput.type = 'text'
    } else {
        showButton.classList.remove('zmdi-eye-off')
        showButton.classList.add('zmdi-eye')
        passwordInput.type = 'password'
    }
}

submitButton.addEventListener("click", async e => {
    e.preventDefault()
    let name = usernameInput.value
    let pass =  passwordInput.value

    let userLogin = await fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({userName:name,password:pass})
    })

    let res = await userLogin.json()
    
    if(res.status == 200){
        
        window.localStorage.setItem("token",res.token)
        window.location = "/"
    }
    else {
        span.textContent = res.message
    }

})