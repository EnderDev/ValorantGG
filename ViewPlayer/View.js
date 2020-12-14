const router = require('express').Router();
const User = require('../Models/User');
const Keyboard = require('../Models/Peripherals/Keyboard');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');

router.get('/view/:id', async(req, res) => {
    const PlayerName = req.params.id;
    const PlayerCollection = await User.findOne({Username: PlayerName});
    const PlayerID = PlayerCollection._id;
    const PlayerKeyboard = await Keyboard.findOne({UserID: PlayerID});
    res.json(PlayerKeyboard);
})

module.exports = router;