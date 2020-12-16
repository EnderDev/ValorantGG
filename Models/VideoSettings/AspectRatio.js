const mongoose = require('mongoose');

const AspectRatio = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    AspectRatio:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AspectRatio', AspectRatio);