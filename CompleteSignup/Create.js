const router = require('express').Router();
const jwt_decode = require('jwt-decode');
const Keyboard = require('../Models/Peripherals/Keyboard');
const Headset = require('../Models/Peripherals/Headset');
const Mouse = require('../Models/Peripherals/Mouse');
const monitor = require('../Models/Peripherals/Monitor');
const Monitor = require('../Models/Peripherals/Monitor');
const DisplayMode = require('../Models/VideoSettings/DisplayMode');
const FrameRateLimit = require('../Models/VideoSettings/FrameRateLimit');
const Resolution = require('../Models/VideoSettings/Resolution');


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
    const displaymode = new DisplayMode({
        UserID: PlayerID,
        DisplayMode: "Full-Screen"
    });
    const frameratelimit = new FrameRateLimit({
        UserID: PlayerID,
        FrameRateLimit:"60"
    });
    const resolution = new Resolution({
        UserID: PlayerID,
        Resolution:"1920 x 1080"
    })

    try {
        const newHeadset = await headset.save();
        const newKeyboard = await keyboard.save();
        const newMouse = await mouse.save();
        const newMonitor = await monitor.save();
        const newDisplayMode = await displaymode.save();
        const newFrameRateLimit = await frameratelimit.save();
        const newResolution = await resolution.save();

        res.redirect('/settings');
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

module.exports = router;