const router = require('express').Router();
const User = require('../Models/User');
const Keyboard = require('../Models/Peripherals/Keyboard');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');
const Headset = require('../Models/Peripherals/Headset');

router.get('/', async(req, res) => {
    const token = req.cookies.session;
    if (!token) res.redirect('/Login');
    const Player_ID = jwt_Decode(token);
    const PlayerID = Player_ID._id;
    console.log(PlayerID);
    const userKeyboard = await Keyboard.findOne({UserID: PlayerID});
    const userHeadset = await Headset.findOne({UserID: PlayerID});

    res.render('settings', {
        userHeadset: userHeadset,
        userKeyboard: userKeyboard
    });
})

module.exports = router;