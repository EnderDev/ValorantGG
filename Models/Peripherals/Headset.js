const mongoose = require('mongoose');

const HeadsetSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    Headset:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Headset', HeadsetSchema);