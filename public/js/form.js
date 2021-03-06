import { response } from "express";
    
const loader = document.querySelector('.loader');
// selecting inputs
const submitBtn = document.querySelector('#submit-btn');
const names = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const num = document.querySelector('#number');
const tac = document.querySelector('#terms-and-con');
const notification = document.querySelector('#notification');

/// showalert function
const showAlert = (msg) =>{
    let alertBox = document.querySelector('.alert-box');
    let alertMsg  = document.querySelector('.error-message');
    alertMsg.innerHMTL = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000)
}

/// send data function
const sendData = (path, data) => {
       fetch(path, {
           method: 'post',
           headers: new Headers({'Content-Type': 'application/json'}),
           body: JSON.stringify(data),
           
       }).then((res) => res.json()).then(response => {
           processData(response);
       })
}

/// submit button functionality

submitBtn.addEventListener('click', () => {
    alert('hello validated')
    if(names.value.length < 3){
         showAlert('name must be 3 letters long');
         //alert('bad input')
        } else if(!email.value.length){
        showAlert('enter your email');
        } else if(password.value.length < 9){
          showAlert('password should be eight letters long');
         } 
           else if(!Number(num.value) || num.value.length < 10){
            showAlert("this is not a valid number");
        } else if(!num.value.length){
             showAlert("enter your phone number");
        } else if(!tac.checked){
            showAlert('you must agree to our terms and conditions');x
        } else{
         // submit form 
         loader.style.display = 'block';
         sendData('./signup', {
             name: name.value,
             email: email.value,
             password: password.value,
             number: num.value,
             tac: tac.checked,
             notification: notification.checked,
             seller: false
         })
}
})