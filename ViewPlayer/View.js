const router = require('express').Router();
const User = require('../Models/User');
const Keyboard = require('../Models/Peripherals/Keyboard');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');
const Headset = require('../Models/Peripherals/Headset');
const Mouse = require('../Models/Peripherals/Mouse');
const Monitor = require('../Models/Peripherals/Monitor');
const DisplayMode = require('../Models/VideoSettings/DisplayMode');
const FrameRateLimit = require('../Models/VideoSettings/FrameRateLimit');
const Resolution = require('../Models/VideoSettings/Resolution');
const Bio = require('../Models/Bio');
const AspectRatio = require('../Models/VideoSettings/AspectRatio');
const Color = require('../Models/Crosshair/Color');
const Outlines = require('../Models/Crosshair/Outlines');
const InnerLines = require('../Models/Crosshair/InnerLines');
const OuterLines = require('../Models/Crosshair/OuterLines');

router.get('/view/:id', async(req, res) => {
    const PlayerName = req.params.id;
    const PlayerCollection = await User.findOne({Username: PlayerName});
    if(!PlayerCollection) res.render('404');
    const PlayerID = PlayerCollection._id;
    const PlayerKeyboard = await Keyboard.findOne({UserID: PlayerID});
    const PlayerHeadset = await Headset.findOne({UserID: PlayerID});
    const PlayerMouse = await Mouse.findOne({UserID: PlayerID});
    const PlayerMonitor = await Monitor.findOne({UserID: PlayerID});
    const PlayerDisplayMode = await DisplayMode.findOne({UserID: PlayerID});
    const PlayerFrameRateLimit = await FrameRateLimit.findOne({UserID: PlayerID});
    const PlayerResolution = await Resolution.findOne({UserID: PlayerID});
    const PlayerBio = await Bio.findOne({UserID: PlayerID});
    const playerAspectRatio = await AspectRatio.findOne({UserID: PlayerID});
    const PlayerColor = await Color.findOne({UserID: PlayerID});
    const PlayerOutlines = await Outlines.findOne({UserID: PlayerID});
    const PlayerInnerLines = await InnerLines.findOne({UserID: PlayerID});
    const PlayerOuterLines = await OuterLines.findOne({UserID: PlayerID});
    console.log(PlayerCollection);

    res.render('viewUser', {
        PlayerID: PlayerID,
        PlayerName: PlayerName,
        PlayerKeyboard: PlayerKeyboard,
        PlayerHeadset: PlayerHeadset,
        PlayerMouse: PlayerMouse,
        PlayerMonitor: PlayerMonitor,
        PlayerDisplayMode: PlayerDisplayMode,
        PlayerFrameRateLimit: PlayerFrameRateLimit,
        PlayerResolution: PlayerResolution,
        PlayerBio:PlayerBio,
        PlayerAspectRatio: playerAspectRatio,
        PlayerCollection: PlayerCollection,
        PlayerColor: PlayerColor,
        PlayerOutlines: PlayerOutlines,
        PlayerInnerLines: PlayerInnerLines,
        PlayerOuterLines: PlayerOuterLines
    });
})

module.exports = router;