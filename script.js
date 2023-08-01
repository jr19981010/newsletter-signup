const submitButton = document.querySelector('[data-submit]')
const stayUpdatedContainer = document.querySelector('.stay-updated-container')
const emailInput = document.querySelector('[data-email-input]')
const successContainer = document.querySelector('.success-container')
const emailData =  document.querySelector('[data-email]')
const dismissButton = document.querySelector('[data-dismiss-button]')
const emailResult = document.querySelector('[data-email-result]')
console.log(stayUpdatedContainer)
console.log(successContainer)


submitButton.addEventListener('click', validateEmail)
dismissButton.addEventListener('click', dismissDisplay)


function validateEmail(){

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value

    if(emailRegex.test(email)){
        console.log('valid')
        stayUpdatedContainer.style.display = 'none'
        successContainer.style.display = 'flex'
        emailData.innerHTML = email
    }else{
        emailResult.innerHTML = 'Invalid!'
        setInterval(showMessage, 1000)

    }
}

function dismissDisplay(){
    successContainer.style.display = 'none'
    stayUpdatedContainer.style.display = 'grid'
    emailInput.value = ''
}

function showMessage() {
    emailResult.innerHTML = ''
    emailInput.value = ''
  }