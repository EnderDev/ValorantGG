const router = require('express').Router();
const Peripherals = require('../Models/Peripherals')

router.post('/', async(req, res) => {
    const peripherals = new Peripherals({
        UserID: req.body.UserID,
        Keyboard: req.body.Keyboard,
        Mouse: req.body.Mouse,
        Headset: req.body.Headset,
        Monitor: req.body.Monitor
    });
    try {
        const savedPeripherals = await peripherals.save();
        res.json(savedPeripherals);
        console.log(savedPeripherals);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
})

module.exports = router;