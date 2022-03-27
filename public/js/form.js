
const { json } = require("body-parser");
const { generateKey } = require("crypto");
const { response } = require("express");
const { app } = require("firebase-admin");


const loader = document.querySelector('.loader');
// selecting inputs
const submitBtn = document.querySelector('.submit-btn');
const names = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const num = document.querySelector('#number');
const tac = document.querySelector('#terms-and-con');
const notification = document.querySelector('#notification');

// showALERT FUNCTION

const showAlert = (msg) => {
     let alertBox = document.querySelector('.alert-box');
     let alertMsg  = document.querySelector('.alert-msg');
     alertMsg.innerHTML = msg;
     alertBox.classList.add('show');
     setTimeout(() => {
         alertBox.classList.add('show');
     }, 3000);
}

// send data function
const sendData = (path,data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application'}),
        body: JSON.stringify(data),
    }).then((res) => res.json())
    .then(response => {
         processData(response);
    })
}

// handling JSON data in the frontend
const processData = (data) => {
    loader.style.display = null; 
    if (loader.alert) {
        showAlert(data.alert);
    } else if(data.names) {
        // create token
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

/// adding eventListners

submitBtn.addEventListener('click', () => {
    if(names.value.length > 3  ) {
      showAlert('enter must be greater than three letters') ;
    } else if(!email.value.length){
        showAlert('enter your email');
    } else if(password.value.length < 8){
     showAlert('password should be eight letters long');
    } else if(!Number(num.value) || num.value.length < 10){
        showAlert("this is not a valid number");
    } else if(!num.value.length){
         showAlert("enter your phone number");
    } else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        // submit form ********* sending data to backend
        loader.style.display = 'block';
        sendData('/signup', {
                 names: names.value,
                 email: email.value,
                 password: password.value,
                 number: number.value,
                 tac: tac.checked,
                 notification: notification.checked,
                 seller: false
        })
    }
})
