const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello user, u have successfully registered.');
})

module.exports = router;