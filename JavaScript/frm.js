const username = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (el) => {
    let showMessages = [];
    if(username.value === '' || username.value == null){
        showMessages.push('Name is required')
    }
    if(password.value.length <= 6){
        showMessages.push('password must have more than 6 characters')
    }
    if(password.value.length >= 20){
        showMessages.push('password should not exists more than 20 characters')
    }
    if(showMessages.length > 0){
        el.preventDefault()
        error.innerText = showMessages.join(',');
    }
})