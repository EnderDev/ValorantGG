const router = require('express').Router();
const User = require('../Models/User');
const Keyboard = require('../Models/Peripherals/Keyboard');
const jwt = require('jsonwebtoken');
const jwt_Decode = require('jwt-decode');
const Headset = require('../Models/Peripherals/Headset');
const Mouse = require('../Models/Peripherals/Mouse');
const Monitor = require('../Models/Peripherals/Monitor');
const DisplayMode = require('../Models/VideoSettings/DisplayMode');
const Resolution = require('../Models/VideoSettings/Resolution');
const FrameRateLimit = require('../Models/VideoSettings/FrameRateLimit');
const Bio = require('../Models/Bio'); 
const AspectRatio = require('../Models/VideoSettings/AspectRatio');
const requestIp = require('request-ip');
const Color = require('../Models/Crosshair/Color');
const Outlines = require('../Models/Crosshair/Outlines');
const InnerLines = require('../Models/Crosshair/InnerLines');
const OuterLines = require('../Models/Crosshair/OuterLines');

router.get('/', async(req, res) => {
    const token = req.cookies.session;
    if (!token) res.redirect('/Login');
    const Player_ID = jwt_Decode(token);
    const PlayerID = Player_ID._id;
    console.log(PlayerID);
    const userName = await User.findOne({_id: PlayerID});
    const username = userName.Username;
    const userKeyboard = await Keyboard.findOne({UserID: PlayerID});
    const userHeadset = await Headset.findOne({UserID: PlayerID});
    const userMouse = await Mouse.findOne({UserID: PlayerID});
    const userMonitor = await Monitor.findOne({UserID: PlayerID});
    const userDisplayMode = await DisplayMode.findOne({UserID: PlayerID});
    const userResolution = await Resolution.findOne({UserID: PlayerID});
    const userFrameRateLimit = await FrameRateLimit.findOne({UserID: PlayerID});
    const userBio = await Bio.findOne({UserID: PlayerID});
    const userAspectRatio = await AspectRatio.findOne({UserID: PlayerID});
    const userColor = await Color.findOne({UserID: PlayerID});
    const userOutlines = await Outlines.findOne({UserID: PlayerID});
    const userInnerLines = await InnerLines.findOne({UserID: PlayerID});
    const userOuterLines = await OuterLines.findOne({UserID: PlayerID});
    console.log(userName);
    res.render('settings', {
        userCollection: userName,
        username:username,
        userMonitor: userMonitor,
        userMouse: userMouse,
        userHeadset: userHeadset,
        userKeyboard: userKeyboard,
        userDisplayMode:userDisplayMode,
        userResolution:userResolution,
        userFrameRateLimit: userFrameRateLimit,
        userBio: userBio,
        userAspectRatio : userAspectRatio,
        userColor: userColor,
        userOutlines: userOutlines,
        userInnerLines: userInnerLines,
        userOuterLines: userOuterLines
    });
})

module.exports = router;