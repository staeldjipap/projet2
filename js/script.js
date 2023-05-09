let labelEmail = document.getElementById('email-label')
let emailDivs = document.querySelectorAll('#email-label>div')

console.log(labelEmail, emailDivs)
labelEmail.addEventListener('click', (event) => {
    console.log(event)
    // labelEmail.classList.add('label-up')    
    for (let i = 0; i < emailDivs.length; i++) {
        const div = emailDivs[i];
        div.classList.add('label-up')
    }
})

let emailInput = document.getElementById('email')
emailInput.addEventListener('focusout', (event) => {
    for (let i = 0; i < emailDivs.length; i++) {
        const div = emailDivs[i];
        div.classList.remove('label-up')
    }
})
let labelPassword = document.getElementById('password-label')
let passwordDivs = document.querySelectorAll('#password-label>div')
console.log(labelPassword, passwordDivs)
labelPassword.addEventListener('click', (event) => {
    console.log(event)
    // labelEmail.classList.add('label-up')    
    for (let i = 0; i < passwordDivs.length; i++) {
        const div = passwordDivs[i];
        div.classList.add('label-up')
    }
})
let passwordInput = document.getElementById('password')
passwordInput.addEventListener('focusout', (event) => {
    for (let i = 0; i < passwordDivs.length; i++) {
        const div = passwordDivs[i];
        div.classList.remove('label-up')
    }
})


