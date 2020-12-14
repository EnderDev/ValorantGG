const router = require('express').Router();
const jwt_decode = require('jwt-decode');
const Keyboard = require('../Models/Peripherals/Keyboard');
const Headset = require('../Models/Peripherals/Headset');
const Mouse = require('../Models/Peripherals/Mouse');
const monitor = require('../Models/Peripherals/Monitor');
const Monitor = require('../Models/Peripherals/Monitor');

router.get('/', async(req, res) => {
    const token = jwt_decode(req.cookies.session);
    console.log(token);
    const PlayerID = token._id
    const keyboard = new Keyboard({
        UserID: PlayerID,
        Keyboard: "Default Keyboard."
    });
    const headset = new Headset({
        UserID: PlayerID,
        Headset: "Default Headset."
    });
    const mouse = new Mouse({
        UserID: PlayerID,
        Mouse: "Default Mouse."
    });
    const monitor = new Monitor({
        UserID: PlayerID,
        Monitor: "Default Monitor."
    });

    try {
        const newHeadset = await headset.save();
        const newKeyboard = await keyboard.save();
        const newMouse = await mouse.save();
        const newMonitor = await monitor.save();
        res.redirect('/settings');
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

module.exports = router;