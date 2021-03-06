const mongoose = require('mongoose');

const KeyboardSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    Keyboard:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Keyboard', KeyboardSchema);