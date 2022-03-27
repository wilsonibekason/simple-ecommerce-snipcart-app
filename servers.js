

// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');


/// firebase admin setup
// admin SDK configuration snippet 

// var admin = require("firebase-admin");

// var serviceAccount = require("./ecommerce-snipcart-firebase-adminsdk-f7fxl-41697bb81d.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// let db = admin.firestore();

// // declare static path 
 let staticPath = path.join(__dirname, "public");
// // initialing express.js
 const app = express();
// // middleware
app.use(express.static(staticPath));
// // program to receive data
// app.use(express.json());


app.listen(3000, () => {
    console.log('listening to port 3000');
})
// routes and home routes
app.get("/", (res, req) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// signup route
app.get("/signup", (res, req) => {
    res.sendFile(path.join(staticPath, "signup.html"))
})

// //  destructuring form inputs from client

// app.post('/signup', (res, req) => {
//     let {name, email, password, num, tac, notification} = req.body;

//     // form validations
//     if(name.length < 3){
//         return res.json({'alert': 'name must be graeter than three letters'})
//     } else if(!email.length){
//         return res.json({'alert': 'enter your email'})
//     } else if(password.length < 8){
//         return res.json({'alert': 'length of password must be greater than eight'})
//     } else if(!Number(num) || num.length < 10){
//         return res.json({'alert': 'invalid number, please enter a valid number'})
//     }   else if(!num.length) {
//         return res.json({'alert': 'enter a valid number'})
//     }  else if(!tac) {
//         return res.json({'alert': 'you must agree to the terms and conditions'})
//     }

//     // store user in database

//     db.collection('users').doc(email).get().then(user => {
//         if(user.exits){
//             return res.json({'alert': 'email already exist'});
//         }  else{
//             // encrypt the password before using it
//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(password, salt, (err, hash) => {
//                     req.body.password = hash;
//                     db.collection('users').doc(email).set(req.body).then(data => {
//                         res.json({
//                             names: req.body.names,
//                             email: req.body.email,
//                             seller: req.body.seller,
//                         })
//                     })
//                 })
//             })
//         }
//     })
// })


/// end of configuration

// 404 page
app.get("/404", (res, req) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((res, req) => {
    res.redirect('/404');
})