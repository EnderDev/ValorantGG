const router = require('express').Router();
const jwt_decode = require('jwt-decode');

router.get('/', async(req, res) => {
    const token = jwt_decode(req.cookies.session);
    console.log(token);
    const PlayerID = token._id
    console.log(PlayerID);
    res.json(PlayerID);
})

module.exports = router;