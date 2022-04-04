
// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');

const path = require('path');

// firebase admin setup
let serviceAccount = require('path of key file');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
let database = admin.firestore();

app.use(express.json());
// initializing app 
const app = express();

// // declare static path 
let staticPath = path.join(__dirname, "public");

// middlewares
app.use(express.static(staticPath));

// routes and home routes
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// signup route
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"))
})

app.post("/signup", (req, res) => {
    let{names, email, password, num, tac, notification} = req.body;
    // form validation
    if(names.length < 3){
        return res.json({'alert': 'name must be three letters long'});
    } else if(!email.length){
        return res.json({'alert': 'enter a valid email address'})
    } else if(password.length < 8){
        return ({'alert': 'password should be eight long '})
    } else if(!Number(num) || num.length < 10 ){
        return res.json({"alert": 'invalid number, please enter a valid number'})
    } else if(!tac.checked){
        return  res.json({'alert': 'you must agree to the terms and conditions of our platform'})
    }
    // store user in database
    database.collection('users').doc(email).get().then(user => {
        if(user.exists){
            return res.json({'alert': 'email already exists'});
        } else{
            // encrypt this password before storing it
            bcrypt.genSalt(10, (err, salt) =>{
                bcrypt.hash(password, salt,(err, hash) => {
                    req.body.password = hash;
                    database.collection('users').doc(email).set(req.body).then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })
        }
    })
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})