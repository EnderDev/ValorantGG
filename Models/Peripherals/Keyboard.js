const mongoose = require('mongoose');

const KeyboardSchema = new mongoose.Schema({
    UserID:{
        unique: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Keyboard:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Keyboard', KeyboardSchema);