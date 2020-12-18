const router = require('express').Router();
const User = require('../Models/User');
const InnerLines = require('../Models/Crosshair/InnerLines');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');

router.post('/', async(req, res) => {
    const token = req.cookies.session;
    if (!token) res.redirect('/Login');
    const Player_ID = jwt_Decode(token);
    const PlayerID = Player_ID._id;
    console.log(PlayerID);
    try {
        const changeInnerLines = await InnerLines.findOneAndUpdate({UserID: PlayerID, InnerLines: req.body.InnerLines});
        res.redirect('/settings');
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

module.exports = router;