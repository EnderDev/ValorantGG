const express = require('express');
const router = express.Router();
const Peripherals = require('../Models/Keyboard');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const jwt_decode = require('jwt-decode');
const { update } = require('../Models/User');

router.post('/', async(req, res) => {

    const token = req.cookies.session;
    const decoded = jwt_decode(token);
    const PlayerID = decoded._id;
    try {
        const updatePeripherals = await Peripherals.findOneAndUpdate({
            UserID: PlayerID,
            Keyboard: req.body.Keyboard,
            Mouse: req.body.Mouse,
            Headset: req.body.Headset,
            Monitor: req.body.Monitor
        })
        res.json(updatePeripherals);
    } catch (error) {
        res.json(error);
        console.log(error);
    }

});

module.exports = router;