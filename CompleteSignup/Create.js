const router = require('express').Router();
const jwt_decode = require('jwt-decode');
const Keyboard = require('../Models/Peripherals/Keyboard');

router.get('/', async(req, res) => {
    const token = jwt_decode(req.cookies.session);
    console.log(token);
    const PlayerID = token._id
    const keyboard = new Keyboard({
        UserID: PlayerID,
        Keyboard: "Default Keyboard"
    });
    try {
        const newKeyboard = await keyboard.save();
        res.json(newKeyboard);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

module.exports = router;