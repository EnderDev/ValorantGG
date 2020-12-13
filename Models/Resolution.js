const mongoose = require('mongoose');

const ResolutionSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    DisplayMode:{
        type: String,
        required: true
    },
    Resolution: {
        type: String,
        required: true
    },
    FrameRateLimit: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Resolution', ResolutionSchema);