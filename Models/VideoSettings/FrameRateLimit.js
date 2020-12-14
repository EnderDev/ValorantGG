const mongoose = require('mongoose');

const FrameRateLimitSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    FrameRateLimit:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('FrameRateLimit', FrameRateLimitSchema);