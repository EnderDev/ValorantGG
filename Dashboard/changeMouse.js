const router = require('express').Router();
const User = require('../Models/User');
const Mouse = require('../Models/Peripherals/Mouse');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');

router.post('/', async(req, res) => {
    const token = req.cookies.session;
    if (!token) res.redirect('/Login');
    const Player_ID = jwt_Decode(token);
    const PlayerID = Player_ID._id;
    console.log(PlayerID);
    try {
        const changeHeadset = await Mouse.findOneAndUpdate({UserID: PlayerID, Mouse: req.body.Mouse});
        res.redirect('/settings');
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

module.exports = router;