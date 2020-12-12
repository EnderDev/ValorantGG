const mongoose = require('mongoose');

const PeripheralsSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    Keyboard: {
        type: String,
        required: true,
    },
    Mouse: {
        type: String,
        required: true,
    },
    Headset: {
        type: String, 
        required: true,
    },
    Monitor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Peripherals', PeripheralsSchema);