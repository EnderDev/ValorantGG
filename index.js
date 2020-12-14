const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Registration = require('./Auth/Registration');
const Login = require('./Auth/Login');
const CompleteSignup = require('./CompleteSignup/Create');
const ejs = require('ejs');
const changeKeyboard = require('./Dashboard/ChangeKeyboard');
const settings = require('./Dashboard/settings');
const ViewPlayer = require('./ViewPlayer/View');
const logout = require('./Auth/Logout');
const changeHeadset = require('./Dashboard/ChangeHeadset');

// Middleware 
app.use(express.json());
app.use(bodyParser());
app.use(cookieParser());
app.set('view engine', 'ejs');

// Connect to DB
mongoose.connect('mongodb://localhost/ValorantStats')
mongoose.set('useFindAndModify', false);

// Routes 
app.use('/Register', Registration);
app.use('/Login', Login);
app.use('/register/complete', CompleteSignup);
app.use('/changeKeyboard', changeKeyboard);
app.use('/settings', settings);
app.use('/', ViewPlayer)
app.use('/logout', logout);
app.use('/changeHeadset', changeHeadset);


// Run the server
app.listen('1337', () => {
console.log('Server started running port 1337');
})