const mongoose = require('mongoose');

const MouseSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    Mouse:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mouse', MouseSchema);