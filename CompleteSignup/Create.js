const router = require('express').Router();
const jwt_decode = require('jwt-decode');
const Keyboard = require('../Models/Peripherals/Keyboard');
const Headset = require('../Models/Peripherals/Headset');

router.get('/', async(req, res) => {
    const token = jwt_decode(req.cookies.session);
    console.log(token);
    const PlayerID = token._id
    const keyboard = new Keyboard({
        UserID: PlayerID,
        Keyboard: "Default Keyboard"
    });
    const headset = new Headset({
        UserID: PlayerID,
        Headset: "Default Headset"
    })
    try {
        const newHeadset = await headset.save();
        const newKeyboard = await keyboard.save();
        res.redirect('/settings');
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

module.exports = router;