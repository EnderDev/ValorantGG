const router = require('express').Router();
const User = require('../Models/User');
const { Mongoose } = require('mongoose');
const Peripherals = require('../Models/Peripherals');

router.get('/:id', async(req, res) => {
    const PlayerName = req.params.id;
    const PlayerID = await User.findOne({Username: PlayerName});
    if(!PlayerID) res.json(`Player doesn't exist...`);
    const ID = PlayerID._id;
    const PlayerPeripherals = await Peripherals.findOne({UserID: ID});
    res.send(PlayerPeripherals);
});

module.exports = router;