const router = require('express').Router();
const User = require('../Models/User');
const Resolution = require('../Models/VideoSettings/Resolution');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');

router.post('/', async(req, res) => {
    const token = req.cookies.session;
    if (!token) res.redirect('/Login');
    const Player_ID = jwt_Decode(token);
    const PlayerID = Player_ID._id;
    console.log(PlayerID);
    try {
        const changeResolution = await Resolution.findOneAndUpdate({UserID: PlayerID, Resolution: req.body.Resolution});
        res.redirect('/settings');
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

module.exports = router;