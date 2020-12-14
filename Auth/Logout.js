const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.get('/', (req, res) => {
    res.clearCookie('session');
    res.redirect('/login');
});

module.exports = router;