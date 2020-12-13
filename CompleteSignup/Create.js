const router = require('express').Router();
const Peripherals = require('../Models/Keyboard')
const jwt_decode = require('jwt-decode');
const Resolution = require('../Models/Resolution');

router.get('/', async(req, res) => {
    const token = jwt_decode(req.cookies.session);
    console.log(token);
    const PlayerID = token._id
    console.log(PlayerID);
    const resolution = new Resolution({
        UserID: PlayerID,
        DisplayMode: 'FullScreen',
        Resolution: "1920 × 1080",
        FrameRateLimit: "144 FPS"
    })
    const peripherals = new Peripherals({
        UserID: PlayerID,
        Keyboard: 'Default',
        Mouse: 'Default',
        Headset: 'Default',
        Monitor:'Default'
    });
    try {
        const savedResolution = await resolution.save();
        const savedPeripherals = await peripherals.save();
        res.redirect('/settings');
        console.log(savedPeripherals);
        console.log(savedResolution);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
})

module.exports = router;