const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async(req, res) => {
    const gen = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.Password, gen);
    const user = new User({
        Username: req.body.Username,
        Email: req.body.Email,
        Password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        const token = jwt.sign({_id: user._id}, 'SECRETTTTTT');
        res.cookie('session', token);
        res.redirect('/register/complete');
        console.log(savedUser);
    } catch (error) {
        const errormssg = 'User already exists.'
        if (error.code == 11000 ) res.json(errormssg);
        console.log(error);
    }
})

router.get('/', (req, res) => {
    res.render('register');
})

module.exports = router;