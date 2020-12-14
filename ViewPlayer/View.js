const router = require('express').Router();
const User = require('../Models/User');
const Keyboard = require('../Models/Peripherals/Keyboard');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');
const Headset = require('../Models/Peripherals/Headset');
const Mouse = require('../Models/Peripherals/Mouse');
const Monitor = require('../Models/Peripherals/Monitor');

router.get('/view/:id', async(req, res) => {
    const PlayerName = req.params.id;
    const PlayerCollection = await User.findOne({Username: PlayerName});
    const PlayerID = PlayerCollection._id;
    const PlayerKeyboard = await Keyboard.findOne({UserID: PlayerID});
    const PlayerHeadset = await Headset.findOne({UserID: PlayerID});
    const PlayerMouse = await Mouse.findOne({UserID: PlayerID});
    const PlayerMonitor = await Monitor.findOne({UserID: PlayerID});
    res.send(PlayerKeyboard + PlayerHeadset + PlayerMouse);
})

module.exports = router;