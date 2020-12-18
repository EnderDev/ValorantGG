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
const Bio = require('../Models/Bio');
const AspectRatio = require('../Models/VideoSettings/AspectRatio');
const Color = require('../Models/Crosshair/Color');
const Outlines = require('../Models/Crosshair/Outlines');
const InnerLines = require('../Models/Crosshair/InnerLines');
const OuterLines = require('../Models/Crosshair/OuterLines');
const User = require('../Models/User');

router.get('/', async(req, res) => {
    const VerifiedUsers = await User.find({isVerified: true});
    res.render('Index', {
        VerifiedUsers: VerifiedUsers
    });
})

module.exports = router;