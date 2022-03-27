
// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// initializing app 
const app = express();

// // declare static path 
let staticPath = path.join(__dirname, "public");

// middlewares
app.use(express.static(staticPath));


// routes and home routes
app.get("/404", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// signup route
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"))
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