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
const changeMouse = require('./Dashboard/changeMouse');
const changeMonitor = require('./Dashboard/changeMonitor');
const changeDisplayMode = require('./Dashboard/changeDisplayMode');
const changeFrameRateLimit = require('./Dashboard/changeFrameRateLimit');
const changeResolution = require('./Dashboard/changeResolution');
const test = require('./Dashboard/Image');
const changeBio = require('./Dashboard/changeBio');
const changeAspectRatio = require('./Dashboard/changeAspectRatio');
const changeColor = require('./Dashboard/changeColor');
const changeOutlines = require('./Dashboard/changeOutlines');
const changeInnerLines = require('./Dashboard/changeInnerLines');
const changeOuterLines = require('./Dashboard/changeOuterLines');

// Middleware 
app.use(express.json());
app.use(bodyParser());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static('public'))

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
app.use('/changeMouse', changeMouse);
app.use('/changeMonitor', changeMonitor);
app.use('/changeDisplayMode', changeDisplayMode);
app.use('/changeFrameRateLimit', changeFrameRateLimit);
app.use('/changeResolution', changeResolution);
app.use('/testing', test);
app.use('/changeBio', changeBio);
app.use('/changeAspectRatio', changeAspectRatio);
app.use('/changeColor', changeColor);
app.use('/changeOutlines', changeOutlines);
app.use('/changeInnerLines', changeInnerLines);
app.use('/changeOuterLines', changeOuterLines);

// Run the server
app.listen('1337', () => {
console.log('Server started running port 1337');
})