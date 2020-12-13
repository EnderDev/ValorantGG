const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Registration = require('./Auth/Registration');
const Login = require('./Auth/Login');
const CompleteSignup = require('./CompleteSignup/Create');
const ViewPlayer = require('./View/Player');
const ejs = require('ejs');
const changePeripherals = require('./ChangeSettings/updatePeripherals');

// Middleware 
app.use(express.json());
app.use(bodyParser());
app.use(cookieParser());
app.set('view engine', 'ejs');

// Connect to DB
mongoose.connect('mongodb://localhost/ValorantStats')

// Routes 
app.use('/Register', Registration);
app.use('/Login', Login);
app.use('/register/complete', CompleteSignup);
app.use('/player', ViewPlayer);
app.use('/ChangePeripherals', changePeripherals);

// Run the server
app.listen('3000', () => {
console.log('Server started running port 3000');
})