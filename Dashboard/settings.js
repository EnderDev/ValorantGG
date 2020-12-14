const router = require('express').Router();
const User = require('../Models/User');
const Keyboard = require('../Models/Peripherals/Keyboard');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');
const Headset = require('../Models/Peripherals/Headset');
const Mouse = require('../Models/Peripherals/Mouse');
const Monitor = require('../Models/Peripherals/Monitor');

router.get('/', async(req, res) => {
    const token = req.cookies.session;
    if (!token) res.redirect('/Login');
    const Player_ID = jwt_Decode(token);
    const PlayerID = Player_ID._id;
    console.log(PlayerID);
    const userName = await User.findOne({_id: PlayerID});
    const username = userName.Username;
    const userKeyboard = await Keyboard.findOne({UserID: PlayerID});
    const userHeadset = await Headset.findOne({UserID: PlayerID});
    const userMouse = await Mouse.findOne({UserID: PlayerID});
    const userMonitor = await Monitor.findOne({UserID: PlayerID});
    
    res.render('settings', {
        username:username,
        userMonitor: userMonitor,
        userMouse: userMouse,
        userHeadset: userHeadset,
        userKeyboard: userKeyboard
    });
})

module.exports = router;