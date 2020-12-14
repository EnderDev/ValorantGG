const router = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const cookieParser = require('cookie-parser');

router.post('/', async(req, res) => {
    const user = await User.findOne({Username: req.body.Username});
    if(!user) res.json('Invalid Username.');
    const validPassword = await bcrypt.compare(req.body.Password, user.Password);
    if(!validPassword) res.json('Invalid Password.');
    const token = jwt.sign({_id: user._id}, 'SECRETTTTTT');
    res.cookie('session', token);
    res.redirect('/settings');
});

router.get('/', (req, res) => {
    res.render('Login');
})

module.exports = router;