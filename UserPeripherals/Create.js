const router = require('express').Router();
const Peripherals = require('../Models/Peripherals')
const jwt_decode = require('jwt-decode');

router.get('/', async(req, res) => {
    const token = jwt_decode(req.cookies.session);
    console.log(token);
    const PlayerID = token._id
    console.log(PlayerID);
    const peripherals = new Peripherals({
        UserID: PlayerID,
        Keyboard: 'Default',
        Mouse: 'Default',
        Headset: 'Default',
        Monitor:'Default'
    });
    try {
        const savedPeripherals = await peripherals.save();
        res.redirect('/dashboard');
        console.log(savedPeripherals);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
})

module.exports = router;